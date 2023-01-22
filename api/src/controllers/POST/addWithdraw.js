const { Withdraw } = require("../../db");

const postWithdraw = async ({
  amount,
  method,
  status,
  document,
  userId,
  phone,
}) => {
  console.log(userId)
  if (amount && method && status && document && userId && phone)
    throw new Error("missing parameters", { statusCode: 400 });

  const newWithdraw = await Withdraw.create({
    amount: parseFloat(amount),
    method: method,
    status: status,
    document: document,
    userId: userId,
    phone: phone,
  });

  return newWithdraw;
};

module.exports = postWithdraw;
