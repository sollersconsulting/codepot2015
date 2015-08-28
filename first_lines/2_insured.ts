class Insured {
  private name;
  public premium;
   
  constructor(name) {
    this.name = name;
  }i
  
  displaySummary(){
    alert("Total premium for " + this.name + " is " + this.premium);
  }

}

var insured = new Insured("Mariusz");
insured.premium = 300;
insured.displaySummary();
