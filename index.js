"use strict";


const createMockProductArray = () => {
	let array =	[{"product": {"name": "product 1", "price": "1200", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi.", "imgLink": "./images/bravo-10.png"}},
				 {"product": {"name": "product 2", "price": "1400", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi.", "imgLink": "./images/bravo-20.png"}}, 
				 {"product": {"name": "product 3", "price": "1600", "description": "Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.", "imgLink": "./images/bravo-30.png"}},
				 {"product": {"name": "product 4", "price": "1800", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ", "imgLink": "./images/bravo-30.png"}},
				 {"product": {"name": "product 5", "price": "2000", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ", "imgLink": "./images/bravo-10.png"}},
	 			 {"product": {"name": "product 6", "price": "2500", "description": "Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.", "imgLink": "./images/bravo-20.png"}},
	 			 {"product": {"name": "product 7", "price": "3000", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ", "imgLink": "./images/bravo-10.png"}}]
	return array
}

let totalAmount = 0;

const createColl = (id, name, price, image, description) => {
	const container = document.createElement("div")
	container.className = "col-4"
	

	const article = document.createElement("article")
	article.className = "card"
	container.appendChild(article)

	const cardBodyDiv = document.createElement("div")
	cardBodyDiv.className = "card-body"
	article.appendChild(cardBodyDiv)

	const header = document.createElement("h2")
	header.className = "card-title text-center h1 fw-700"
	header.innerHTML = name
	cardBodyDiv.appendChild(header)

	const img = document.createElement("img")
	img.className = "card-img-top"
	img.alt = "Фотография"
	img.src = image
	cardBodyDiv.appendChild(img)

	const p = document.createElement("p")
	p.className = "card-text"
	p.innerHTML = description
	cardBodyDiv.appendChild(p)

	const priceHeader = document.createElement("h3")
	priceHeader.className = "text-center fw-900"
	priceHeader.innerHTML = Number.parseInt(price).toLocaleString('ru-RU') + " руб."
	priceHeader.id = id
	cardBodyDiv.appendChild(priceHeader)

	const button = document.createElement("button")
	button.className = "btn btn-success btn-lg btn-block text-uppercase rounded-0 fw-900"
	button.type = "button"
	button.onclick = () => {
		button.innerHTML = "Добавлено";
		totalAmount = totalAmount + Number.parseInt(price);
		console.log(totalAmount);
		document.getElementById("sum").innerHTML = totalAmount.toLocaleString('ru-RU');
		button.disabled = true;
		// button.addClassName = "btn-color";
	}; 		
	button.innerHTML = "Добавить в корзину"
	cardBodyDiv.appendChild(button)

	return container

}

const createRow = (cols) => {
	const container = document.createElement("div")
	container.className = "row mb-60"
	cols.forEach(coll => {
		//console.log(coll)
		container.appendChild(coll)
	})
	return container
}

const splitArray = (array) => {
	
	const copyArr = [...array];
	copyArr.forEach(cellContent => {
		cellContent.product.id = array.indexOf(cellContent)
	});
		while (copyArr.length > 3) {
			const res = [];
			const remot = copyArr.splice(0, 3);
			remot.forEach(cellContent => {
				const cell = createColl(cellContent.product.id, cellContent.product.name, cellContent.product.price, cellContent.product.imgLink, cellContent.product.description);
				res.push(cell);			
			});

		const row = createRow(res);
		document.getElementsByClassName("container")[0].appendChild(row);
		}
		const rest = [];
		copyArr.forEach(cellContent => {
			const cell = createColl(cellContent.product.id, cellContent.product.name, cellContent.product.price, cellContent.product.imgLink, cellContent.product.description);
			rest.push(cell);
		})
		const row = createRow(rest);
		document.getElementsByClassName("container")[0].appendChild(row);
		
		
	
}
	

splitArray(createMockProductArray())
