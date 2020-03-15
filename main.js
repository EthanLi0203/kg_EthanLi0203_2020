#!/usr/bin/env node
var args = process.argv.slice(2);
const isMappable = (s1, s2) => {

  var o1 = new Set();
  var o2 = new Set();
  s1.split('').forEach(c => {if(!o1.has(c)) o1.add(c)});
  s2.split('').forEach(c => {if(!o2.has(c)) o2.add(c)});

  return o1.size >= o2.size; 
};

if(args.length != 2){
    throw new Error("For this test case, there are no exactly two arguments from stdin")
}
console.log(isMappable(args[0], args[1]))

// let i=0;
// s1.forEach((s) => {
//     console.log(`s1:"${s}", s2:"${s2[i]}" \n result: ${isMappable(s, s2[i])}\n`);
//     i++;
// })