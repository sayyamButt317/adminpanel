import moongose from "mongoose";
const ProductSchema = new moongose.Schema({
  productName: {
    type: String,
    required: [true,'Product Name is Required'],
  },
  productDescription: {
    type: String,
    required: [true,'Product Description is Required'],
  },
  Price: {
    type: String,
    required: [true,'Price is Required'],
  },
  discountedPrice: {
    type: String,
  },
  Category: {
    type: String,
    required: true,
  },
  amountInStock: {
    type: Number,
    required: true,
  },
},{timestamps: true});

const ProductModel = moongose.model("Product", ProductSchema);
export default ProductModel;
