const authCtrl = require("../controller/authController");
const passport = require("passport");
const validator = require("../middleware/validate");
const { validateRequest } = require("../middleware/request-validator");
// const { profilePicture } = require("../middleware/multer");

const isAuthenticated = require("../utils/authenticate");

const router = require("express").Router();

router.post(
  "/",
  validator.signUpValidator,
  validateRequest,
  authCtrl.userSignUp
);
router.post(
  "/login",
  validator.signInValidator,
  validateRequest,
  authCtrl.userLogin
);
router.post(
  "/forgotPassword",
  validator.validateEmail,
  validateRequest,
  authCtrl.forgotPassword
);

router.patch("/reset_password/:token", authCtrl.ResetPassword);
router.get("/email-verification/:token", authCtrl.confirmEmail);
router.patch("/change_password", isAuthenticated, authCtrl.changePassword);

module.exports = router;
