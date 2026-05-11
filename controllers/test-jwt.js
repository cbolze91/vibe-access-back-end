const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/sign-token', (req, res) => {
  const user = {
    _id: '09ui320u02uemovkfmadoifj',
    username: 'heidelberger',
  };

  const token = jwt.sign({ user }, process.env.SECRET_KEY);

  res.json({ token, message: 'Success' });
});

router.post('/verify-token', (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    res.json({ decoded });
  } catch (error) {
    res.status(401).json({ err: 'Invalid Token' });
  }
});

module.exports = router;