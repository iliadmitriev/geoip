const maxmind = require('maxmind');

const lookup = maxmind.open('/Users/dmitriev/Downloads/GeoIP2-City-Europe.mmdb');

var location = lookup.lookup('109.252.65.152');
