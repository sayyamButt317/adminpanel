import moongose from "mongoose";
const UserSchema = new moongose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  actualPrice: {
    type: String,
    required: true,
  },
  discountedPrice: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  amountInStock: {
    type: Number,
    required: true,
  },
});

const UserModel = moongose.model("User", UserSchema);
export default UserModel;
