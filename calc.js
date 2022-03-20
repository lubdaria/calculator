
// Калькулятор
function Calculator(){
  this.read = function(){
    num1 = prompt("Enter x?", [1]);
    num2 = prompt("Enter y?", [1]);
  };

  this.sum = function(){
    return +num1 + +num2;
  };

  this.mul = function(){
    return num1 * num2;
  };
  };

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );




// Акумулятор
function Accumulator(startingValue){
  this.value = startingValue;
  
  this.read = function(){
    num = +prompt("Сколько нужно добавить?", [1]);
    return this.value += num;
 };
}

let accumulator = new Accumulator(5); 

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value);

