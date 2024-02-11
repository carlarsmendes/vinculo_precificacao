 // Data for the cards
 const cardData = [
    {   name: 'Maria', 
        jobName:'Designer Gráfica', 
        imgUrl: './img/testimonial-1.png',  
        testimonial: `"A planilha de precificação foi um divisor de águas na minha carreira de designer. Finalmente, consigo compreender e valorizar meu trabalho de maneira justa. Uma ferramenta indispensável para todos os colegas de profissão!"` },
    { name: 'João', jobName:'Estudante de Design', imgUrl: './img/testimonial-1.png',  testimonial: `""Como designer iniciante, a planilha foi um guia essencial para entender como precificar meus projetos. Agora, me sinto mais confiante e valorizo meu trabalho de forma justa. Obrigado por apoiar os designers em início de carreira!"` },
    { name: 'Carlos', jobName:'Designer de Produto', imgUrl: './img/testimonial-1.png',  testimonial: `"A iniciativa em compartilhar sua planilha de precificação é louvável. Essa ferramenta não apenas descomplicou o processo de formação de preço, mas também reforçou a importância e o valor do design como arte e ciência. Uma contribuição valiosa para a comunidade de designers!"` }
];

// Function to create a card element
function createCard(name, content) {
    const card = document.createElement('div');
    card.classList.add('c-card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = name;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

// Function to render the cards
function renderCards(data) {
    const cardContainer = document.getElementById('testimonials-container');

    data.forEach(({ name, testimonial }) => {
        const card = createCard(name, testimonial);
        cardContainer.appendChild(card);
    });
}

// Render the cards
renderCards(cardData);