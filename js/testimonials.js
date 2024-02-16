 // Data for the cards
 const cardData = [
    {   name: 'Maria', 
        jobName:'Designer Gráfica', 
        imgUrl: './img/testimonial_1.png',  
        testimonial: `"A planilha de precificação foi um divisor de águas na minha carreira de designer. Finalmente, consigo compreender e valorizar meu trabalho de maneira justa. Uma ferramenta indispensável para todos os colegas de profissão!"` },
    { name: 'João', jobName:'Estudante de Design', imgUrl: './img/testimonial_2.png',  testimonial: `""Como designer iniciante, a planilha foi um guia essencial para entender como precificar meus projetos. Agora, me sinto mais confiante e valorizo meu trabalho de forma justa. Obrigado por apoiar os designers em início de carreira!"` },
    { name: 'Carlos', jobName:'Designer de Produto', imgUrl: './img/testimonial_3.png',  testimonial: `"A iniciativa em compartilhar sua planilha de precificação é louvável. Essa ferramenta não apenas descomplicou o processo de formação de preço, mas também reforçou a importância e o valor do design como arte e ciência. Uma contribuição valiosa para a comunidade de designers!"` }
];

// Function to create a card element
function createCard(name, content, jobName, imgUrl) {
    const card = document.createElement('div');
    card.classList.add('c-card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('c-card-header','mb-3');
    const cardHSubtitles = document.createElement('div');
    cardHSubtitles.classList.add('c-card-subtitles');

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', imgUrl);
    cardImg.setAttribute('alt', `${name} - Thumbnail photo`); // You can set alt text as the name

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = name;
    cardTitle.classList.add('subtitle-1');

    const cardSubtitle = document.createElement('h3');
    cardSubtitle.textContent = jobName;
    cardSubtitle.classList.add('subtitle-2');

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    card.appendChild(cardHeader);

    cardHeader.appendChild(cardImg);
    cardHeader.appendChild(cardHSubtitles);
    cardHSubtitles.appendChild(cardTitle);
    cardHSubtitles.appendChild(cardSubtitle);

    card.appendChild(cardContent);


    return card;
}

// Function to render the cards
function renderCards(data) {
    const cardContainer = document.getElementById('testimonials-container');

    data.forEach(({ name, testimonial, jobName, imgUrl }) => {
        const card = createCard(name, testimonial, jobName, imgUrl);
        cardContainer.appendChild(card);
    });
}

// Render the cards
renderCards(cardData);