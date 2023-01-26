const { Withdraw } = require("../../db");

const postWithdraw = async ({
  amount,
  method,
  status,
  document,
  userId,
  phone,
  card,
}) => {
  if (!amount && !status && !document && !userId && !phone && !card)
    throw new Error("missing parameters", { statusCode: 400 });

  const newWithdraw = await Withdraw.create({
    amount: parseFloat(amount),
    method: method,
    status: status,
    document: document,
    userId: userId,
    phone: phone,
    card: card,
  });

  return newWithdraw;
};

module.exports = postWithdraw;
