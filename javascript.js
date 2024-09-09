document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector('ul');
    const inputText = document.querySelector('#newBookName');
    const addBookBtn = document.querySelector('#addBookFromModal');
    const checkBox = document.querySelector('#hide-books');
    const inputSearch = document.querySelector('#search-books input');
    const themeToggle = document.querySelector('#theme-toggle');
    const body = document.body;
    
    const spanDelete = `<span class="delete">Delete</span>`;

    // Load books from localStorage on page load
    loadBooksFromLocalStorage();

    // Event listener for adding a new book
    addBookBtn.addEventListener('click', () => {
        const bookName = inputText.value.trim();
        if (bookName === '') return;

        const li = createBookElement(bookName);
        ul.appendChild(li);

        storeToLocalStorage(bookName);
        inputText.value = '';
        $('#addBookModal').modal('hide'); // Hide the modal
    });

    // Event listener for deleting a book
    ul.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const li = e.target.parentElement;
            li.classList.add('fade-out'); // Add fade-out class for animation

            // Remove the item after 3 seconds (for the fade-out animation)
            setTimeout(() => {
                const bookName = li.querySelector('.name').textContent;
                li.remove();
                removeFromLocalStorage(bookName);
            }, 3000); // 3 seconds
        }
    });

    // Event listener for hiding/showing books
    checkBox.addEventListener('change', () => {
        ul.style.display = checkBox.checked ? 'none' : 'block';
    });

    // Event listener for searching books
    inputSearch.addEventListener('keyup', () => {
        const searchQuery = inputSearch.value.trim().toLowerCase();
        Array.from(ul.children).forEach(book => {
            const bookName = book.querySelector('.name').textContent.toLowerCase();
            book.style.display = bookName.includes(searchQuery) ? 'block' : 'none';
        });
    });

    // Event listener for theme toggling
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.textContent = body.classList.contains('dark-theme') ? '🌞' : '🌙';
    });

    // Event listener for editing book name on double click
    ul.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('name')) {
            const spanName = e.target;
            const currentName = spanName.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentName;
            spanName.replaceWith(input);

            input.addEventListener('blur', () => {
                const newName = input.value.trim();
                if (newName) {
                    spanName.textContent = newName;
                    input.replaceWith(spanName);
                    updateLocalStorage(currentName, newName);
                }
            });

            input.focus();
        }
    });

    // Function to create book element
    function createBookElement(bookName) {
        const li = document.createElement('li');
        const spanName = document.createElement('span');
        spanName.className = 'name';
        spanName.textContent = bookName;
        li.appendChild(spanName);
        li.innerHTML += spanDelete;
        li.classList.add('list-group-item');
        return li;
    }

    // Function to store book in localStorage
    function storeToLocalStorage(bookName) {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books.push(bookName);
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Function to remove book from localStorage
    function removeFromLocalStorage(bookName) {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books = books.filter(book => book !== bookName);
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Function to update book name in localStorage
    function updateLocalStorage(oldName, newName) {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books = books.map(book => book === oldName ? newName : book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Function to load books from localStorage
    function loadBooksFromLocalStorage() {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.forEach(bookName => {
            const li = createBookElement(bookName);
            ul.appendChild(li);
        });
    }
});
