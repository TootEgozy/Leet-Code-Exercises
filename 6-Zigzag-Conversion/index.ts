/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s: string, numRows: number) => {
  const collection = Array.apply(null, Array(numRows)).map((): string[] => []);

  let des = true; // is the direction descending?
  let arrLoc = 0; // index of the subarray to push into

  s.split('').forEach((char) => {
    collection[arrLoc].push(char);
    if(des) {
      if(collection[arrLoc + 1]) arrLoc += 1;
      else {
        des = false;
        arrLoc -= 1;
      }
    } else {
      if(collection[arrLoc - 1]) arrLoc -= 1;
      else {
        des = true;
        arrLoc += 1;
      }
    }
  });

  console.log(collection)

};

convert("abcdefghijklmnop", 3);

export { convert }