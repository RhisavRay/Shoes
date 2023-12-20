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

}