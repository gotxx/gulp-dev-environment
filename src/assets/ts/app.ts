import { sayHello } from './main';
import { addSelectors } from './subfile';

let appRoot = addSelectors('#app-component'),
	text = sayHello('Jon Doe - działa :p sdfa faaaaaf'),
	titleTpl = document.createElement('div');

console.log(text);

// titleTpl.innerText = text;
// appRoot.innerText = '';
// appRoot.setAttribute('class', 'component__title');
// appRoot.appendChild(titleTpl);


// let product = new Product("product 1", 123, 'img/path');

// console.log(product);

// appRoot.innerText = text;
// appRoot.outerHTML('')
