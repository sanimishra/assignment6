import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import SourceMapSupport from 'source-map-support';

import render from './render.jsx';


const port = process.env.UI_SERVER_PORT || 8000;
const app = express();

SourceMapSupport.install();
dotenv.config();

app.use(express.static('public'));


if (!process.env.UI_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = 'http://localhost:3000/graphql';
}
if (!process.env.UI_SERVER_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = process.env.UI_API_ENDPOINT;
}

app.get('/env.js', (req, res) => {
  const env = { UI_API_ENDPOINT: process.env.UI_API_ENDPOINT };
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

app.listen(port, () => {
  console.log(`UI started on port ${port}`);
});
app.get('/about', render);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});
