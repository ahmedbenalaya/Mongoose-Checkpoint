const express = require("express")
const Router = express()
let  User  =  require ( '../models/user.model' ) ;


// Read one person
Router.route('/:id').get((req,res)=>{
  const id = req.params.id
  User.find({_id:id})
  .then(user => res.json(user))
  .catch(err => res.status(400).json('Error'+err))
}
);

// Read all persons
Router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



// add new person

Router.route('/add').post((req, res) => {
    const username = req.body.username;
  
    const newUser = new User({username});
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



// Update person
Router.route('/:id').put((req, res) => {
  const username = req.body.username;
  const _id = req.params.id

  User.findByIdAndUpdate({_id},{$set:username})
  .then(() => res.json('User updated!'))
  .catch(err => res.status(400).json('Error: ' + err));
});




// Delete a peron

Router.route('/:id').delete((req, res) => {
  const id = req.params.id
  User.findByIdAndRemove({_id:id})
  .then(user => res.json(user))
  .catch(err => res.status(400).json('Error'+err))
});



module.exports= Router