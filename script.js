function createCard(data)
{
    // Article tag encasing the product info
    const article = document.createElement('article').classList.add('card');

    // Product image
    const imgDiv = document.createElement('div').classList.add('card_img');
    const img = document.createElement('img');
    img.src = data.imgUrl;
    img.alt = data.name;
    imgDiv.appendChild(img);

    // Product name
    const nameDiv = document.createElement('div').classList.add('card_name');
    const name = document.createElement('p');
    name.textContent = data.name;
    nameDiv.appendChild(name);

    // Like icon
    const likeDiv = document.createElement('div').classList.add('card_like');
    const likeA = document.createElement('a').classList('card_icon');
    likeA.href='#';
    const likeIcon = document.createElement('ion-icon').setAttribute('name', 'heart-outline');
    likeA.appendChild(likeIcon);
    likeDiv.appendChild(likeA);

    // Product price
    const div = document.createElement('div');
    const priceSpan = document.createElement('span').classList.add('card_price')
    priceSpan.textContent = data.price;
    div.appendChild(priceSpan);

}