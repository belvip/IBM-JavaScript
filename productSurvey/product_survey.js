// Step 2: Defining variables and function

function submitFeedback() {
    alert('Thank you for your valuable feedback')
    document.getElementById('userInfo').style.display = 'block';
}


const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;

const submitButton=document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Step 3: Display user feedback on webpage

document.getElementById('userName').innerHTML = username;
document.getElementById('userAge').innerHTML = age;
document.getElementById('userEmail').innerHTML = email;
document.getElementById('userJob').innerHTML = job;
document.getElementById('userDesignation').innerHTML = designation;
document.getElementById('userProductChoice').innerHTML = productType;
document.getElementById('userFeedback').innerHTML = feedback;

// Step 4: Implement key press to submit feedback
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});