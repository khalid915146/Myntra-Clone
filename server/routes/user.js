const router = require("express").Router();
const User = require("../models/user");


router.get("/", async (req, res) => {
  await User.find()
    .then((post) => res.json(post))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
