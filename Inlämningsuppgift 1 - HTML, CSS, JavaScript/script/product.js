class Product{
    constructor(name, price, id){
        this.name = name;
        this.price = price;
        this.id = id;
    }

    GetInfo(){
        console.log("Name: " + this.name + ", Price: " + this.price);
    }
}