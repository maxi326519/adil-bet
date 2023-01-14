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

  await profileFound.save();
  return profileFound;

  // if(profileFound && isAdmin && !wallet && !name && !userName && !email && !password && !phone && !isActive ){
  //     profileFound.update({
  //         isAdmin,
  //     });
  //     await profileFound.save();
  //     return profileFound
  // }




  /*   if (profileFound) {
      profileFound.update({
        userName: userName,
        email: email,             //--- esto no se pa' qué mierda lo pusieron... lol...
        phone: phone,
      });
      await profileFound.save();
      return profileFound;
    } */
};

module.exports = updateProfile;
