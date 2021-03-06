var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  return line.split("").map(function(num) {
    return parseInt(num);
  }).reduce(function(x, y) {
    return x + y;
  })
}
