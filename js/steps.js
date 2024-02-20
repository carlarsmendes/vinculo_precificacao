 // Data for the cards
 const stepsData = [
    {   number: 'Passo 1', 
        title:'Custos', 
        description: `<p>Defina os custos do seu projeto, preenchendo as categorias já criadas para facilitar o seu trabalho. Se desejar também pode alterar as categorias por uma que seja mais adequada à sua realidade.</p>` },
    {   number: 'Passo 2', 
        title:'Atividades do projeto', 
        description: `<p>Liste as atividades do projeto, seu responsável e estime de prazo para cada uma delas.</p><p>A nossa planilha se ocupa de calcular o prazo total do projeto e cruza estas informações com os seus custos para calcular o preço final do projeto.</p>`}, 
    {   number: 'Passo 3', 
        title:'Ajustes', 
        description: `<p>Defina os detalhes finais, como margem de lucro e descontos, e vizualize o seu preço e prazo em tempo real.</p>` }];

// Function to create a card element
function createCard(number, title, description) {
    const card = document.createElement('div');
    card.classList.add('c-card');

    const cardNumber = document.createElement('div');
    cardNumber.textContent = number;
    cardNumber.classList.add('c-pill', 'mb-3');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    cardTitle.classList.add('c-align-left', 'mb-4');

    const cardContent = document.createElement('p');
    cardContent.innerHTML = description;

    console.log("cardNumber,cardTitle,cardContent", cardNumber,cardTitle,cardContent);
    card.appendChild(cardNumber);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

// Function to render the cards
function renderCards(data) {
    const cardContainer = document.getElementById('steps-container');

    data.forEach(({ number, title, description }) => {
        const card = createCard(number, title, description);
        cardContainer.appendChild(card);
    });
}

// Render the cards
renderCards(stepsData);