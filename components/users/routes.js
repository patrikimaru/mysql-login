
module.exports = (app) => {
  const users = require('./controller');
  const router = require('express').Router();
  const auth = require('../../middlewares/validateToken.js');

  router.post('/login', users.login);
  router.post('/register', users.create);
  router.get('/findAll',auth.validateToken, users.findAll);
  router.get('/findAllOnline', auth.validateToken, users.findAllOnline);
  router.get('/findUser/:id', auth.validateToken, users.findOne);
  router.put('/update/:id',auth.validateToken, users.update);
  router.delete('/delete/:id',auth.validateToken ,users.delete);

  app.use('/api/users', router);
};
