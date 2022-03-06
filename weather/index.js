function weather(city){
  try{
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=e327a62c5a1554a74d15150619ce63e5")
      .then(Response => Response.json())
      .then( data =(data)=>{
 displayweather(data)

 
      } )
  }catch(err){
      console.log(err)
    
  }
}





function displayweather(data){
const {country} = data.sys;
const {name} = data
const {temp,humidity} = data.main;
const {speed} = data.wind
const { icon, description } = data.weather[0];

document.querySelector('.city').innerHTML = "Weather in : "  + name
document.querySelector('.country').innerHTML = "Country Code :"  + country
var img = document.querySelector('.img')
img.src =
"https://openweathermap.org/img/wn/" + icon+ ".png";
img.style.backgroundColor = '#8b8f8e'
document.querySelector('.temp').innerHTML = `Tempeture : ${temp} °C`
document.querySelector('.humidity').innerHTML = humidity + "% humidity  "
document.querySelector('.wind').innerHTML = "wind speed :"  + speed + "k/m.s"


document.querySelector('.desc').innerHTML = ""  + description + ""

}




var btnsearch = document.getElementById('btnSearch');

btnsearch.addEventListener('click',function(){
var text = document.getElementById('text').value
var showContainer = document.getElementById('show')
showContainer.style.backgroundColor = '#F2F2F2'
showContainer.style.color = "#535555"


weather(text)
})
