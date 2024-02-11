 // Data for the cards
 const typeData = [
    {   name: 'Identidade Visual' },
    {   name: 'Naming' },
    {   name: 'Sinalização' },
    {   name: 'Produto Digital' },
    {   name: 'Editorial' },
    {   name: 'Webdesign' },
    {   name: '...' },
];

// Function to create a card element
function createCard(name) {
    const listItem = document.createElement('li'); // Create list item
    listItem.classList.add('c-pill');

    const pillContent = document.createElement('span'); // Create span for pill content
    pillContent.textContent = name;

    listItem.appendChild(pillContent); // Append pill content to list item
    console.log("listItem",listItem);
    return listItem; // Return the list item
}

// Function to render the cards
function renderCards(data) {
    const cardContainer = document.getElementById('project-types-container');

    data.forEach(({ name }) => {
        const listItem = createCard(name); // Create list item with pill
        cardContainer.appendChild(listItem); // Append list item to container
    });
}

// Render the cards
renderCards(typeData);
