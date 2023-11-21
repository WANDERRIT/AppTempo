const key = "70bc19c52b7ede019b17c97b397ac83d";


function display(dados){
    const cidade = document.getElementById("cidade").innerHTML = dados.name;
    const temp = document.querySelector(".texto-temperatura").innerHTML = Math.floor(dados.main.temp) + "°C";
    const sensecao = document.querySelector(".sensacao").innerHTML = "Sensação térmica de " + Math.floor(dados.main.feels_like) + "°C";
    const tempMax = document.querySelector(".temp-max").innerHTML = "Temp max " + Math.floor(dados.main.temp_max) + "°C";
    const tempMin = document.querySelector(".temp-min").innerHTML = "Temp min " + Math.floor(dados.main.temp_min)  + "°C";
    const desc = document.querySelector(".desc").innerHTML = dados.weather[0].description;
    const tempImg = document.querySelector(".temp-img").src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    const humidade = document.querySelector(".umidade").innerHTML = "Humidade " + dados.main.humidity + "%";
    const  nebulosidade = document.querySelector(".nebulosidade").innerHTML = "Nebulosidade " + dados.clouds.all + "%";

  
}


async function buscarCidade(cidade){
    const fetchApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(res => res.json());

    display(fetchApi)

    console.log(fetchApi)
}


function button(){
    const cidade = document.querySelector(".input-cidade").value
   
    buscarCidade(cidade);
}