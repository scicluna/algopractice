const {Buffer} = require('node:buffer')

String.prototype.toBase64 = function() {
  const buf = Buffer.from(this, 'utf8');
  return buf.toString('base64')
}

String.prototype.fromBase64 = function() {
    const buf = Buffer.from(this, 'base64');
  return buf.toString('utf8')
}

console.log('hello'.toBase64())
console.log('aGVsbG8'.fromBase64())