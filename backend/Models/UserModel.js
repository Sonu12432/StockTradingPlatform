
const bcrypt = require("bcryptjs");
const { model } =  require("mongoose");

const { userSchema } = require("../Schema/UserSchema");

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const UserModel = new model("User", userSchema);

module.exports = { UserModel };