# Writing Your First JavaScript Function

## What You Will Learn

In this lab, you will delve into foundational JavaScript concepts vital for web development. You will learn how to use functions to create an interactive web application that calculates the area of a rectangle based on user-provided values.

## Learning Objectives

After completing this lab, you will be able to:

- **Understanding HTML structure**: Recognize the structure of an HTML file and comprehend how to create an interactive user interface by implementing HTML elements like input fields and buttons.
- **JavaScript variable declaration**: Grasp the concept of declaring variables in JavaScript and understand their role in storing data retrieved from user input.
- **Retrieving user input with JavaScript**: Learn how to use JavaScript to fetch and process user-provided data entered into input fields within an HTML document.
- **Function implementation and execution**: Comprehend the creation and execution of JavaScript functions and their role in executing specific tasks, such as performing calculations and dynamically updating HTML content based on user actions.

## Prerequisites

- Basic knowledge of HTML and Git commands.
- Basic understanding of functions and their syntax.
- Web browser with a console (Chrome DevTools, Firefox Console, and so on).

## Step 1: Setting up the environment

- Create folder calculateArea
Then select `calculateArea folder`, right click and select New File. Enter file named as `calculate_Area.html` and click OK. It will create your HTML file.

# Creating the JavaScript File

1. Select the **calculateArea** folder again.
2. Right-click and select **New File**.
3. Enter the filename as **calculate_Area.js**.
4. Click **OK** to create your JavaScript file.

---

# Creating the HTML Structure

1. Create the basic template structure for `calculate_Area.html` by adding the provided content.
2. Inside the HTML file, create an input form to collect the length and width of the rectangle along with a button to trigger the calculation.
3. To achieve this, include the provided code into the `calculate_Area.html` file.

---

## Example Template Structure (`calculate_Area.html`)

```html
<html>
<head>
  <title>Rectangle Area Calculator</title>
</head>
<body>
  <h1>Rectangle Area Calculator</h1>
  <label for="length">Enter the length: </label>
  <input type="number" id="length"><br><br>

  <label for="width">Enter the width: </label>
  <input type="number" id="width"><br><br>

  <button onclick="calculateArea()">Calculate Area</button><br><br>

  <p id="result"></p>
<script src="./calculate_Area.js"></script>
</body>
</html>
```
