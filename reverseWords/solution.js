var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var words = line.split(" ")
  var reversed = [];
  for (var i = words.length; i >= 0; i--) {
    if (words[i] === " " || words[i] === undefined) continue
    reversed.push(words[i]);
  }
  return reversed.join(" ");
}
