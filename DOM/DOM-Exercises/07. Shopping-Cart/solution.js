   // 100 / 100
function solve() {
   let addButtons = Array.from(document.getElementsByClassName("add-product"));
   addButtons.map(b => b.addEventListener("click", addProduct));
  
   let productsBought = [];
   let totalPrice = 0;
   
   function addProduct(button) {
      
      let itemName = button.target.parentNode.parentNode.children[1].children[0].innerText;
      let itemPrice = Number(button.target.parentNode.nextElementSibling.innerText);

      let product= {
         "name": itemName,
         "price": itemPrice
      }
      
      let addedItemText = `Added ${product.name} for ${product.price.toFixed(2)} to the cart.\n`;
      textArea.value += addedItemText;
      productsBought.push(product);
      
      // if (!productsBought.includes(itemName)) {
      //      productsBought.push(itemName);
      // }
      //totalPrice += Number(itemPrice);
   }
   let textArea = document.querySelector("textarea");

   document.getElementsByClassName("checkout")[0].addEventListener("click", function checkout() {
      let productsList = [...new Set(productsBought.map(x => x.name))];

      totalPrice = productsBought.map(p => p.price).reduce((a,b) => {return a + b}, 0);

      textArea.value += `You bought ${productsList.join(", ")} for ${totalPrice.toFixed(2)}.`;

      document.getElementsByClassName("checkout")[0].removeEventListener("click", checkout);
      addButtons.map(b => b.removeEventListener("click", addProduct));
   });

}