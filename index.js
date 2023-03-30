const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
    get appetizers() {
      return this._courses.appetizers;
  },
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
  },
    get mains() {
      return this._courses.mains;
  },
    set mains(mainsIn) {
      this._courses.mains = mainsIn;
  },
    get desserts() {
      return this._courses.desserts;
  }, 
    set desserts(dessertIn) {
      this._courses.appetizers = dessertIn;
  },
  get courses() {
    return {
     appetizers: this.appetizerIn,
     mains: this.mainsIn,
     desserts: this.dessertIn
		}
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

		this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    const dishes = courseName;
 
    const randomIndex = Math.floor(Math.random() * dishes.length);
    console.log(dishes[randomIndex]);
    return dishes[randomIndex];
    
  },
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse(this._courses.appetizers);
    const main = this.getRandomDishFromCourse(this._courses.mains);
    const dessert = this.getRandomDishFromCourse(this._courses.desserts);
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} the price is $${totalPrice}.`;
  }
  

  
}
menu.addDishToCourse('appetizers', 'soup', 4.25);
menu.addDishToCourse('appetizers', 'crab', 8.95);
menu.addDishToCourse('appetizers', 'bruscetta', 4.75);
menu.addDishToCourse('appetizers', 'mushrooms', 3.75);
menu.addDishToCourse('appetizers', 'cheese spead', 11.75);
menu.addDishToCourse('mains', 'lamb shank', 12.75);
menu.addDishToCourse('mains', 'steak and chips', 16.75);
menu.addDishToCourse('mains', 'lamb curry', 13.25);
menu.addDishToCourse('mains', 'Fish stew', 16.50);
menu.addDishToCourse('mains', 'cottage pie', 13);
menu.addDishToCourse('mains', 'lobstar', 22.50);
menu.addDishToCourse('desserts', 'ice cream', 5);
menu.addDishToCourse('desserts', 'fudge cake', 5.75);
menu.addDishToCourse('desserts', 'coffee', 2.75);
menu.addDishToCourse('desserts', 'cheesecake', 5.50);
menu.addDishToCourse('desserts', 'bread and butter pudding', 5.25);
menu.addDishToCourse('desserts', 'apple stroodle', 4.25);


let meal = menu.generateRandomMeal();
console.log(meal);
