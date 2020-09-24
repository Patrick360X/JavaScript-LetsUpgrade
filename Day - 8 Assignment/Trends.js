let merch = [
    {
      id: 1,
      name: "Allen-Soley Blazer ",
      size: "M",
      color: "Blue",
      price: 8000,
      image: "https://agastya8.github.io/js_assignment8/images/3-piece-tux.webp",
      description: "Classic 2 piece Blazer",
    },
    {
      id: 2,
      name: "Men's Hoodies",
      size: "M",
      color: "Blue",
      price: 6000,
      image: "https://agastya8.github.io/js_assignment8/images/black-tux.jpg",
      description: "Hoodies From HRX",
    },
  
    {
      id: 3,
      name: "HRX T-Shirt",
      size: "L",
      color: "Dark Blue",
      price: 9000,
      image: "https://agastya8.github.io/js_assignment8/images/double-brested.jpg",
      description: "Simple Blue T-Shirt",
    },
  
    {
      id: 4,
      name: "Traditional Kurta",
      size: "L",
      color: "Black",
      price: 3000,
      image: "https://agastya8.github.io/js_assignment8/images/brouge.jpg",
      description: "Traditional Wedding Black Kurta",
    },
  
    {
      id: 5,
      name: "PartyWear Suits",
      size: "M",
      color: "Light-Blue",
      price: 8000,
      image:"https://agastya8.github.io/js_assignment8/images/burnt-orange-tux.jpg",
      description: "Party Wear Light Blue Jacket",
    },
  
    {
      id: 6,
      name: "Office Party Suit",
      size: "M",
      color: "Midnight-Blue",
      price: 2000,
      image:"https://agastya8.github.io/js_assignment8/images/clutter-and-gloss.jpg",
      description: "Gentlemen Blue Blazzer",
    },

    {
      id: 7,
      name: "Floral Frock",
      size: "S",
      color: "White",
      price: 7000,
      image: "https://agastya8.github.io/js_assignment8/images/doubl-brested-black.jpg",
      description: "Good looking Floral Frock",
    },

    {
      id: 8,
      name: "Traditional Lehenga",
      size: "S",
      color: "Black",
      price: 10000,
      image: "https://agastya8.github.io/js_assignment8/images/bluestrips-double-brested.jpg",
      description: "Traditional Black Wedding Lehenga",
    },

    {
      id: 9,
      name: "Evening Gown",
      size: "L",
      color: "Blue",
      price: 1200,
      image: "https://agastya8.github.io/js_assignment8/images/heure.jpg",
      description: "Blue Evening Gown",
    },

    {
      id: 10,
      name: "Red Sarees",
      size: "M",
      color: "Red",
      price: 4000,
      image: "https://agastya8.github.io/js_assignment8/images/jacket.jpg",
      description: "Good Looking Red Saree",
    },

    {
      id: 11,
      name: "White Frock",
      size: "S",
      color: "White",
      price: 6000,
      image: "https://agastya8.github.io/js_assignment8/images/leatheroxford.webp",
      description: "Beautiful White Frock",
    },

    {
      id: 12,
      name: "White Kurta",
      size: "M",
      color: "White",
      price: 12000,
      image: "https://agastya8.github.io/js_assignment8/images/singleBrestCoat.jpg",
      description: "Simple White Long Kurta",
    },

  ];

   let cart=[];
   let count=0;
  function displaymerch(merchd, type="main", place="card") {
      console.log(merchd);
      let strmerch = "";
      let arrmerch="";
      merchd.forEach(function (ele, index) {
          if(type=="main"){
              strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
          </p>
        </div>
        </div>`;
        arrmerch+=strmerch;
          }
          
      if(type=="cartd"){
                  strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="/images/${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
          </p>
        </div>
        </div>`;
              
          arrmerch += strmerch;    
  
          }
      });
      
  document.getElementById(place).innerHTML = arrmerch;
      
  }
  
  
  function getProductByID(mercha, id) {
    return mercha.find(function (ele) {
      return ele.id == id;
    });
  }
  let flag=false;
  function addToCart(id) {
  flag=false;
    let item = getProductByID(merch, id);
  
    cart.forEach(function(element){
        if(element.id==item.id){
            flag=true;
            
        }
        
  
    })
    if (flag) {
        alert("Manners Maketh Man!\ndont add the same product twice");
      return 0;
    }
    cart.push(item);
    count+=1;
    document.getElementById("numb").innerText=count;
    let type="cartd";
    let place="cartcard";
    displaymerch(cart, type, place);
  
  }
  
  
  function search(){
      console.log("calling");
  }
  function deletemerch(id){
    let item = getProductByID(merch, id);
    let index = cart.findIndex(function (item1) {
      return item1.id == id;
    });
    cart.splice(index, 1);
    count-=1;
     document.getElementById("numb").innerText = count;
     let type = "cartd";
     let place = "cartcard";
     displaymerch(cart, type, place);
  }
  
  function filter(){
      let minv=document.getElementById("minp").value;
      let maxv = document.getElementById("maxp").value;
      let items= merch.filter(function(itemsl){
          return itemsl.price>=minv && itemsl.price<=maxv;
      })
       displaymerch(items);
      document.getElementById("minp").value="";
        document.getElementById("maxp").value="";
  }
  
  function search(){
      let str= document.getElementById("serstr").value;
      console.log(str);
      let items = merch.filter(function(ele) {
        return ele.name.indexOf(str)!=-1;
      });
      displaymerch(items);
  
  
  }
  displaymerch(merch);