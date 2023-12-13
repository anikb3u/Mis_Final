function connect() {

    var searchTerm = document.getElementById("searchBox").value;

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=4cc35b789e1d25c86e9a5aada44582bf`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => display(data))

}

function display(data) {

    console.log(data);

    console.log(data);

    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const country = data.sys.country;
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    var oldContent = document.getElementById("container");
    oldContent.textContent = "";

    var newDiv = document.createElement("div");
    newDiv.innerHTML = `  <div>
                          Country ID: ${data.weather[0].id}<br>
                          Country: ${country}<br>
                          </div>
                          <div>
                          Wind Speed: ${windSpeed}<br>
                          Humidity: ${humidity}<br>
                          Temparature: ${temperature}<br>
                          </div>
                          <div>
                          Weather Codition: ${description} <br>
                          <img src="${iconUrl}">                    
                          </div>
                          `


    newDiv.classList.add("weatherStyle");
    oldContent.appendChild(newDiv);


}