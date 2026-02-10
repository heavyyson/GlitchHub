const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({ username: req.body.username, password: hashedPassword });
        res.status(201).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(400).json({ msg: "User not found" });
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) return res.status(400).json({ msg: "Invalid password" });
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;