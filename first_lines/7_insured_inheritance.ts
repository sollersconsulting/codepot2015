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
  
  summary(){
    return "Insured: " + this.name + "\n" +
           "---------------------------\n" +
           "Total premium: " + this.premium + "\n" +
           "City: " + this.address.city + "\n";
  }
  
  moveTo(address: Address) {
    this.address = address;
  }

}

class Company extends Insured {
  NIP: number;
  summary() {
    return super.summary() +
           "NIP: " + this.NIP + "\n";
  }
}

class Person extends Insured {
  constructor(name: string, private age: number){
    super(name);
  }
  summary() {
    return super.summary() +
           "Age: " + this.age + "\n";
  }
}

var addressReceivedFromWebService = {street: "ul. Marszalkowska", houseNo: "1a", flatNo: 30, city: "Warsaw"};

var insured = new Insured("Someone");
insured.premium = 300;
insured.moveTo(addressReceivedFromWebService);
alert(insured.summary());

var mariusz = new Person("Mariusz", 50);
mariusz.premium = 300;
mariusz.moveTo(addressReceivedFromWebService);
alert(mariusz.summary());

var sollers = new Company("Sollers Consulting");
sollers.NIP = 1132463039;
sollers.premium = 300;
sollers.moveTo({street: "ul. Wisniowa", houseNo: "40", flatNo: null, city: "Warsaw"});
alert(sollers.summary());
