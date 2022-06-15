const ShortCrypt = require('short-crypt')

const urlEncrypt = (projectId) => {
    const sc = new ShortCrypt('4ididalomdb');
    const plainText = projectId;
    const c = sc.encryptToURLComponent(plainText + '');
    return c;
  };

 const urlDecrypt = (projectId) => {
    const sc = new ShortCrypt('4ididalomdb');
    let d = sc.decryptURLComponent(projectId);
  
    d = d.map((c) => String.fromCharCode(c)).join('') * 1;
    return d;
  };
  

const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router()
const Model = require('../models/model');
//Post Method
router.post('/post',  (req, res) => {

  
   
    Model.findOne({email:req.body.email},(err,user)=>{
        if(user){
            res.send({msg: "user already exist", statusCode: 400})
        }else {
            const user = new Model({
                    email: req.body.email,
        password: req.body.password,
        flag: req.body.flag,
        id:    urlEncrypt(Math.floor((Math.random() * 45) + 1))
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                   
                      res.send( {msg:"Account created successfully!!", statusCode: 200})
                }
            })
        }
    })
})




//Get all Method
router.get('/getAll', async (req, res) => {
    try{
      
        const data = await Model.find();
        console.log(data)
        res.json(data)
     
      
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findOne({id: req.params.id} );
        res.json(data)
        data.showEmail()
        console.log(data)
        const dataSingle = await Model.findByEmail("dummy@bjitgroup.com")
console.log("Single", dataSingle)
console.log(data.namedEmail)

    }
    catch(error){
         res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update-password/:id',async (req, res) => {
 
    try {
         const updatedData = req.headers.password
   
         const options = {new: true}
      
       const data = await Model.findOne({id: req.params.id} );

     

      if(data.flag == true ){
       if(data.password === req.body.oldPass){
        const result = await Model.findOneAndUpdate(
            {id: req.params.id}, {password: req.body.newPass}, options
        )
        res.send({msg: 'password changed successfully!!', statusCode: 200})
       }
       else{
        res.send({msg: 'current password did not matched!!', statusCode: 400})
       }

      }
      else{
          res.send({msg: "No permisson for resetting password!!", statusCode: 400})
      }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
 
    await Model.findByIdAndDelete(id)
    res.send("deleted")
})



module.exports = router