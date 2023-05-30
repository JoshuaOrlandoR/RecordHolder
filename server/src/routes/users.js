const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/signup', async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ $or: [{ username: username }, { email: email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    
    const user = new User({ username, email, password });
    await user.save();
    
    
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
