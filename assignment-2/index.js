const express = require('express');
const app = express();
app.use(express.json());
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];
app.get("/products" , (req,res)=>{
    res.json(products);
})
app.get("/products/:id" , (req,res)=>{
    const id = Number(req.params.id);
    const product = products.find(p=>p.id === id);
    if(!product){
        return res.status(404).json({message : "Product not found"});
    }
    res.json(product);
})
app.get("/products/category/:categoryName" , (req,res)=>{
const categoryName = req.params.categoryName;
const productCategory = products.filter(s=>s.category === categoryName);
if(productCategory.length === 0){
    return res.status(404).json({message : "Product not found"});
}
res.json(productCategory);
})
app.post("/products", (req, res) => {
  const { name, category, price, stock, rating } = req.body;

  if (!name || !category || price == null || stock == null) {
    return res.status(400).json({
      message: "name, category, price and stock are required"
    });
  }

  const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;


  const newProduct = {
    id: newId,
    name,
    category,
    price,
    stock,
    rating: rating 
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    data: newProduct
  });
});


app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, category, price, stock, rating } = req.body;

  if (!name || !category || price == null || stock == null) {
    return res.status(400).json({
      message: "All fields (name, category, price, stock) are required"
    });
  }

  const updatedProduct = {
    id: id,
    name,
    category,
    price,
    stock,
    rating: rating 
   
  };
  products[index] = updatedProduct;

  res.status(200).json({
    message: "Product replaced successfully",
    data: updatedProduct
  });
});
app.put("/products/:id/stock", (req, res) => {

  const id = Number(req.params.id);
  const { stock } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  if (stock == null || stock < 0) {
    return res.status(400).json({
      message: "Valid stock value is required"
    });
  }

  product.stock = stock;

  res.status(200).json({
    message: "Stock updated successfully",
    data: product
  });
});
app.put("/products/:id/price", (req, res) => {

  const id = Number(req.params.id);
  const { price } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

 

  product.price = price;

  res.status(200).json({
    message: "Price updated successfully",
    data: product
  });
});
app.listen(3000 , () =>{
    console.log("Server running at http://localhost:3000")
}) 