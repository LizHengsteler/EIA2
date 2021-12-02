namespace L09_1_OldMacDonaldsFarm {
    /*Aufgabe: L09.1 OldMacDonaldsFarm
  Name: Liz Hengsteler
  Matrikel: 268386
  Datum: 25.11.2021
  Zusammenarbeit: Theo Züffle, Kristoffer Müller
  Quellen: Praktikum mit Markus, Inverted Classroom, W3Schools*/
    window.addEventListener("load", handleLoad);

    let animals: Animal [] = [];
    let stock: Stock [] = [];
    let index: number = 0;

    function handleLoad(_event: Event): void {
        console.log("handleLoad");
        let cow: Animal = new Animal ("cow", "Paula", "wheat", 10, "muuuh");
        let chicken: Animal = new Animal ("chicken", "Darcy", "seeds", 5, "gack");
        let dog: Animal = new Animal ("dog", "Peanut", "treat", 3, "woof");
        let donkey: Animal = new Animal ("donkey", "Elisabeth", "grass", 50, "iaia");
        let pig: Animal = new Animal ("pig", "Peppa", "grains", 20, "oink");
        animals.push(cow, chicken, dog, donkey, pig);

        let wheat: Stock = new Stock ("wheat", 300);
        let seeds: Stock = new Stock ("seeds", 300);
        let treat: Stock = new Stock ("treat", 300);
        let grass: Stock = new Stock ("grass", 300);
        let grains: Stock = new Stock ("grains", 300);
        stock.push(wheat, seeds, treat, grass, grains);
        
    }
    

}

/*namespace oldmacdonald{

class Animal {
    animalType: string;
    name: string;
    sound: string;
    foodType: string;
    foodRation: number;
    foodAmount: number;

    constructor(a: string, n: string, s: string, t: string, r: number, f: number) {
        this.animalType = a;
        this.name = n;
        this.sound = s;
        this.foodType = t;
        this.foodRation = r;
        this.foodAmount = f;
    }
   format(){
        return The ${this.animalType} named ${this.name} sings ${this.sound}, and eats ${this.foodRation} Kg of ${this.foodType}. ${this.foodAmount} Kg of ${this.foodType} are left.; 
    }
}
window.addEventListener("load", handleLoad);
const  animal1 = new Animal("Dog", "Hadis", "wuff", "Meat", 3, 25);
const  animal2 = new Animal("Cat", "Apollon", "miau", "Tuna", 2, 14);
const  animal3 = new Animal("Cow", "Hera", "muh", "Gras", 20, 300);
const  animal4 = new Animal("Pig", "Ares", "oing", "Junk", 5, 70);
const  animal5 = new Animal("sheep", "Hermes", "meh", "Hay", 8, 270);

function handleLoad(): void{
    dog();
}

function dog(): void{
    animal1.foodAmount = animal1.foodAmount - animal1.foodRation;
    document.body.innerHTML = animal1.format(); 
    setTimeout(cat, 5000); 

}

function cat(): void{
    animal2.foodAmount = animal2.foodAmount - animal2.foodRation;
    document.body.innerHTML = animal2.format();
    setTimeout(cow, 5000); 
}
function cow(): void{
    animal3.foodAmount = animal3.foodAmount - animal3.foodRation;
    document.body.innerHTML = animal3.format(); 
    setTimeout(pig, 5000);
}
function pig(): void{
    animal4.foodAmount = animal4.foodAmount - animal4.foodRation;
    document.body.innerHTML = animal4.format();
    setTimeout(sheep, 5000); 
}
function sheep(): void{
    animal5.foodAmount = animal5.foodAmount - animal5.foodRation;
    document.body.innerHTML = animal5.format();
    setTimeout(dog, 5000);
}

}*/


