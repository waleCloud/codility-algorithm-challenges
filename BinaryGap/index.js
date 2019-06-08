
function solution(N) {
  if(N<5) return 0; 
  
  const bin = parseInt(N, 10).toString(2); // convert to binary base 2.
  const binArr = bin.split(''); // make binary into array of strings
  
  let point = 0;
  let newArr = [];
  for(let i=0; i<binArr.length; i++) {
     if(binArr[i] == '1') {
         point = point + 1;
         newArr.push(i);
     }
  }
  if(point <= 1) return 0;
  
  let diffArr = [];
  for(let i=newArr.length-1; i>0; i--) {
      diffArr.push((newArr[i] - newArr[i-1]) - 1);
  }
   
   diffArr.sort((a, b) => (b-a)); // find the biggest difference
   
   return diffArr[0];
}
