const { User } = require("../../db");

const updateProfile = async ({ id, userName, email, phone }) => {
  const profileFound = await User.findOne({
    where: {
      id: id,
    },
  });

  if (userName.length !== 0) {
    profileFound.update({
      userName: userName,
    });
  }

  if (email.length !== 0) {
    profileFound.update({
      email: email,
    });
  }
  if (phone.length !== 0) {
    profileFound.update({
      phone: phone,
    });
  }

  await profileFound.save();z
  return profileFound;

};

module.exports = updateProfile;
