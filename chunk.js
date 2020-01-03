const chunkArray = (arr, len) => {
  const chunkArray = [];
  //looping through array
  arr.forEach(element => {
    //getting the last element
    const lastEle = chunkArray[chunkArray.length - 1];
    ///check if last element and is lastEle length is equal to chunk len
    if (!lastEle || lastEle.length === len) {
      chunkArray.push([element]);
    } else {
      lastEle.push(element);
    }
  });
  return chunkArray;
};
module.exports = chunkArray;
