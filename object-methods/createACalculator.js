let calculator = {
    read() {
        this.firstNumber = prompt();
        this.secondNumber = prompt();
    },
    sum() {
        return Number.parseInt( this.firstNumber) + Number.parseInt( this.secondNumber);
    },
    mul() {
        return this.firstNumber * this.secondNumber;
        
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );