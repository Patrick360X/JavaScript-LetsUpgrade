let criminals = [
    {
        name: "Pradyumna",
        age: "20",
        country: "India",
        hobbies: ['Learn', 'Play', 'Read']
    },
    {
        name: "Lokesh",
        age: "35",
        country: "Canada",
        hobbies: ['Read', 'Drink', 'Play']
    },
    {
        name: "Abhishek",
        age: "25",
        country: "Australia",
        hobbies: ['Play', 'Kill', 'Code']
    },

    {
        name: "Nimesh",
        age: "31",
        country: "India",
        hobbies: ['Code', 'Learn', 'Hack']
    }
];

function displayAge(criminals) {
    console.log("People with Age Less than 30 ");

    console.log("______________________________________________________________________________");
   criminals.forEach(element => {
      if(element.age<30)
      {
          console.log(element);
      }
       
   });
}
function displayCountry(criminals) {
    console.log("People who live in India");

    console.log("______________________________________________________________________________");
    criminals.forEach(element => {
        if (element.country == "India") {
            console.log(element);
        }

    });
}

displayAge(criminals);
displayCountry(criminals);