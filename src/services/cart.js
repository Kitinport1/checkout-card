//Quais ações o meu carrinho pode fazer

//Casos de uso do carrinho de compras
//adicionar item no carrinho
async function addItem(userCard, item) {
  userCard.push(item);
}

//deletar item do carrinho
async function deleteItem(userCard, index, itemName) {
  // const index = userCard.findIndex((item) => item.name === itemName);

  // if (index !== -1) {
  //   userCard.splice(index, 1);
  // }

  //   //trasnforma o indice visual para o indece do backend
  // const deleteindex = index - 1;

  // if (deleteindex >= 0 && deleteindex < userCard.length) {
  //   userCard.splice(deleteindex, 1);
  // }
    const itemIndex = userCart.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userCart.splice(itemIndex, 1);
    console.log(`Item ${itemName} removido com sucesso!`);
    return true;
  }
  
  console.log(`Item ${itemName} não encontrado no carrinho`);
  return false;
}

//remover um item do carrinho (Diminui um item)
async function removeItem(userCart, item) {
  // Verifica se o item existe no carrinho
  const deleteindexIndex = userCart.findIndex(i => i.name === item.name);

  if (deleteindexIndex === -1) {
    console.log(`Item não encontrado`);
    return false;
  }

  const indexFound = userCart[deleteindexIndex];

  if (item.quantity > 1) {
    item.quantity -= 1;
    console.log(`1 unidade do item ${item.name} removida`);
    return true;
  } else {
    userCart.splice(itemIndex, 1);
    console.log(`Item ${item.name} removido do carrinho`);
    return true;
  }
}

async function displayCart(userCard) {
  console.log("\n Shopee Cart List:");
  userCard.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} $R${item.price} - ${item.quantity} units | Subtotal = ${item.subtotal()}`);
  });
}

//calcular total do carrinho
async function calculateTotal(userCard) {
 console.log("\n Shopee Cart TOTAL IS");
 const result = userCard.reduce((total, item) => total + item.subtotal(), 0);
 console.log(`\n R$${result}`);
}

export{
  addItem,
  deleteItem,
  removeItem,
  displayCart,
  calculateTotal
}
