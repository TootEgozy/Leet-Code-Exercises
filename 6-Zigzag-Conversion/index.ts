/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s: string, numRows: number) => {
  const collection = Array.from(Array(numRows)).fill([]);

  let des = true; // is the direction descending?
  let arrLoc = 0; // index of the subarray to push into

  s.split('').forEach((char) => {
    collection[arrLoc].push(char);
    console.log(des);
    if(des) {
      if(collection[arrLoc + 1]) arrLoc += 1;
      des = false;
      arrLoc -= 1;
    } else {
      if(collection[arrLoc - 1]) arrLoc -= 1;
      des = true;
      arrLoc += 1;
    }
  });

  console.log(collection)

};

convert("abcdefg", 2);

export { convert }