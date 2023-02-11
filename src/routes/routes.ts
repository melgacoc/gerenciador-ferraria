import { Router } from 'express';
import ProductController from '../controllers/productsControllers';

const router = Router();
const productsController = new ProductController();

router.get('/products', (req, res) => productsController.getAll(req, res));
router.post('/products', (req, res) => productsController.addProduct(req, res));

export default router;