//import {html, render} from './lit-html';


const provinces = [
  'Western Cape',
  'Gauteng',
  'Northern Cape',
  'Eastern Cape',
  'KwaZulu-Natal',
   'Free State'
  ];


const names = [
  'Ashwin',
   'Sibongile', 
   'Jan-Hendrik', 
   'Sifso', 
   'Shailen', 
   'Frikkie'
  ];

//  Use forEach to console log
names.forEach(name => {
  console.log(name);
});

//Use forEach to console log with  matching province

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//  Use map to convert province names to uppercase

const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

//  Use map to create a new array with the amount of characters in each name

const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//  Use sort to sort all provinces alphabetically

const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Use filter to remove provinces with the word "Cape" and get the remaining count

const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
const remainingProvinceCount = filteredProvinces.length;
console.log(remainingProvinceCount);

//  Use map and reduce to create an object indicating the province of each individual
const provinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceObject);
