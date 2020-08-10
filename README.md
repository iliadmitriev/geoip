# geoip cli tool

# install 

## node

Install using node.js

```
npm i maxmind
```

## python3

Install using Python 3

```
python3 -m pip install maxminddb
```

# use 

```
echo '1.1.1.1' | ./geoipget.js | jq '.country.names.en'
```

```
cat inputfile.txt | ./geoipget.js | jq '.country.names.en' > outputfile.txt
```

Or

```
echo '1.1.1.1' | ./geoipget.py | jq '.country.names.en'
```

```
cat inputfile.txt | ./geoipget.py | jq '.country.names.en' > outputfile.txt
```
