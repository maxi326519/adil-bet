const { User } = require("../../db");

const updateProfile = async (id, { name, userName, email, phone }) => {

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

  if (name.length !== 0) {
    profileFound.update({
      name: name,
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

  await profileFound.save();

  return profileFound;
};

module.exports = updateProfile;
