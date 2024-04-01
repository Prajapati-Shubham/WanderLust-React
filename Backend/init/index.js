import mongoose from "mongoose";
import Listing from "../models/listing.js";
import initData from "./data.js";


//Database Coonection
const dbURL = "mongodb://127.0.0.1:27017/wanderlust-react";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error in connection db ", err);
  });

async function main() {
  await mongoose.connect(dbURL);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.map((obj)=>({
        ...obj,
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was Inititalized");
}

initDB();
