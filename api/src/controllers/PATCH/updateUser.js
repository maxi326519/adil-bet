const { User } = require("../../db")

const updateUser = async (id, name, userName, email, password, phone, wallet, isActive, isAdmin) => {
    try {
        const userFound = await User.findOne({
            where: {
                user: id
            }
        });
        if (userFound) {
            userFound.update({
                name: name,
                userName: userName,
                email: email,
                password: password,
                phone: phone,
                wallet: wallet,
                isActive: isActive,
                isAdmin: isAdmin
            });
            await userFound.save();
        }
    } catch (error) {
        throw new Error("User not found")
    }
}

module.exports = updateUser