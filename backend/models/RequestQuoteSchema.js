const { Schema, model} = require("mongoose");

const RequestQuoteSchema = ({
   Product_details:String,
   Delivery:String,
   Transportation_by:String,
   Weight:String,
   Volume:String,
   Byunits:Boolean,
   Dimentions:String,
   Quantity:String,
   Gross_Weight:String,
   Container_type:String,
   Quantity_Of_Container:Number,
   From:String,
   To:String,
   Ready_To_Load:String,
   Associated_services:String,
   First_name:String,
   Last_name:String,
   Phone:String,
   Email:String
});

const RQ = model("RequestQuotes",RequestQuoteSchema);

module.exports = RQ;