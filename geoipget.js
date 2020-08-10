#!/usr/bin/env node

const maxmind = require('maxmind');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const mm = maxmind.open('/Users/dmitriev/Downloads/GeoIP2-City-Europe.mmdb')

rl.on('line', function(line){
  mm.then((lookup) => {
            processLine(lookup, line);
      })
  });


function processLine(record, ip) {
   if (maxmind.validate(ip)) {
     let ipData = record.get(ip);
	  console.log(JSON.stringify(ipData));
  }
}
