#!/usr/bin/env node

const fn = process.argv[2]
if (!fn) throw new Error('there must pass server name!')

const app = require(`../functions/${fn}/app`);
const debug = require('debug')(`${fn}:server`);
app.listen(3000, () => {
  debug(`listen to prot 3000`)
})
