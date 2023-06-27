// import {html, render} from 'https://unpkg.com/lit-html?module';

// /**
//  * @param {string} name
//  */
 
// const createView = (name)=>{
// return html`
// <div> hello,your name is ${name}</div>`;
// }
// const tree1= createView('Katlego')
// const treee2= createView('Ramoroa')

// render(tree1,document.querySelector("[data-app]"));
// //console.log(html,render); 


const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Use forEach to console.log each product name
products.forEach(product => {
  console.log(product.product);
});

// Use filter to filter out products with names longer than 5 characters
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);

// Use filter and map to convert prices to numbers and remove products without prices,
// then use reduce to calculate the combined price of remaining products
const combinedPrice = products
  .filter(product => product.price !== '' && !isNaN(Number(product.price)))
  .map(product => Number(product.price))
  .reduce((total, price) => total + price, 0);
console.log(combinedPrice);

// Use reduce to concatenate all product names into a string
const productNames = products.reduce((str, product, index) => {
  if (index === 0) {
    return product.product;
  } else if (index === products.length - 1) {
    return str + ' and ' + product.product;
  } else {
    return str + ', ' + product.product;
  }
}, '');
console.log(productNames);

// Use reduce to find the highest and lowest-priced items
const { highest, lowest } = products.reduce(
  (result, product) => {
    const price = Number(product.price);
    if (isNaN(price)) {
      return result;
    }
    if (price > result.highest.price) {
      result.highest = { name: product.product, price };
    }
    if (price < result.lowest.price || !result.lowest.price) {
      result.lowest = { name: product.product, price };
    }
    return result;
  },
  { highest: { name: '', price: -Infinity }, lowest: { name: '', price: Infinity } }
);
console.log(`Highest: ${highest.name}. Lowest: ${lowest.name}`);

// Use Object.entries and reduce to recreate the object with modified keys
const modifiedProducts = Object.entries(products).reduce((newArray, [key, value]) => {
  newArray.push({
    name: value.product,
    cost: value.price,
  });
  return newArray;
}, []);
console.log(modifiedProducts);



 