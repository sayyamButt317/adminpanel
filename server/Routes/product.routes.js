import UserModel from "../Model/User.js";
import { Router } from "express";
import {getProductsController,addProductController} from "../Controllers/productController.js";


const router = Router();

router.get("/getrecord", getProductsController);
router.post("/create",addProductController );

router.post("/edit", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 200,
      message: `data updated successfully`,
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/delete", async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.body._id);
    res.status(200).json({ status: 200, message: `data deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

