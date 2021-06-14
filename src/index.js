'use strict';
import './style.css';

const createMockProductArray = () => {
	let products = [
		{
			name: 'Продукт 1',
			price: '1200',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi.',
			imgLink: './images/bravo-10.png'
		},
		{
			name: 'Продукт 2',
			price: '1400',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi.',
			imgLink: './images/bravo-20.png'
		},
		{
			name: 'Продукт 3',
			price: '1600',
			description:
				'Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.',
			imgLink: './images/bravo-30.png'
		},
		{
			name: 'Продукт 4',
			price: '1800',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ',
			imgLink: './images/bravo-30.png'
		},
		{
			name: 'Продукт 5',
			price: '2000',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ',
			imgLink: './images/bravo-10.png'
		},
		{
			name: 'Продукт 6',
			price: '2500',
			description:
				'Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.',
			imgLink: './images/bravo-20.png'
		},
		{
			name: 'Продукт 7',
			price: '3000',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ',
			imgLink: './images/bravo-10.png'
		}
	];
	return products;
};

let totalPrice = 0;

const createCard = (name, price, image, description) => {
	const container = document.createElement('div');
	container.className = 'col-4';

	const article = document.createElement('article');
	article.className = 'card';
	container.appendChild(article);

	const cardBodyDiv = document.createElement('div');
	cardBodyDiv.className = 'card-body';
	article.appendChild(cardBodyDiv);

	const header = document.createElement('h2');
	header.className = 'card-title text-center fs-36 fw-700';
	header.innerHTML = name;
	cardBodyDiv.appendChild(header);

	const img = document.createElement('img');
	img.className = 'card-img-top';
	img.alt = 'Фотография';
	img.src = image;
	cardBodyDiv.appendChild(img);

	const cardDescription = document.createElement('p');
	cardDescription.className = 'card-text fs-18';
	cardDescription.innerHTML = description;
	cardBodyDiv.appendChild(cardDescription);

	const priceHeader = document.createElement('h3');
	priceHeader.className = 'text-center fs-24 fw-900';
	priceHeader.innerHTML =
		Number.parseInt(price).toLocaleString('ru-RU') + ' руб.';
	cardBodyDiv.appendChild(priceHeader);

	const button = document.createElement('button');
	button.className =
		'btn btn-success btn-lg btn-block text-uppercase rounded-0 fs-18 fw-900';
	button.type = 'button';
	button.onclick = () => {
		button.innerHTML = 'Добавлено';
		totalPrice = totalPrice + Number.parseInt(price);
		document.getElementById('sum').innerHTML =
			totalPrice.toLocaleString('ru-RU');
		button.disabled = true;
	};
	button.innerHTML = 'Добавить в корзину';
	cardBodyDiv.appendChild(button);

	return container;
};

const createRow = (cols) => {
	const container = document.createElement('div');
	container.className = 'row mb-60';
	cols.forEach((coll) => {
		container.appendChild(coll);
	});
	return container;
};

const splitArray = (array) => {
	const copyArr = [...array];

	const cardsInRow = 3;
	while (copyArr.length) {
		const cardArray = [];
		const remote = copyArr.splice(0, cardsInRow);
		remote.forEach((cellContent) => {
			const cell = createCard(
				cellContent.name,
				cellContent.price,
				cellContent.imgLink,
				cellContent.description
			);
			cardArray.push(cell);
		});

		const row = createRow(cardArray);
		document.getElementsByClassName('container')[0].appendChild(row);
	}
};

splitArray(createMockProductArray());
