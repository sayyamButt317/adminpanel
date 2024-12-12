import express from "express";
const app = express();
import UserModel from "../Model/User.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status({ status: 200, data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const users = await UserModel.create(req.body);
    res.status({
      status: 200,
      message: `data added successfully`,
      data: users,
    });
  } catch (err) {
    router.status(500).json({ message: err.message });
  }
});

router.post("/edit", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.body._id, req.body.id, {
      new: true,
    });
    res.status({
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
    res.status({ status: 200, message: `data deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
