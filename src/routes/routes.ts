import { Router } from 'express';
import ProductController from '../controllers/productsControllers';
// import UserController from '../controllers/usersControllers';
import OrderController from '../controllers/ordersControllers';

const router = Router();
const productsController = new ProductController();
// const usersController = new UserController();
const orderController = new OrderController();

router.get('/products', (req, res) => productsController.getAll(req, res));
router.post('/products', (req, res) => productsController.addProduct(req, res));
// router.get('/users', (req, res) => usersController.newUser(req, res));
router.get('/orders', (req, res) => orderController.getAll(req, res));

export default router;