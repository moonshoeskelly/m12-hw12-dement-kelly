//Create Desserts class, pass properties called "type" and "calories"
class Desserts {
  constructor (type, calories) {
    this.type = type;
    this.calories = calories;
  }
}

//Create subclass called IceCream that extends Desserts, pass in parent properties and new properties called "flavor" and "scoops"

class IceCream extends Desserts {
  constructor (type, calories, flavor, scoops) {
    super(type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }

  //method called "includeSpoon", log the string 'Here is your spoon!' to the console

  includeSpoon () {
    console.log('Here is your spoon!');
  }
}


//create new instance called vanillaIceCream passing in values "Ice Cream", 340, "Vanilla", and 3

const vanillaIceCream = new IceCream ('Ice Cream', 340, 'Vanilla', 3);

//Console.log vanillaIceCream
console.log(vanillaIceCream);

//call the includeSpoon() method on vanillaIceCream
vanillaIceCream.includeSpoon ();
