const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: String,
  expiryToken: Date,
  profilePic: {
    type: String,
    default:
      "https://res.cloudinary.com/sagar-barapatre/image/upload/v1640404875/profile_ag7w3n.jpg",
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
});

mongoose.model("User",userSchema);
