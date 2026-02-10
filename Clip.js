const mongoose = require('mongoose');
const ClipSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    url: { type: String, required: true },
    title: { type: String },
    likes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Clip', ClipSchema);