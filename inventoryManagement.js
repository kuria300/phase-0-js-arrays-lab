// Write your code here
const products=["Laptop","Phone","Headphones","Monitor"];

const logFirstProduct=()=>{
   console.log(products[0])
}

//console.log(logFirstProduct(products))

const addProduct=(product)=>{
    console.log(products.push(product))
}

//console.log(addProduct('mouse'))
//console.log(products)

function updateProductName( index, newProduct){
   return products[index]=newProduct
}

//console.log(updateProductName(products))
//console.log(products)

const removeLastProduct = function() {
    return products.pop();
}

//console.log(removeLastProduct(products))
//console.log(products)

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
