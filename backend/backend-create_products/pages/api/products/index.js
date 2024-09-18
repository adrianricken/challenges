import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    const productData = request.body;
    try {
      await Product.create(productData);
      response.status(201).json({ status: "Product created." });
    } catch (e) {
      console.log(error);
      response.status(404).json({ error: error.message });
    }
  }
}
