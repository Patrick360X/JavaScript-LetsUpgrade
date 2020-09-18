let peoples=[{
    name:'Abhishek',
    age :22,
    city : 'Hinjewadi',
    salary : 70000,
},
{
    name: 'Shreyas',
    age : 20,
    city : 'Pune',
    salary : 50000,
},
{
    name: 'Lokesh',
    age : 20,
    city : 'Pimpri',
    salary : 75000,
},
{
    name: 'Nikhil',
    age : 21,
    city : 'Aundh',
    salary : 60000,
}];


function display(peoples){
    let target_data='';
    let c=1;
   
    peoples.forEach(function(element,index){

        let presetrow=`<tr>
                <td>${c}</td>
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.city}</td>
                <td>${element.salary}</td>
                <td><button onclick="delete_ele(${index})" class="del_btn">delete</button></td>`;

        target_data+=presetrow;

    c++;
    });
    document.getElementById('tablerows').innerHTML = target_data;  

};

function insert(e){

    e.preventDefault()
    let target={};

    let ins_name=document.getElementById("ins-name").value;
    let ins_age = document.getElementById("ins-age").value;
    let ins_city = document.getElementById("ins-city").value;
    let ins_salary= document.getElementById("ins-salary").value;

    target.name=ins_name;
    target.age = Number(ins_age);
    target.city = ins_city;
    target.salary =Number(ins_salary);
    console.log(ins_salary);
    
    peoples.push(target);
    display(peoples);
    
return false;
}

display(peoples);

function search()
{

  let ser_ele= document.getElementById("searching").value;

    let ser_res_arr=peoples.filter(function(peoples){

     if (peoples.name.indexOf(ser_ele) != -1)
     {
       return peoples.name.indexOf(ser_ele) != -1;
     }
     else if (peoples.city.indexOf(ser_ele) != -1){

         return peoples.city.indexOf(ser_ele) != -1;
           
     };

 })

 display(ser_res_arr);

}

function delete_ele(index){
    console.log(index);
    peoples.splice(index,1);
    display(peoples);
    
}