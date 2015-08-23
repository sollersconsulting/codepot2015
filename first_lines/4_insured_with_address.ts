class Insured {
  public premium: number;
  private address;
  
  constructor(private name: string) {}
  
  displaySummary(){
    console.log("Total premium for " + this.name + " is " + this.premium + ", he's living in " + this.address.city);
  }
  
  moveTo(street: string, houseNo: string, flatNo: number, city: string) {
    this.address = {street: street, houseNo: houseNo, flatNo: flatNo, city: city};
  }

}

var insured = new Insured("Mariusz");
insured.premium = 300;
var addressReceivedFromWebService = {street: "ul. Marszalkowska", houseNo: "1a", flatNo: 30, city: "Warsaw"};
insured.moveTo(addressReceivedFromWebService.street, addressReceivedFromWebService.houseNo, addressReceivedFromWebService.flatNo,
                addressReceivedFromWebService.city);

insured.displaySummary();
