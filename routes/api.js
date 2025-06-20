const express = require('express');
const _ = require('lodash');
const router = express.Router();

/**
 * Intentionally vulnerable endpoint – demonstrates lodash.template RCE (CVE‑2021‑23337)
 * DO NOT USE IN PRODUCTION.
 */
router.post('/message', (req, res) => {
  res.type('text').send(_.escape(req.body.msg));
});

module.exports = router;