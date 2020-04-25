const { getDb, getNextSequence } = require('./db.js');

async function list() {
  const db = getDb();
  const products = await db.collection('products').find({}).toArray();
  return products;
}
async function add(_, { product }) {
  const db = getDb();
  const newProduct = { ...product };
  newProduct.id = await getNextSequence('products');
  const result = await db.collection('products').insertOne(newProduct);
  const savedProducts = await db.collection('products').findOne({ _id: result.insertedId });
  return savedProducts;
}
async function get(_, { id }) {
  const db = getDb();
  const products = await db.collection('products').findOne({ id });
  return products;
}
async function update(_, { id, changes }) {
  const db = getDb();
  if (changes.id) {
    const product = await db.collection('products').findOne({ id });
    Object.assign(product, changes);
  }
  await db.collection('products').updateOne({ id }, { $set: changes });
  const savedProduct = await db.collection('products').findOne({ id });
  return savedProduct;
}
async function remove(_, { id }) {
  const db = getDb();
  const products = await db.collection('products').findOne({ id });
  if (!products) return false;
  products.deleted = new Date();
  let result = await db.collection('deleted_products').insertOne(products);
  if (result.insertedId) {
    result = await db.collection('products').removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}
module.exports = {
  list, add, get, update, remove,
};
