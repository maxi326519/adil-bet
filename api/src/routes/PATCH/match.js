const router = require('express').Router()
const match = require('../../db.js')
// const { Op } = require('sequelize')    //para ilike => traer match según nombre
// const { isAdmin } = require('./controllers')


// verificar si es administrador
const isAdmin =(req, res, next) => {

   if (req.user.isAdmin) {    // isAdmin === true
      
		next()
      
	} else {

      res.status(400).json({
            error: true,
            message: 'Usuario no es administrador'
         })
      }
   }
      

   //trae todos los partidos
   router.get('/', isAdmin, (req, res) => {

      match.findAll()
      
      .then((matches) => {
         res.status(200)
         .send(matches)
    })

    .catch((err) => res.status(500).send(err))
   })


   //eliminar partido
   router.delete('/:id', isAdmin, (req, res) => {

     match.findByPk(req.params.id)
       .then((match) => {
         match.destroy().then((match) => {
           res.status(200)
           .send(match, 'Match eliminado')
         })
       })

       .catch((err) => res.status(500).send(err))
   })

   
module.exports = router

////////////////////////////////////////////////////////////////////////////
   // const router = require('express').Router();
   // const match = require('../../db.js')
   
   // router.patch('/match', async (req, res) => {
      
   //    try {
   //       const matches = (await axios(`${API}`)).data
   //       const matching = matches.map(t=>t.name)
         
   //       const matchName = req.params
   //       res.json()
         
   //    } catch (error) {
   //       console.log('match no disponible');
   //    }
      
   // });
   
   // module.exports = router;