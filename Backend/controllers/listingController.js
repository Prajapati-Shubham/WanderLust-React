import Listing from "../models/listing.js";

const ListingController={
    getData:async(req,res)=>{
        try{
            const allListing=await Listing.find();
            if(!allListing){
                res.status(404).json({message:"No Data Found"});
            }
            return res.status(200).json({message:"Succesfull",data:allListing})
        }catch(err){
            res.status(500).json({message:"Internal Error Found"});
        }
    }
}

export default ListingController;