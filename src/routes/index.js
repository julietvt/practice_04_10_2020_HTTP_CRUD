const { Router } = require('express');
const controllers = require('../controller/index');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/api/user', controllers.createUser);
router.get('/api/user/:id', controllers.getUserById);
router.put('/api/user/:id', controllers.updateUser);
router.delete('/api/user/:id', controllers.deleteUser);

module.exports = router;
