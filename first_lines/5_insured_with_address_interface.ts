interface Address {
  street: string;
  houseNo: string;
  flatNo: number;
  city: string;
}

class Insured {
  public premium: number;
  private address: Address;
  
  constructor(private name: string) {}
  
  displaySummary(){
    console.log("Total premium for " + this.name + " is " + this.premium + ", he's living in " + this.address.city);
  }
  
  moveTo(address: Address) {
    this.address = address;
  }

}

var insured = new Insured("Mariusz");
insured.premium = 300;
var addressReceivedFromWebService = {street: "ul. Marszalkowska", houseNo: "1a", flatNo: 30, city: "Warsaw"};
insured.moveTo(addressReceivedFromWebService);

insured.displaySummary();
