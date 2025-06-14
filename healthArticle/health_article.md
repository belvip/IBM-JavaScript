# 📰 Develop an Application to Fetch Health Articles using `XMLHttpRequest`

## 📘 What You Will Learn

In this lab, you will explore the dynamic creation of HTML elements using JavaScript, enabling the manipulation and real-time construction of webpage content. You will learn to:

- Parse JSON data to extract and structure information.
- Dynamically display articles on the page.
- Organize data using unordered lists.

These skills offer a practical introduction to DOM manipulation, JSON handling, and rendering dynamic content using the legacy but still foundational **XMLHttpRequest (XHR)** API.

---

## 🎯 Learning Objectives

By the end of this lab, you will be able to:

- **XHR Integration Proficiency**: Fetch external JSON data using `XMLHttpRequest`, enabling dynamic content retrieval.
- **Dynamic HTML Construction**: Programmatically build HTML elements using JavaScript to structure and modify page layout.
- **JSON Data Manipulation**: Parse and use JSON data to feed content into a web interface in a meaningful structure.
- **List Generation Competence**: Create unordered lists to efficiently organize article details.
- **Iterative Content Rendering**: Render multiple articles dynamically by looping through JSON responses, enhancing presentation and user experience.

---

## 🧠 Prerequisites

- Basic knowledge of **HTML** and using **GitHub**.
- Any modern web browser with DevTools (e.g. Chrome DevTools, Firefox Console).

---

# 📄 Summary: Fetching Health Articles using `XMLHttpRequest`

## ⚙️ Setting Up the Fetch Request

- An `xhr` object was created to initiate the data fetching process.
- The request was configured using:

  ```javascript
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

This sets up the method `(GET)`, the target resource `(url)`, and indicates that the response should be parsed as JSON.

## Using the Received Data
-An onload callback was defined:

Within this function:

- Articles were extracted from the JSON response.

- They were injected into a specific DOM container using:

```javascript
document.getElementById('articles')
```

## 🧩 Putting It All Together
- For each article:

  - New HTML elements (like titles and descriptions) were created.

  - Data from the JSON was inserted into these elements.

- Finally, the request was executed with:

```javascript
xhr.send();
```

This fetched the data and triggered the rendering process on the webpage.