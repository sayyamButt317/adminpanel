const express = require("express");
const app = express();
const UserModel = require("../Model/User");

app.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status({ status: 200, data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/create", async(req, res) => {
    try{
        const userrecord = await UserModel.create(req.body)
        res.status({ status: 200,message: `data added successfully`, data: userrecord});
    } catch (err) {
res.status(500).json({ message: err.message });
   }
});

app.post("/edit", async(req, res) => {
  try{
    const user =await UserModel.findByIdAndUpdate(req.body._id,req.body.id,{new:true});
    res.status({ status: 200,message: `data updated successfully`, data: user});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/delete", async(req, res) => {
  try{
    await UserModel.findByIdAndDelete(req.body._id);
    res.status({ status: 200,message: `data deleted successfully`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

 