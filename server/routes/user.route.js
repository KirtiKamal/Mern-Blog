import express from 'express';
import { getUser, test } from '../controllers/user.controller.js';
import { updateUser, deleteUser, getUsers  } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { signout } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', test);
router.put('/update/:userId',verifyToken, updateUser);
router.delete('/delete/:userId',verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);



export default router;