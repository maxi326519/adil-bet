const { User } = require("../../db")

const updateUser = async ({id, name, userName, email, password, phone, wallet, isActive, isAdmin}) => {

        const userFound = await User.findOne({
            where: {
                id: id
            }
        });

        if(userFound && wallet && !name && !userName && !email && !password && !phone && !isActive && !isAdmin ){
            userFound.update({
                wallet: wallet,
            });
            await userFound.save();
            return userFound
        }
        if(userFound && isAdmin && !wallet && !name && !userName && !email && !password && !phone && !isActive ){
            userFound.update({
                isAdmin,
            });
            await userFound.save();
            return userFound
        }
        if(userFound && isActive && !wallet && !name && !userName && !email && !password && !phone && !isAdmin ){
            userFound.update({
                isActive,
            });
            await userFound.save();
            return userFound
        }

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
            return userFound
}
}

module.exports = updateUser