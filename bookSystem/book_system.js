/**
 * Book Management System
 * A simple application to manage a collection of books with CRUD operations
 */

// Array to store all book objects
let books = [];

/**
 * Adds a new book to the collection based on form input values
 * Validates that all required fields are filled before adding
 */
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
                clearInputs();
            } else {
        alert('Please fill in all fields correctly.');
    }
}

/**
 * Populates the form with a book's details for editing
 * @param {number} index - The index of the book to edit in the books array
 */
function editbook(index) {
    // Get the book to edit
    const bookToEdit = books[index];
    
    // Fill the form with the book's details
    document.getElementById('bookName').value = bookToEdit.name;
    document.getElementById('authorName').value = bookToEdit.authorName;
    document.getElementById('bookDescription').value = bookToEdit.bookDescription;
    document.getElementById('pagesNumber').value = bookToEdit.pagesNumber;
    
    // Set the editing index
    currentlyEditingIndex = index;
    
    // Change the button text to indicate editing mode
    document.querySelector('button').textContent = 'Update Book';
}

/**
 * Displays all books in the collection on the webpage
 * Creates HTML elements for each book with edit and delete options
 */
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

/**
 * Removes a book from the collection
 * @param {number} index - The index of the book to delete in the books array
 */
function deletebook(index) {
    // Remove the book entry at the given index
    books.splice(index, 1);
    showbooks(); // Refresh the book list after deletion
}

/**
 * Clears all input fields in the form
 * Used after adding a book or to reset the form
 */
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}