const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const ChatbotUsersSchema = new Schema(
  {
    // Model attributes are defined here
    firstName: {
      type: String,
    },
    lastName: {
      type: String
    },
    facebookId: {
      type: String
    },
    profilePic: {
      type: String
    },
  },
  {timestamps: true}
);

module.exports = model("ChatBotUsers", ChatbotUsersSchema);
