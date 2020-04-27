
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import fetch from 'isomorphic-fetch';

export default async function graphQLFetch(query, variables = {}, showError = null) {
  const apiEndpoint = (__isBrowser__) // eslint-disable-line no-undef
    ? window.ENV.UI_API_ENDPOINT
    : process.env.UI_SERVER_API_ENDPOINT;
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }, showError = null),
    });
    const body = await response.text();
    const result = JSON.parse(body);
    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code === 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        if (showError) { showError(`${error.message}:\n ${details}`); }
      } else if (showError) {
        showError(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    if (showError) { showError(`Error in sending data to server: ${e.message}`); }
    return null;
  }
}
