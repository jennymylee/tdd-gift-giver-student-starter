const GiftExchange = require("../models/gift-exchange");
const express = require("express");
const router = express.Router();
module.exports = router;

router.post("/pairs", async (req, res, next) => {
  try {
    const pairs = GiftExchange.pairs(req.body.names);

    res.status(200).send(pairs);
  } catch (err) {
    next(err);
  }
});

router.post("/traditional", async (req, res, next) => {
  try {
    const trad = GiftExchange.traditional(req.body.names);
    res.status(200).send(trad);
  } catch (err) {
    next(err);
  }
});
