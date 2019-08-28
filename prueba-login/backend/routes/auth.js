const router = require('express').Router()
let User = require('../models/users')

router.route('/add').post((req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const newUser = new User()
    newUser.username = username
    newUser.password = newUser.generateHash(password)

    newUser.save()
        .then(users=>{

            console.log('User added!')
        })
        .catch(err=>res.status(400).json('Error: '+ err))
})

router.route('/').get((req,res)=>{

    User.find()
        .then(users=>{
            res.json(users)
        })
        .catch(err=>res.status(400).json('Error: '+ err))
})

router.route('/login').post((req,res)=>{
    const username = req.body.username
    const password = req.body.password

    User.find({
        username:username
    })
        .then(users=>{

            if(users.length==0){
                return res.send({
                    success:false,
                    message: 'Error: usuario no encontrado'
                })
            }

            if(users.length>1){
                return res.send({
                    success:false,
                    message: 'Error: usuario inválido'
                })
            }

            if(users[0].validPassword(password)){
                return res.send({
                    success:true,
                    message: 'Ha iniciado sesión'
                })
            } else{
                return res.send({
                    success:false,
                    message: 'Error: La contraseña es incorrecta'
                })
            }
        })
        .catch(err=>res.status(400).json('Error: '+ err))
})

module.exports = router