const {user, Deposit, Bet} = require ("../../db.js")


 const getUserActivity = async (id, activity, page) => {
    const limit = 15;
    const offset = (page-1)* limit;
    if (!id) return "Especificar usuario"
    if (id && activity === "all"){
        //user.getBet
        const userAllBets = await Bet.findAll({
          where:{
            userId: id 
          },
          limit,
          offset,
          // order: [['date', 'DESC']]
      })
      const userAllDeposit = await Deposit.findAll({
        where:{
          userId: id 
        },
        limit,
        offset,
        // order: [['date', 'DESC']]
    })
        const userAllActivities = {Bets:{userAllBets}, Deposit:{userAllDeposit}}
        return userAllActivities
    }
    if (id && activity === "bets"){
        const userAllBets = await Bet.findAll({
          where:{ userId: id },
            limit,
            offset,
            // order: [['date', 'DESC']]
        })
        return userAllBets
    }

    if (id && activity === "deposit"){
        const userAllDeposit = await Deposit.findAll({
            where:{
              userId: id  
            },
            limit,
            offset,
            // order: [['date', 'DESC']]
        })
        return userAllDeposit
    }
    
  };

  module.exports = getUserActivity;