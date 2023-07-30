

import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://iqbal:DTp9DRZWA6pe2SC1@cluster0.c3fbyna.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run(req, res) {
  try {
    await client.connect();
    const productsCollection = client.db("pc-builder").collection("all-Data");
    const { productId, category } = req.query;

    if (req.method === "GET" && productId) {
      const product = await productsCollection.findOne({
        _id: new ObjectId(productId),
      });
      if (product) {
        res.send({ message: "success", status: 200, data: product });
      } else {
        res.status(404).send({ message: "Product not found", status: 404 });
      }
    } else if (req.method === "GET" && category) {
      const product = await productsCollection
        .find({
          Category: category,
        })
        .toArray();
      if (product) {
        res.send({ message: "success", status: 200, data: product });
      } else {
        res.status(404).send({ message: "Product not found", status: 404 });
      }
    } else if (req.method === "GET") {
      const products = await productsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: products });
    }
    // return productsCollection;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;

