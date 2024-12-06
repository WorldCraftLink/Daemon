const Keyv = require('keyv');
const db = new Keyv('sqlite://WorldCraftd.db');

module.exports = { db }