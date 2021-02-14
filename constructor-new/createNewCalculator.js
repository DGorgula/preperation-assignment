function Calculator() {
    this.read = () => {
        this.firstNumber = prompt();
        this.secondNumber = prompt();
    },
    this.sum = ()=> {
        return Number.parseInt( this.firstNumber)+Number.parseInt( this.secondNumber);
    },
    this.mul = () =>{
        return this.firstNumber*this.secondNumber;
    }
} {
    
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );