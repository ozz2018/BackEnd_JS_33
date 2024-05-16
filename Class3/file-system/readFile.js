const fs = require ('node:fs')

const content= fs.readFileSync('hello.txt','utf8' )
console.log('content:',content)