function Insured(name){
   this.name = name;
}

Insured.prototype.displaySummary = function(){
    alert("Total premium for " + this.name + " is " + this.premium);
};

var insured = new Insured("Mariusz");
insured.premium = 300;

insured.displaySummary();
