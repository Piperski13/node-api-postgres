const express = require("express");
const recordController = require("../controllers/recordController.js");
const cookieJwtAuth = require("../public/scripts/middleware/cookieJwtAuth.js");
const router = express.Router();

router
  .route("/")
  .get(recordController.getAllRecords)
  .post(recordController.addRecord);
// .post(cookieJwtAuth, recordController.addRecord); // Adding middleware here
router
  .route("/:id")
  .get(recordController.getRecord)
  .delete(cookieJwtAuth, recordController.deleteRecord)
  .put(recordController.updateRecord);

module.exports = router;
