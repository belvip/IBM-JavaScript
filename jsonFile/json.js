const fetchBooks = () => {
    // Fetch the JSON data from the file
    fetch('./books.json')
    .then(response => response.json())
    .then(data => {
        console.log('List of Books');
        data.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.publicationYear}`);
        });
    })
}

fetchBooks();
