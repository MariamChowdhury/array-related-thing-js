//map
const items=[
  {id:01, name:'phone',price:700},
  {id:02, name:'pc',price:7000},
  {id:03, name:'laptop',price:200},
  {id:04, name:'cola',price:70000},
  {id:05, name:'soda',price:7001},
];
const names=items.map(product=>product.name);
const prices=items.map(p=>p.price);
console.log(names);
console.log(prices);

//forEach
items.forEach(n=>console.log(n.name));

//filter

