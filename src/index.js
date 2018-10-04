module.exports = function longestConsecutiveLength(array) {
  const hashTable = {};
  let count = 0, max = 0;
  for (let i=0; i<array.length; i++){
    hashTable[array[i]]=array[i]+1;
  }
  const repeat = (num) => {
    if (hashTable[num]===undefined) {
      if(count>max){max=count}
      count=0;      
    } else {
      count++;
      repeat(hashTable[num]);
    }
  }

  for (let i=0; i<array.length; i++){
    repeat(array[i]);
  }
  return max;
}
