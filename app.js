import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cors()); 

mongoose.connect("mongodb+srv://krushna:borude@cluster0.8g3bmrf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect with Mongodb", err.message));

const taskSchema = new mongoose.Schema({
  name: String
});

const Task = mongoose.model("Task", taskSchema, "list");

app.get("/", async (req, res) => {
  try {
    const items = await Task.find({});
    res.render("list", { ejes: items });
  } catch (err) {
    console.log("Error = find ", err.message);
    res.status(500).send("Failed to find in collection");
  }
});

app.post("/add", async (req, res) => {
  const name = req.body.ele1.trim();
  if (!name){
    return res.redirect("/");
  }
  try {
    await Task.create({ name });
    res.redirect("/");
  } catch (err) {
    console.log("Error = add ", err.message);
    res.status(500).send("Addition of task failed on MongoDB database");
  }
});


app.put("/edit", async (req, res) => {
  const { id, newtask } = req.body;
  if (!id || !newtask.trim()) {
    return res.status(400).send("Invalid input");
  }

  try {
    await Task.updateOne({ _id: id }, { $set: { name: newtask.trim() } });
    res.status(200).send("Task updated");
  } catch (err) {
    console.log("Error = edit ", err.message);
    res.status(500).send("Edit of task failed on MongoDB database");
  }
});


app.delete("/delete", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send("ID is missing");
  }

  try {
    await Task.deleteOne({ _id: id });
    res.status(200).send("Task deleted");
  } catch (err) {
    console.log("Error = delete ", err.message);
    res.status(500).send("Delete of task failed on MongoDB database");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
