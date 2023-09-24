const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express()
app.use(express.json())
app.use(cors())

const uri = "mongodb+srv://varshith:varshith@cluster0.zskpoog.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
client.connect();
const db = client.db("Project-1");
const col = db.collection("UserData");





app.post("/login", async (req, res) => {
  console.log(req.body);
    const data = await req.body;
    try {
      const response  = await col.findOne({"email" : data.email});
      // const response  = null
      console.log(response);
      console.log(data);
      if(response ==  null)
      {
        res.status(400).json({"msg" : "Incorrect Credentials","s":false})
      }
      else if(response.email=== data.email && response.password===data.password)
      {
        res.status(200).json({"msg" : "Login SuccessFull","s": true,"username" : response.username,"email" : response.email,"password" : response.password})
      }
      else{
        res.status(400).json({"msg" : "Incorrect Credentials","s":false})
      }
      res.status(200);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Error in sending" });
    }
  });

  
app.post("/register", async (req, res) => {
  console.log(req.body);
    try {
      const response  = await col.insertOne(req.body)
      console.log("Data inserted successfully:", response);
      const data = req.body;
      res.status(200).json({"msg" : "Insertion Successfull","s":true,"username" :data.username,"password" : data.password,"email" : data.email });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Error in sending" });
    }
  });

app.use(async (req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.listen(4000, () => {
  console.log("Server Started", 4000);
})
