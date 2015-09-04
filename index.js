#!/usr/bin/env node
var express = require('express');
var proxy = require('express-http-proxy');

var app = express();

if(!process.argv[2]) {
    process.exit(1);
}

app.use('/api/core', proxy(process.argv[2]));

app.listen(3003);

