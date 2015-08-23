class Insured {
  public premium: number;
   
  constructor(private name: string) {}
  
  displaySummary(){
    console.log("Total premium for " + this.name + " is " + this.premium);
  }

}

var insured = new Insured("Mariusz");
insured.premium = 300;
//insured.permium = 300;
//insured.premium = new Insured("Stefan");

insured.displaySummary();
