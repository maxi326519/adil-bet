const { User } = require("../../db");

const getUserInfo = async (id) => {
  return await User.findAll({
    where: {
      id: id,
    },
  });
};

// async function getUserInfo(name, userName, email, phone, wallet) {
//   let attributes = {};

//   console.log(name, userName, email, phone, wallet);

//   // Filters
//   if (name) attributes["name"] = name;
//   if (userName) attributes["userName"] = userName;
//   if (email) attributes["email"] = email;
//   if (phone) attributes["phone"] = phone;
//   if (wallet) attributes["wallet"] = wallet;

//   // Find userData
//   let userInfo = await User.findAll({ where: attributes });

//   if (!userInfo) throw new Error("No existen usuarios con esos filtros");

//   return userData;
// }

module.exports = getUserInfo;

//const {User, Deposit, Bet} = require ("../../db.js")

//   const getUserInfo = async (id) => {
//       const userInfo = await User.findByPk(id,
//         {
//         include: [
//           {
//             model: Bet,
//             attributes: [
//                 'betTo',
//                 'amount',
//                 'date'
//               ],
//           },
//           {
//             model: Deposit,
//             attributes: [
//               'amount',
//               'method',
//             ],
//           },
//         ],
//       }
//       );
//       return userInfo;

//   };

// module.exports = getUserInfo;
