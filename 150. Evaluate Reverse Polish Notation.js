
const evalRPN = function(tokens) {
    const map = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => Math.floor(a / b),
    }

    const stack = [];

    for(let i = 0; i < tokens.length; i++) {
      const t = tokens[i];

      if(Object(map).hasOwnProperty(t)) {
        const num1 = stack.pop();
        const num2 = stack.pop();
        const result = map[t](num2, num1);
        stack.push(result);
      } else {
        stack.push(Number(t));
      }
    }

    return stack[0];
};

const  tests = [
  [["2", "1", "+", "3", "*"], 9],  
  [["4", "13", "5", "/", "+"], 6], 
  [["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], 22],
  [["42"], 42],
  [["-4", "2", "/"], -2], 
  [["5", "1", "2", "+", "4", "*", "+", "3", "-"], 14] 
];

tests.forEach((c) => console.log(evalRPN(c[0])))
