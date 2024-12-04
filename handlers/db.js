const Keyv = require('keyv');
const db = new Keyv('sqlite://Worldcraftd.db');

module.exports = { db }