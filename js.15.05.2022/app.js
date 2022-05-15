let input = document.querySelector('input');
let btn = document.querySelector('button');
let output = document.querySelector('.output-container');
let body = document.body;
 let p1 = document.querySelector('.p1');
 let p2 = document.querySelector('.p2');
 let p3 = document.querySelector('.p3');
 let p4 = document.querySelector('.p4');
 let p5 = document.querySelector('.p5');
 let p6 = document.querySelector('.p6');

 function changWeather(response,temp){
    if(temp <= 0){
        body.style.backgroundImage = 
        "url('https://images.unsplash.com/photo-1478719059408-592965723cbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=712&q=80')";
    }else if(response == 'overcast clouds' ||
     response == "scattered clouds" ||
      response == "broken clouds"  ){
        body.style.backgroundImage = 
        "url('https://images.unsplash.com/photo-1483977399921-6cf94f6fdc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=793&q=80')";
    }else if(response== "light rain" ||
     response == "heavy rain" ||
      response == "rain" || 
      response =="moderate rain"){
    body.style.backgroundImage = 
    "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYXZ5JTIwcmFpbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
      }else if(response== 'haze'){
          body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=813&q=80')"
      }else{
        body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1553901753-215db344677a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80')"
      }
}

btn.addEventListener('click',function(){
    let cityName = input.value;
    if(cityName != ""){
        output.style.display = 'block';
        let desc;
        let temp;
        let tempMin, tempMax, tempAll;
        let humidity;
        let time = new Date();

        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4a88c969f3eb3b17e524715d46072c21`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET',API);
        xhr.onload = function(){
            let data = JSON.parse(xhr.responseText)
            console.log(data);
            desc = data.weather[0].description;
            temp = data.main.temp;
            tempMin = data.main.temp_min;
            tempMax = data.main.temp_max;
            humidity = data.main.humidity;
            tempAll = data.main.feels_like;


            temp = temp - 273.15;
            temp = Math.round(temp);
            temp = temp + "c"
            console.log(temp);
            changWeather(desc,temp);
              p1.innerHTML = cityName
              p2.innerHTML = temp;
              p3.innerHTML = 
              p4.innerHTML = 
              p5.innerHTML = 
              p6.innerHTML = 
            
        }
        xhr.send();
    }
});