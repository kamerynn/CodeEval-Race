var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var words = line.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (typeof words[i][0] === 'string') {
      word = words[i].split("");

      word[0] = words[i][0].toUpperCase()
      words[i] = word.join("")
    }
  }
  return words.join(" ");
}
