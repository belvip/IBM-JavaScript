# Call API to Fetch Weather Data Using `fetch()`

## What You Will Learn
In this lab, you will integrate an external API, OpenWeatherMap, into a web application using JavaScript. You will learn how to:
- Fetch data asynchronously.
- Parse JSON responses.
- Dynamically update the webpage based on received information.

This lab will provide a foundational understanding of API integration, asynchronous operations, DOM manipulation, and user interaction in web development.

## Learning Objectives
After completing this lab, you will be able to:

### User-Friendly Weather Retrieval
Enable user input for city names, facilitating the retrieval of real-time weather information via an intuitive web interface.

### API Integration for Weather Data
Utilize the OpenWeatherMap API to fetch precise weather data based on user-entered cities, dynamically displaying temperature and weather descriptions on the webpage.

### HTML Form Submission Handling and JS Event Implementation
Manage form submissions within HTML and implement event listeners in JavaScript, ensuring smooth user interactions and data retrieval processes.

### Demonstration of Asynchronous Requests and Dynamic DOM Updates
Showcase the practical application of asynchronous requests using `fetch()`, parsing JSON responses, and dynamically updating the DOM to display fetched weather details seamlessly, eliminating the need for page refreshes.

## Prerequisites
- Basic knowledge of HTML.
- Web browser with a console (Chrome DevTools, Firefox Console, etc.).


# Weather Report JavaScript Skills Demonstration

## Key Skills Demonstrated

### 1. Event Handling
- Form submission capture using `addEventListener`
- Prevention of default form behavior with `event.preventDefault()`

### 2. DOM Manipulation
- Retrieving user input: `document.getElementById('city').value`
- Dynamic content updates: `weatherInfo.innerHTML = ...`

### 3. API Integration
- External API calls to OpenWeatherMap service
- URL parameter construction with template literals

### 4. Asynchronous Programming
- `fetch()` API for HTTP requests
- Promise chaining with `.then()`
- Error handling with `.catch()`

### 5. Modern JavaScript Features
- Template literals for string interpolation
- Arrow functions for concise callbacks
- ES6 variable declarations (`const`, `let`)

### 6. Data Processing
- JSON parsing with `response.json()`
- Navigating nested JSON objects (`data.weather[0].description`)
- HTML entity usage (`&#8451;` for Celsius symbol)

### 7. Error Handling
- Console error logging
- User-friendly error messages
- Graceful failure handling

This code demonstrates proficiency in creating interactive web applications that communicate with external APIs while providing a responsive user experience.



# The Three States of a Promise

## Pending State
When `fetch(apiUrl)` is called, it immediately returns a Promise in the pending state.

```javascript
// Promise is in pending state here
fetch(apiUrl)
```

- ## Pending State
During this time, the HTTP request is being made but hasn't completed yet.

## Fulfilled State
When the API request successfully completes, the Promise transitions to the fulfilled state, and the first `.then()` handler is executed.
```javascript
// Promise transitions to fulfilled state and this code runs
.then(response => response.json())
.then(data => {
    // This code runs when the second Promise is fulfilled
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp} &#8451;</p>
    <p>Weather: ${data.weather[0].description}</p>`;
})
```

## Rejected State
If the API request fails (network error, invalid URL, etc.) or if there's an error in any of the `.then()` handlers, the Promise transitions to the rejected state, and the `.catch()` handler is executed.

```javascript
// This code runs if any Promise in the chain is rejected
.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
})
```

## There are several callback functions in this file:
### 1. Event Listener Callback:
```javascript
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
```
  - Here, showweatherDetails is a callback function that gets executed when the form submission event occurs.

### 2. Promise Callbacks in the .then() Methods:
```javascript
.then(response => response.json())
```

  - This arrow function is a callback that receives the response object and returns the result of calling response.json().

```javascript
.then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp} &#8451;</p>
    <p>Weather: ${data.weather[0].description}</p>`;
})
```

   - This arrow function is another callback that receives the parsed JSON data and updates the UI.

### 3. Error Handling Callback in the .catch() Method:

```javascript
.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
})
```

   - This arrow function is a callback that handles any errors that occur during the fetch operation.