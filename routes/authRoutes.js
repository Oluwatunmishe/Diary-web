const { Router } = require("express");
const authController = require("../controllers/authController");
const diaryController = require("../controllers/diaryController");
const router = Router();

router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);
router.get("/diarys", diaryController.diary_diarys);

router.post("/diarys", diaryController.diary_create_post);
router.get("/create", diaryController.diary_create_get);
router.get("/diarys/:id", diaryController.diary_details);
router.delete("/diarys/:id", diaryController.diary_delete);

module.exports = router;
