function createCard(data)
{
    // Article tag encasing the product info
    const article = document.createElement('article')
    article.classList.add('card');

    // Product image
    const imgDiv = document.createElement('div')
    imgDiv.classList.add('card_img');
    const img = document.createElement('img');
    img.src = data.imgUrl;
    img.alt = data.name;
    imgDiv.appendChild(img);

    // Product name
    const nameDiv = document.createElement('div')
    nameDiv.classList.add('card_name');
    const name = document.createElement('p');
    name.textContent = data.name;
    nameDiv.appendChild(name);

    // Like icon
    const likeDiv = document.createElement('div')
    likeDiv.classList.add('card_like');
    const likeA = document.createElement('a')
    likeA.classList.add('card_icon');
    likeA.href='';
    const likeIcon = document.createElement('ion-icon')
    likeIcon.setAttribute('name', 'heart-outline');
    likeA.appendChild(likeIcon);
    likeDiv.appendChild(likeA);

    // Product price
    const div = document.createElement('div');
    const priceSpan = document.createElement('span')
    priceSpan.classList.add('card_price')
    priceSpan.textContent = data.price;
    div.appendChild(priceSpan);

    // Cart icon
    const cartA = document.createElement('a')
    cartA.classList.add('card_icon');
    cartA.href = '';
    const cartIcon = document.createElement('ion-icon')
    cartIcon.setAttribute('name', 'cart-outline');
    cartA.appendChild(cartIcon);

    // Appending elements to the parent article
    article.appendChild(imgDiv);
    article.appendChild(nameDiv);
    article.appendChild(likeDiv);
    article.appendChild(div);
    article.appendChild(cartA);

    // Selecting the main element
    const mainElement = document.querySelector('.main.bd-grid');

    // Checking if main element is found, and then appending article
    if (mainElement)
        mainElement.appendChild(article);
    else
        console.error("Main element not found");
}

fetch('nikeData.json')
.then( (response) => response.json() )
.then( jsonData => {
    // Loop through the data in file and create cards
    jsonData.forEach(createCard);
})
.catch(error => console.error('Error fetching JSON:', error));