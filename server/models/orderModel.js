import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId:{type:String,required:true},
    items:[{
        product:{type:String,required:true,ref:"product"},
        quantity:{type:Number,required:true},
        size:{type:String,required:true},
    }],
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Order Placed"},
    paymentMethod:{type:String,required:true},
    isPaid:{type:Boolean,required:true,default:false},
  },
  { timestamps: true }
);

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
