
document.body.style.backgroundColor = "#D9E6F2";
let heading =document.createElement("h1");

heading.innerHTML="List of Brewery";
heading.setAttribute("class","text-center")


let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","box");
row.classList.add("text-center","pt-3")

let groupinput=document.createElement("div");
groupinput.classList.add("input-group", "mb-3")
let grpbtn=document.createElement("div")
grpbtn.classList.add("input-group-append")

let input=document.createElement("input");
input.classList.add("form-control")
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter the city name.....For example: San_Diego");
input.setAttribute("id","text");

let button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML=`<i class="fa fa-search" aria-hidden="true"></i>`
button.classList.add("btn","btn-outline-primary");
button.addEventListener("click",fetchapi)

let content=document.createElement("div");
content.classList.add("d-flex", "justify-content-center");


let content2=document.createElement("div");
content2.classList.add("mt-3","p-3", "mb-2", "bg-info" ,"text-white")
content2.style.fontSize="12px"
content2.innerHTML="Notes: Mentioned city details you can expect from us, Norman, Austin, San Diego, Bend, Portland, Boise, Denver, Reno, Knox, Quilcene, Petaluma, Castle Rock, Anoka, Abington, Houston, John Day, Killeshin, Williamsville, Gilbert, Mesa, Bellingham, Jackson, Louisville, Saint Paul, Cincinnati, Taylors, Raleigh, Westlake Village, Crosslake, Saint Albans, Mason, Georgetown, Holland Patent, Westminister, Des Moines, Ocracoke, Spotsylvania, Coraopolis, okolona, Milwaukee, Mariposa, Gary, Hammond, Assumption, Tucson, Kenmore"

let content3=document.createElement("div");
content3.style.fontSize="12px"
content3.innerHTML=`<p><a href="https://en.wikipedia.org/wiki/Brewery" target="blank" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Click here to know what is Brewery?</a></p>`
                                                                          //Link that will redirect to wikipedia


grpbtn.append(button)
groupinput.append(input,grpbtn);
row.append(groupinput);
container.append(heading,row,content,content2,content3);                 //Appending all elements to the container
document.body.append(container);  

async function fetchapi(){
   try{

    let city=document.getElementById("text").value;             //Extracting city name which you want
    let url=`https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=3`;
    let fet=await fetch(url);
    let data=await fet.json();                                  //Converting url to JSON 
    // console.log(data)
    let breweries_name=data[0].name;
    let type=data[0].brewery_type;
    let brewery_address=data[0].address_1;    
    let website_url=data[0].website_url;
    let phone=data[0].phone;                                    //Extracting the particular details which we need
    content.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="card-header">
    Breweries
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${breweries_name}</li>
      <li class="list-group-item">Type: ${type}</li>
      <li class="list-group-item">Address: ${brewery_address}</li>
      <li class="list-group-item">Website: <a href="${website_url}" target="blank">${website_url}</a></li>
      <li class="list-group-item">Phone: ${phone}</li>
    </ul>
  </div>`                                                           //Appending the extracted details into conetnt HTML file
}
catch (err){
    content.innerHTML=`An error occurred: ${err}`                   // Handling error
}
}



