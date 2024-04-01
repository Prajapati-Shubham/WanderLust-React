import ListingController from "../controllers/listingController.js";
import express from "express";
const router=express.Router();
import wrapAsync from "../middleWares/wrapASync.js";


router.get("/getData",wrapAsync(ListingController.getData));


export default router;