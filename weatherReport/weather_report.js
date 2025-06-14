/**
 * Weather Report Application
 * 
 * This script fetches and displays current weather data from the OpenWeatherMap API
 * based on user input. It demonstrates API integration, DOM manipulation, and
 * asynchronous JavaScript programming.
 */

/**
 * Handles the weather form submission event
 * Fetches weather data for the specified city and updates the UI
 * 
 * @param {Event} event - The form submission event
 */
function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '4d17e47b2b2849ec52ebc023eed115fd'; // Your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the UI with weather information
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            // Handle any errors that occur during the fetch operation
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

// Add event listener to the form to handle submission
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);