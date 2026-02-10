const router = require('express').Router();
const Clip = require('../models/Clip');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('clip'), async (req, res) => {
    try {
        const newClip = await Clip.create({
            user: req.body.userId,
            url: `/uploads/${req.file.filename}`,
            title: req.body.title
        });
        res.status(201).json(newClip);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const clips = await Clip.find().sort({ createdAt: -1 }).populate('user', 'username');
        res.status(200).json(clips);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/like/:id', async (req, res) => {
    try {
        const clip = await Clip.findById(req.params.id);
        clip.likes += 1;
        await clip.save();
        res.status(200).json(clip);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/share/:id', async (req, res) => {
    try {
        const clip = await Clip.findById(req.params.id);
        clip.shares += 1;
        await clip.save();
        res.status(200).json(clip);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;