import { Stack } from "../Stack";

export class Methods {
  open = ["{", "<", "[", "("];
  closed = ["}", ">", "]", ")"];
  closedToOpen: {
    [s: string]: string;
  } = {
    "}": "{",
    ">": "<",
    "]": "[",
    ")": "(",
  };
  operators = ['%','*','/','+','-'];
  checkBalancingInParsedString() {
    const str1 = "{asdf";
    console.log(str1 + " is " + this.isBalanced(str1));
    const str2 = "{asdf}";
    console.log(str2 + " is " + this.isBalanced(str2));
  }

  isBalanced(str: string) {
    const stack = new Stack();
    let isBalanced: boolean = true;
    for (let s of str) {
      let poppedEl: string = "";
      // add only open parenthesis
      // when close parenthesis, is encountered; check that stack should always have same open parenthesis to be balanced
      this.open.includes(s) && stack.push(s);

      if (this.closed.includes(s)) {
        poppedEl = stack.pop();

        if (poppedEl !== this.closedToOpen[s]) {
          isBalanced = false;
        }
      }
    }
    if (!stack.isEmpty()) {
      isBalanced = false;
    }
    return isBalanced;
  }

  evaluatePostfix(str: string) {
    const stack = new Stack();
    for(let s of str) {
      // if operand, push to stack
      !this.operators.includes(s) && stack.push(s);
      if(this.operators.includes(s)) {
        const op1 = stack.pop();
        const op2 = stack.pop();
        const resultant = eval(`${op2}${s}${op1}`);
        stack.push(resultant);
      }
    }
    console.log('result is ' + stack.top());
  }
}
