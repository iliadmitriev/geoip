#!/usr/bin/env python3 -u

import maxminddb
import fileinput
import json
from sys import stderr

db_file_name='GeoIP2-City-Europe.mmdb'

try:
    reader = maxminddb.open_database(db_file_name)
    for line in fileinput.input():
        try:
            ip = line.rstrip()
            response = reader.get(ip)
            
            print (json.dumps(response)) if response else None;
        except ValueError:
            print ('Unable to parse ip "{}"'.format(ip), file=stderr)


except FileNotFoundError:
    print ('Couldn\'t find file "{}"'.format(db_file_name), file=stderr)
    exit()
except maxminddb.errors.InvalidDatabaseError:
    print ('Couldn\'t read file "{}"'.format(db_file_name), file=stderr)
    exit()
finally:
    reader.close()


        
