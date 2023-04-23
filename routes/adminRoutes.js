const express = require('express');
const adminController=require("../controllers/adminController");
const authMiddleware=require("../middleware/authMiddleware");
const adminMiddleware=require('../middleware/adminMiddleware');
const complaintController=require("../controllers/complaintsController");
const router=express.Router();

router.get('/admin',adminMiddleware,authMiddleware,adminController.getAdminPage);
router.get('/deleteThisUser',adminMiddleware,authMiddleware,adminController.deleteAUserAdmin);
router.get('/admin/orderHistoryAdmin',adminMiddleware,authMiddleware,adminController.getOrdersInfo);
router.get('/admin/complaints',adminMiddleware,authMiddleware,adminController.getComplaintsAdmin);
router.get('/admin/complaints/resolved',adminMiddleware,authMiddleware,adminController.resolveComplaintAdmin);

module.exports=router;