function getWeather() {
    const city = document.getElementById("cityInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("weatherResult");
  
    // Clear previous results
    resultDiv.className = "alert d-none";
    resultDiv.innerHTML = "";
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "weather.json", true);
    xhr.onload = function () {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        if (data[city]) {
          const weather = data[city];
          resultDiv.className = "alert alert-success";
          resultDiv.innerHTML = `
            <strong>City:</strong> ${city}<br>
            <strong>Temperature:</strong> ${weather.temperature}°C<br>
            <strong>Humidity:</strong> ${weather.humidity}%<br>
            <strong>Conditions:</strong> ${weather.conditions}
          `;
        } else {
          resultDiv.className = "alert alert-danger";
          resultDiv.textContent = "City not found in the repository.";
        }
      } else {
        resultDiv.className = "alert alert-danger";
        resultDiv.textContent = "Failed to fetch weather data.";
      }
    };
    xhr.send();
  }
  