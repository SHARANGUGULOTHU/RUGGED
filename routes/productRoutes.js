const express=require('express');
const router=express.Router();

const productController=require("../controllers/productController");
const authMiddleware=require("../middleware/authMiddleware");

// router.get('/product/:productId',productController.getProductInfo);
router.get('/product',productController.getProductInfo);
router.get('/returnsAndOrder',authMiddleware,productController.getOrderDetails)
router.post('/placeorder',productController.postOrder)
router.post('/buynow',productController.postSingleProductOrder)
router.post('/CancelOrder',productController.postCancelOrder)
module.exports=router;