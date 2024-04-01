import express from "express";
import mongoose from "mongoose";
import listingRouter from "./routes/listingRoute.js";
const app = express();

const dbURl = "mongodb://127.0.0.1:27017/wanderlust-react";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error in connection to DB", err.message);
  });

async function main() {
  await mongoose.connect(dbURl);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Listing Route
app.use("/listing", listingRouter);

// app.get("/getData", async (req,res)=>{
//     const data=await Listing.find();
//     console.log(data);
// })

app.get("/", (req, res) => {
  res.send("I am Root");
});

app.listen(8000, () => {
  console.log("App Listening on port 8000");
});
