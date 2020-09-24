let merch = [
    {
      id: 1,
      name: "Allen-Soley Blazer ",
      size: "M",
      color: "Blue",
      price: 8000,
      image: "http://lubasfashions.com/wp-content/uploads/2014/02/navy-blue-blazer.jpg",
      description: "Classic 2 piece Blazer",
    },
    {
      id: 2,
      name: "Men's Hoodies",
      size: "M",
      color: "Blue",
      price: 1500,
      image: "https://cdnc.lystit.com/photos/42d6-2015/08/18/jcrew-navy-tall-pullover-hoodie-blue-product-2-869849077-normal.jpeg",
      description: "Hoodies From HRX",
    },
  
    {
      id: 3,
      name: "HRX T-Shirt",
      size: "L",
      color: "Orange",
      price: 1000,
      image: "https://assets.myntassets.com/h_480,q_100,w_360/v1/assets/images/1700923/2018/3/15/11521099039866-HRX-by-Hrithik-Roshan-Men-Orange-Printed-T-shirt-661521099039619-1.jpg",
      description: "Sports Orange T-Shirt",
    },
  
    {
      id: 4,
      name: "Traditional Kurta",
      size: "L",
      color: "Black",
      price: 6000,
      image: "https://images.manyavar.com/product_images/18212/qty_30/Manyavar_Ranveer_singh_853x1280.jpg?1570983028",
      description: "Traditional Wedding Black Kurta",
    },
  
    {
      id: 5,
      name: "PartyWear Suits",
      size: "M",
      color: "Light-Blue",
      price: 2000,
      image:"https://qph.fs.quoracdn.net/main-qimg-61be96f00d4973aff98d72751e414c1a",
      description: "Party Wear Light Blue Jacket",
    },
  
    {
      id: 6,
      name: "Office Party Suit",
      size: "M",
      color: "Midnight-Blue",
      price: 2500,
      image:"https://qph.fs.quoracdn.net/main-qimg-ce6ff1316bf1806ec513a221d3937280",
      description: "Gentlemen Blue Blazzer",
    },

    {
      id: 7,
      name: "Floral Frock",
      size: "S",
      color: "Light-Green",
      price: 1500,
      image: "https://www.maykool.com/media/catalog/product/cache/1/image/600x900/9df78eab33525d08d6e5fb8d27136e95/l/i/light-green-floral-print-ruffle-neck-chiffon-maxi-dress-018793.jpg",
      description: "Good looking Floral Frock",
    },

    {
      id: 8,
      name: "Traditional Lehenga",
      size: "M",
      color: "Black",
      price: 10000,
      image: "http://3.bp.blogspot.com/-yX7WuBOTU_0/T-JAJOrbB1I/AAAAAAAALao/VnuNbBT7IKU/s1600/Bridal+Lehnga+Choli++Indian+Traditional+Lehenga+2012-www.asianclothings.blogspot.com.jpg",
      description: "Traditional Black Wedding Lehenga",
    },

    {
      id: 9,
      name: "Evening Gown",
      size: "L",
      color: "Blue",
      price: 3500,
      image: "https://www.thecelebritydresses.com/media/catalog/product/d/a/dark_royal_blue_bacless_evening_dress_formal_gown_2_.jpg",
      description: "Blue Evening Gown",
    },

    {
      id: 10,
      name: "Red Sarees",
      size: "M",
      color: "Red",
      price: 2000,
      image: "https://n4.sdlcdn.com/imgs/h/b/r/Darshita-International-Red-Net-Saree-SDL817507162-1-e7641.jpeg",
      description: "Good Looking Red Saree",
    },

    {
      id: 11,
      name: "White Frock",
      size: "S",
      color: "White",
      price: 2500,
      image: "https://img.promgirl.com/_img/PGPRODUCTS/1541580/500/white-dress-LUX-LD2120-b.jpg",
      description: "Beautiful White Frock",
    },

    {
      id: 12,
      name: "White Kurta",
      size: "M",
      color: "White",
      price: 1800,
      image: "https://i.pinimg.com/originals/bb/41/1c/bb411c7416ee3123a0c8f14a67f62d0d.jpg",
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
        alert("The Order is Already present in your Cart");
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
      console.log("Calling");
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

