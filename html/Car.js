class Car {
  constructor(carModel, price, color, carCompany) {
    this.carModel = carModel;
    this.price = price;
    this.color=color;
    this.carCompany= carCompany;
  }

  details(){
    return `Car Model: ${this.carModel}, Price: ${this.price}, Color: ${this.color}, Company: ${this.carCompany}`;
  }
}

var tesla = new Car("Model S", "$80,000", "Red", "Tesla");
var bmw = new Car("X5", "$60,000", "Black", "BMW");
var audi = new Car("A6", "$50,000", "White", "Audi");
var mercedes = new Car("C-Class", "$55,000", "Silver", "Mercedes-Benz");

console.log(tesla.details());
console.log(bmw.details());
console.log(audi.details());
console.log(mercedes.details());