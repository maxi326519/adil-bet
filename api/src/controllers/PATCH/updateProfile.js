const { User } = require("../../db");

const updateProfile = async ({ id, userName, email, phone }) => {
  const profileFound = await User.findOne({
    where: {
      id: id,
    },
  });

  if (userName !== "" && profileFound.userName) {
    profileFound.update({
      userName: userName,
    });
  }

  if (email !== "" && profileFound.email) {
    profileFound.update({
      email: email,
    });

    if (phone !== "" && profileFound.phone) {
      profileFound.update({
        phone: phone,
      });
    }
    await profileFound.save();
    return profileFound;
  }
  // if(profileFound && isAdmin && !wallet && !name && !userName && !email && !password && !phone && !isActive ){
  //     profileFound.update({
  //         isAdmin,
  //     });
  //     await profileFound.save();
  //     return profileFound
  // }

  if (profileFound) {
    profileFound.update({
      userName: userName,
      email: email,
      phone: phone,
    });
    await profileFound.save();
    return profileFound;
  }
};

module.exports = updateProfile;
