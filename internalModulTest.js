const os = require('os');
const url = require('url');
const querystring = require('querystring');
const util = require('util');
const crypto = require('crypto');
const fs = require('fs');ii

//os
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.cpus());
console.log(os.networkInterfaces());

//url, querystring
let parsedObject = url.parse('http://www.moon.com/store/books?page=10&num=10');
console.log(parsedObject);
console.log(querystring.parse(parsedObject.query));

parsedObject = url.parse('http://www.moon.com/store/books?page=10&num=10', true);
console.log(parsedObject);

//util
const data = util.format('%d + %d = %d', 52, 273, 52+273);
console.log(data);

//crypto-hash
const shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
const output = shasum.digest('hex');
console.log('crypto_hash:', output);

//crypto-cipher
const key = '나만 아는 키';
const input = 'passowrd';

const cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
const cipheredOutput = cipher.final('base64');

const decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
const decipheredOutput = decipher.final('utf8');

console.log('원래 문자열: ' + input);
console.log('암호화: ' + cipheredOutput);
console.log('암호화 해제: ' + decipheredOutput);
