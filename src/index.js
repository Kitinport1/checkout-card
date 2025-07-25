import * as cartService from "./services/cart.js";
import createItem from "./services/itens.js";


const myCart = [];
const myWhishlist = [];

console.log("Welcome to the your Shopee Cart!");
 //Criando dois itens
const item1 = await createItem("Hotweels Ferrari", 20.99, 1);
const item2 = await createItem("Hotweels Lamborghini", 39.99, 3);

//addicionando  dois itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

//await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);
