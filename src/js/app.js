// 1.Question

let sual = confirm("background ne rengdir?");

if (sual) document.body.style.backgroundColor = "black";


// 2.Question

function showAge(){
    let age = prompt("enter your age:")
    if(age<18)document.write("You are not allowed to enter")
    else{document.write("You are allowed to enter")}
}



// 3.Question with Objects

const person = {
    ad: "Elmir",
    soyad: "Heyderzade",
    password:12345,
    age: 3,
    fullName: function () {
        return `${this.ad} ${this.soyad} ${this.password}`
    }
}

let fullnameElement = document.getElementById("showName");
fullnameElement.innerHTML=person.fullName().toUpperCase();

// 3.Question with Class


class User {
    constructor(ad, soyad, password) {
      this.ad = ad;
      this.soyad = soyad;
      this.password = password;
    }

    fullname() {
      return this.ad + " " + this.soyad + " " + this.password;
    }
  }

  const user = new User("Selale", "Heyderova", "12345");

  
    var ShowFullName = document.getElementById("fullName");
    ShowFullName.innerHTML = user.fullname().toUpperCase();
  console.log(ShowFullName)
