
const shoppingList = [
  {
    product: 'Яблоки',
    quantity: 5,
    purchased: false
  },
  {
    product: 'Молоко',
    quantity: 2,
    purchased: true
  },
  {
    product: 'Хлеб',
    quantity: 1,
    purchased: false
  },
  {
    product: 'Яйца',
    quantity: 12,
    purchased: true
  },

  {
    product: 'Кофе',
    quantity: 1,
    purchased: false
  }
];


function addProduct(productName, quantity) {
  const existingProduct = shoppingList.find(item => item.product === productName);
  
  if (existingProduct) {
      existingProduct.quantity += quantity; // Увеличиваем количество
  } else {
      shoppingList.push({ product: productName, quantity, purchased: false }); // Добавляем новый продукт
  }
};

function purchaseProduct(productName) {
  const product = shoppingList.find(item => item.product === productName);
  
  if (product) {
      product.purchased = true; // Отмечаем продукт как купленный
  } else {
      console.log(`Продукт "${productName}" не найден в списке.`);
  }
}


addProduct('Яблоки', 3); // Увеличивает количество яблок до 8
addProduct('Чай', 2); // Добавляет новый продукт - Чай


purchaseProduct('Хлеб'); // Отмечает Хлеб как купленный


shoppingList.sort((a, b) => {
  return a.purchased - b.purchased; // Если purchased === false (0), то a меньше b, и наоборот
});


// Пример вывода списка покупок
console.log('Список покупок:');
shoppingList.forEach(item => {
  console.log(`Продукт: ${item.product}, Количество: ${item.quantity}, Куплен: ${item.purchased}`);
});

//Вывод списка на экран

let listDiv = document.createElement('div');
listDiv.id = 'root';
document.body.append(listDiv);


function productsList(arr) {
  let ul = document.createElement('ul');
  arr.forEach(elems => {
    let li = document.createElement('li');
    li.textContent = `Продукт: ${elems.product}; количество: ${elems.quantity};  куплен: ${elems. purchased}`;
    ul.append(li);
  });
  return ul; // возвращаем список
}

let productsUl = productsList(shoppingList); // получаем список 
document.getElementById('root').append(productsUl); 
