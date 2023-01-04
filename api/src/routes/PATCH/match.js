const router = require('express').Router()
const updateMatch = require("../../controllers/PATCH/updateMatch")
// const { isAdmin } = require('./controllers')

// verificar si es administrador
// const isAdmin = (req, res, next) => {

//    if (req.user.isAdmin) {    // isAdmin === true

//       next()

//    } else {
//       res.status(400).json({
//          error: true,
//          message: 'Usuario no es administrador'
//       })
//    }
// }


router.patch("/match/:id", async (req, res) => {

   const { id } = req.params
   const { game, country, league, homeTeam, awayTeam, logoLeague, logoHome, logoAway, scoreHome, scoreAway } = req.body

   try {
      const update = await updateMatch(id, game, country, league, homeTeam, awayTeam, logoLeague, logoHome, logoAway, scoreHome, scoreAway)
      
   } catch (error) {
      res.status(404).json({ error: error.message })
   }

})


module.exports = router;

