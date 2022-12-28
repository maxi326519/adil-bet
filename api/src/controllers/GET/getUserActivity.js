const {user, deposit, bet} = require ("../../db.js")


 const getUserActivity = async (id, activity, page) => {
    const limit = 15;
    const offset = page* limit;
    if (!id) return "Especificar usuario"
    if (id && activity === "all"){
        //user.getBet
        const userAllBets = await bet.findAll({
          where:{
             user: {
               id
             } 
          },
          limit,
          offset,
          order: [['date', 'DESC']]
      })
      const userAllDeposit = await deposit.findAll({
        where:{
           user: {
             id
           } 
        },
        limit,
        offset,
        order: [['date', 'DESC']]
    })
        const userAllActivities = {Bets:{userAllBets}, Deposit:{userAllDeposit}}
        return userAllActivities
    }
    if (id && activity === "bets"){
        const userAllBets = await bet.findAll({
            where:{
               user: {
                 id
               } 
            },
            limit,
            offset,
            order: [['date', 'DESC']]
        })
        return userAllBets
    }
    if (id && activity === "deposit"){
        const userAllDeposit = await deposit.findAll({
            where:{
               user: {
                 id
               } 
            },
            limit,
            offset,
            order: [['date', 'DESC']]
        })
        return userAllDeposit
    }
    
  };

  module.exports = getUserActivity;