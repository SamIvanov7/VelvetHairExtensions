// Function to handle the pagination and filtering
function showPage(pageNumber, type = 'All') {
    const itemsPerPage = 6;
    const entries = Array.from(document.querySelectorAll('#workEntries .work-entry'));
    const filteredEntries = type === 'All' ? entries : entries.filter(entry => entry.querySelector('h3').innerText === type);

    // Calculate pagination details
    const pageCount = Math.ceil(filteredEntries.length / itemsPerPage);
    const newPageEntries = filteredEntries.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);

    // Hide all entries
    entries.forEach(entry => entry.style.display = 'none');

    // Show only the entries for the current page
    newPageEntries.forEach(entry => entry.style.display = 'block');

    // Update pagination
    const paginationUl = document.getElementById('pagination');
    paginationUl.innerHTML = '';
    if (pageCount > 1) {
        for (let i = 1; i <= pageCount; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.innerText = i;
            a.onclick = () => showPage(i, type);
            li.appendChild(a);
            paginationUl.appendChild(li);
            if (i === pageNumber) a.classList.add('active');
        }
    }
}

// Initialize the first page
document.addEventListener('DOMContentLoaded', function () {
    showPage(1);
});
