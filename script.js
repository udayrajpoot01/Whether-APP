document.getElementById("getWeather").addEventListener("click", function() {
    var location = document.getElementById("location").value;
    if (location === "") {
        alert("Please enter a location.");
        return;
    }

    var apiKey = "c158ac9fd0534b299a730958250503";
    var url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Location not found. Please try again.");
                return;
            }

            document.getElementById("cityName").textContent = data.location.name + ", " + data.location.country;
            document.getElementById("temperature").textContent = "Temperature: " + data.current.temp_c + "°C";
            document.getElementById("condition").textContent = "Condition: " + data.current.condition.text;
        })
        .catch(error => {
            alert("Error fetching weather data. Please try again.");
        });
});
