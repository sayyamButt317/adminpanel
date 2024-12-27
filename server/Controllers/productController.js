import ProductModel from "../Model/Product.js";

const getProductsController = async (req, res) => {
  try {
    const users = await ProductModel.find().sort({ actualPrice: 1 }).exec();
    res.status(200).json({ status: 200, data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addProductController = async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res
      .status(201)
      .json({
        status: 201,
        message: "Product added Successfully",
        data: newProduct,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {getProductsController, addProductController};
