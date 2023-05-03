const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin': __dirname+'/example.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

input=input[0].split(" ").map((item)=>+item);

solution(input[0,0],input[0,1], input[0,2]);

function solution(A,B,C){
    A=input[0,0]
    B=input[0,1]
    C=input[0,2]
    console.log(A+B+C)
}