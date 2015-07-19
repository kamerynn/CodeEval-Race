var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var num = parseInt(line);
  function fibonacci (num) {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    if (num === 2) return 1;
    return fibonacci(num-1) + fibonacci(num-2);
  }

  return fibonacci(num);
}