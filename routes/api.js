const express = require('express');
const _ = require('lodash');
const router = express.Router();

/**
 * Intentionally vulnerable endpoint – demonstrates lodash.template RCE (CVE‑2021‑23337)
 * DO NOT USE IN PRODUCTION.
 */
router.post('/message', (req, res) => {
  const tpl = _.template('<%= msg %>');
  const rendered = tpl({ msg: req.body.msg }); // User‑controlled input
  res.send(rendered);
});

module.exports = router;