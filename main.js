const apiKey = '5ee5f0f5326ab745e91544bb57aa52bf';

async function buscarCiudad() {
    const ciudad = document.getElementById("buscador").value.trim();

    if (ciudad.length > 0) {
        const climaCard = document.getElementById("clima-card");
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`);
            if (!response.ok) {
                throw new Error("Esta ciudad no está disponible");
            }
            const data = await response.json();

            console.log(data.name)
            climaCard.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <img class="img-clima" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
            <p class="main-temp">${data.main.temp} °C</p>
            <p class="main-descript">${data.weather[0].description}</p>
            <div class="datos">
                <article>
                    <img src="https://jhon-toro.github.io/clima-app/assets/Img/humidity.png">
                    <div class="dato">
                        <p>Humedad</p>
                        <p>${data.main.humidity} %</p>
                    </div>
                </article>
                <article>
                    <img src="https://jhon-toro.github.io/clima-app/assets/Img/wind.png">
                    <div class="dato">
                        <p>Viento</p>
                        <p>${data.wind.speed} m/s</p>
                    </div>
                </article>
                <article>
                    <img src="https://jhon-toro.github.io/clima-app/assets/Img/min.png">
                    <div class="dato">
                        <p>Min</p>
                        <p>${data.main.temp_min} °C</p>
                    </div>
                </article>
                <article>
                    <img src="https://jhon-toro.github.io/clima-app/assets/Img/max.png">
                    <div class="dato">
                        <p>Max</p>
                        <p>${data.main.temp_max} °C</p>
                    </div>
                </article>
            </div>
            `
        } catch (error) {
            climaCard.innerHTML = `<p>${error.message}</p>`
        }
    } else {
        document.getElementById('clima-card').innerHTML = '';
    }
}