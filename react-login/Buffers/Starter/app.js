var buf = new Buffer('Hello World', 'utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('fuck');
console.log(buf.toString())
