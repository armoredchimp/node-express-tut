const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.send('<h1>HomePage</h1><a href="/api/products">products</a>');
});
app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }

  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('products not found!');
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);

  // res.send("hello world");
});
app.listen(5000, () => {
  console.log("Moo!");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
