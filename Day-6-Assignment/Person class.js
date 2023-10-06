Write a “person” class to hold all the details.

class Person{

constructor (name,age,gender,address,job,location,city,language,intrest,favt){
this.name=name;
this.age=age;
this.gender=gender;
this.address=address;
this.job=job;
this.location=location;
this.city=city;
this.language=language;
this.intrest=intrest;
this.favt=favt;
}

details() {
    console.log(` Name: ${this.name}
                  Age: ${this.age}
                  Gender: ${this.gender}
                  Address: ${this.address}
                  Job: ${this.job}
                  Location: ${this.location}
                  City: ${this.city}
                  Language: ${this.language}
                  Intrest: ${this.intrest}
                Favt: ${this.favt}`)
   }
};

let person1=new Person("priya","25","female","No 21 thiruninravur","AR in medical Billing","Ambattur","Chennai","Tamil","Gardening","Music")
person1.details()


