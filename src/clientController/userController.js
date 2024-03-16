const {Users} = require('../models')
const {Op} = require('sequelize');
var {signUpValidator} = require('../../utils/validator');

const login = async (req, res, next) => {

  if (req.method === 'POST') {
    try{
      const userData = await Users.findOne({
          where: {
              email: req.body.email 
          }
        });
      return res.redirect('/dashboard');
      }catch(e){
        return res.redirect('/login');
      }
  }else {
    return res.render('users/login', {title: 'Login'});
  }
  
};

const signUp = async (req, res, next) => {
    if(req.method === 'POST') {
        try {
            const userData = await Users.findOne({
              where: {
                [Op.or]: [
                  { email: req.body.email },
                  { phone_no: req.body.phone_no }
                ]
              }
            });
          
            if (userData) {
              return res.redirect('/signup', { error: "User Allready Exist" });
            } else {
              const newUser = await Users.create(req.body);
              if (newUser) {
                return res.redirect('/dashboard');
              }
            }
          } catch (err) {
            // Handle any errors
            console.error(err);
            return res.redirect('/login');
          }  
    }
    res.render('users/signUp', {title: 'Sign Up'})
};

module.exports = {login,signUp}