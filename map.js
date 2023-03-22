document.getElementById('generate').onclick =  function() {
 
 
  var values=["Afghanistan", "Antarctica", "Argentina", "Armenia", "Australia", "Barbados", "Bolivia", "Brazil", "Indonesia", "Burkina Faso", "Burundi",  "Canada", "Cape Verde",  "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];

  var select = document.createElement("select");
  select.name = "pets1";
  select.id = "pets1"
  select.style.border="1px solid black"

  for (const val of values)
  {
      var option = document.createElement("option");
      // option.style.backgroundColor="black";
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      
      select.appendChild(option);
  }

  var label = document.createElement("label");
  label.innerHTML = "Choose your country: "
  label.htmlFor = "pets";

  document.getElementById("container").appendChild(label).appendChild(select);
}





document.getElementById('generate2').onclick = function() {
 

  var values= ['Africa','Antarctica', 'Asia','Europe', 'North America', 'Oceania', 'South America'];

  var select = document.createElement("select");
  select.name = "pets";
  select.id = "pets"
  select.style.border="1px solid black"
  for (const val of values)
  {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
  }

  var label = document.createElement("label");
  label.innerHTML = "Choose your continent: "
  label.htmlFor = "pets";

  document.getElementById("container").appendChild(label).appendChild(select);
}



function addmarker(el,alert){

  if(alert==='green'){
    // console.log(alert)
    el.className='marker green'
    // console.log("green")
  }
  else if(alert==='yellow'){
    el.className='marker yellow'
    // console.log("yellow")
    
  }
  else if(alert==='red'){
    // console.log(alert)
    el.className="marker red"
    //  console.log("red")

  }
  else if(alert==='orange'){
    // console.log(alert)
    el.className="marker orange"
    //  console.log("red")

  }
  else{
    // console.log('none')
  }

  // console.log('el',el)
  // console.log("youuu",alert)
}



document.getElementById('submit').addEventListener(('click'),async(event)=>{

// console.log('hello')
const cont=document.getElementById('pets').value;

const value= await fetch(`http://localhost:8000/${cont}`);
const data=await value.json() 

// console.log(data)
let location=data.location;

// console.log(data.alert)
// const obj=Object.keys(data)
mapboxgl.accessToken = 'pk.eyJ1IjoicmFraGkyMjA3IiwiYSI6ImNsZWNvd2RzZDAwZ3QzcnBodXduMjI0Zm4ifQ.M8IVXBJ9TetScihLa7yXRA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0],
  zoom: 0.4
});
  let i=0;
 location.map(async (items)=>
  {
    // console.log('hello',items)
    console.log(items)
      const conversionAPI=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${items},%20France.json?access_token=pk.eyJ1IjoicmFraGkyMjA3IiwiYSI6ImNsZWNvd2RzZDAwZ3QzcnBodXduMjI0Zm4ifQ.M8IVXBJ9TetScihLa7yXRA`)
      const obj=await conversionAPI.json()
      let coordinates=obj.features[0].center

        const el = document.createElement('div');
        
          //  console.log(data.alert[i])
           addmarker(el,data.alert[i])
          //  let val=tsunami(data.tsunami[i])
          //  console.log(data.alert)

            // el.className = 'marker';
            new mapboxgl.Marker(el).setLngLat(coordinates).setPopup(
            new mapboxgl.Popup({ offset: 25 }) 
              .setHTML(
                `<h3>${data['title'][i]}</h3>`
              )
          ).addTo(map);  
          i++;
       
})
location.map(async (items)=>
{

    const conversionAPI=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${items},%20France.json?access_token=pk.eyJ1IjoicmFraGkyMjA3IiwiYSI6ImNsZWNvd2RzZDAwZ3QzcnBodXduMjI0Zm4ifQ.M8IVXBJ9TetScihLa7yXRA`)
    const obj=await conversionAPI.json()
    // console.log(obj)
    let coordinates=obj.features[0].center
      const el = document.createElement('div');

     
      //  el.className = 'marker';
      tsunamimarker(el,data.tsunami[i])
      // console.log(data.tsunami[i])
     

         let val=tsunami(data.tsunami[i])
          new mapboxgl.Marker(el).setLngLat(coordinates).setPopup(
          new mapboxgl.Popup({ offset: 25 }) 
            .setHTML(
              `<h3>${items}</h3><p>${data.title[i]}</p>

              <p>Has tsunami occured ? ${val}</p>`
            )
        ).addTo(map);
        i++;
})

})



document.getElementById('submit2').addEventListener(('click'),async(event)=>{

  console.log('hello2')
  const country=document.getElementById('pets1').value;
  const value= await fetch(`http://localhost:8000/country/${country}`);

  const data=await value.json() 
  let location=data.location;
  // console.log('data',data)

  // const obj=Object.keys(data)
  
  mapboxgl.accessToken = 'pk.eyJ1IjoicmFraGkyMjA3IiwiYSI6ImNsZWNvd2RzZDAwZ3QzcnBodXduMjI0Zm4ifQ.M8IVXBJ9TetScihLa7yXRA';
  
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 0.4
  });
    let i=0;
   location.map(async (items)=>
    {

      // console.log('items here',items);
  
        const conversionAPI=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${items},%20France.json?access_token=pk.eyJ1IjoicmFraGkyMjA3IiwiYSI6ImNsZWNvd2RzZDAwZ3QzcnBodXduMjI0Zm4ifQ.M8IVXBJ9TetScihLa7yXRA`)
        const obj=await conversionAPI.json()
        let coordinates=obj.features[0].center
  
          const el = document.createElement('div');
          addmarker(el,data.alert[i])
          let val=tsunami(data.tsunami[i])
          // el.className = 'marker';
              new mapboxgl.Marker(el).setLngLat(coordinates).setPopup(
              new mapboxgl.Popup({ offset: 25 }) 
                .setHTML(
                  `<h3>${data.title[i]}</h3>`
                )
            ).addTo(map);  
          i++;
})

location.map(async (items)=>
{

    const conversionAPI=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${items},%20France.json?access_token=pk.eyJ1IjoicmFraGkyMjA3IiwiYSI6ImNsZWNvd2RzZDAwZ3QzcnBodXduMjI0Zm4ifQ.M8IVXBJ9TetScihLa7yXRA`)
    const obj=await conversionAPI.json()
    // console.log(obj)
    let coordinates=obj.features[0].center
      const el = document.createElement('div');

     
      //  el.className = 'marker';
      tsunamimarker(el,data.tsunami[i])
      // console.log(data.tsunami[i])
     

         let val=tsunami(data.tsunami[i])
          new mapboxgl.Marker(el).setLngLat(coordinates).setPopup(
          new mapboxgl.Popup({ offset: 25 }) 
            .setHTML(
              `<h3>${items}</h3><p>${data.title[i]}</p>

              <p>Has tsunami occured ? ${val}</p>`
            )
        ).addTo(map);
        i++;
})
  
})


async function fetchdata(){
  const value= await fetch(`http://localhost:8000`);
  const data=await value.json()  
  console.log(data)
  let location=data.location;

  // const obj=Object.keys(data)
    mapboxgl.accessToken = 'pk.eyJ1IjoicmFraGkyMjA3IiwiYSI6ImNsZWNvd2RzZDAwZ3QzcnBodXduMjI0Zm4ifQ.M8IVXBJ9TetScihLa7yXRA';
  
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 0.4
  });
     

  let i=0;
    location.map(async (items)=>
    {

        const conversionAPI=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${items},%20France.json?access_token=pk.eyJ1IjoicmFraGkyMjA3IiwiYSI6ImNsZWNvd2RzZDAwZ3QzcnBodXduMjI0Zm4ifQ.M8IVXBJ9TetScihLa7yXRA`)
        const obj=await conversionAPI.json()
        // console.log(obj)
        let coordinates=obj.features[0].center
          const el = document.createElement('div');

          // console.log(data.alert[i])
          //  el.className = 'marker';
          addmarker(el,data.alert[i])

            // console.log(data.tsunami[i])

           let val=tsunami(data.tsunami[i])
              new mapboxgl.Marker(el).setLngLat(coordinates).setPopup(
              new mapboxgl.Popup({ offset: 25 }) 
                .setHTML(
                  `<h3>${items}</h3><p>${data.title[i]}</p>`
                )
            ).addTo(map);
            // console.log(data.tsunami[i])
            i++;
    })

    
  
      location.map(async (items)=>
    {

        const conversionAPI=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${items},%20France.json?access_token=pk.eyJ1IjoicmFraGkyMjA3IiwiYSI6ImNsZWNvd2RzZDAwZ3QzcnBodXduMjI0Zm4ifQ.M8IVXBJ9TetScihLa7yXRA`)
        const obj=await conversionAPI.json()
        // console.log(obj)
        let coordinates=obj.features[0].center
          const el = document.createElement('div');

         
          //  el.className = 'marker';
          tsunamimarker(el,data.tsunami[i])
          // console.log(data.tsunami[i])
         

             let val=tsunami(data.tsunami[i])
              new mapboxgl.Marker(el).setLngLat(coordinates).setPopup(
              new mapboxgl.Popup({ offset: 25 }) 
                .setHTML(
                  `<h3>${items}</h3><p>${data.title[i]}</p>

                  <p>Has tsunami occured ? ${val}</p>`
                )
            ).addTo(map);
            i++;
    })
  }
  
  
// }

fetchdata()

function tsunamimarker(el,tsunmai){
  if(tsunmai==='1'){
    
    el.className='marker tsunmai'
    // console.log("green")
  }

}


  function tsunami(val){
    // console.log("value",val)
    if(val==='0'){
      return false;

    }
    else if(val==='1'){
      return true;
    }
  }









