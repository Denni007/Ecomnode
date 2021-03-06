import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';

const router = express.Router();
router.post('/signin', async (req, res) => {
  try {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signinUser) {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: getToken(signinUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid Email or Password.' });
    }
  } catch (error) {
    console.log(error);
  }

});


router.post('/register', async (req, res) => {
try{
const user = new User({
  name: req.body.name,
  email: req.body.email,
  password: req.body.password
})
const newUser = await user.save();

if (newUser) {
  res.send({
    _id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    isAdmin: newUser.isAdmin,
    token: getToken(newUser),
  });
 
    } else {
      res.status(401).send({ message: 'Invalid User Data.' });
    }
  } catch (error) {
    console.log(error);
  }

});

router.get('/createadmin', async (req, res) => {
  console.log('new user created: ');
  try {
    const user = new User({
      name: 'Basir',
      email: 'abc1@gmail.com',
      password: '12345',
      isAdmin: true
    });

    const newUser = await user.save();

    res.send(newUser);
  }
  catch (error) {
    console.log(console.log(error));
    res.send({ meg: error.message });
  }

});


export default router;