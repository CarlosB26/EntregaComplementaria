import { Router } from 'express';
import ProductsdbManager from '../../dao/Products.manager.js';

const router = Router();

 router.get('/', async (req, res) => {
    const products = await ProductsdbManager.get(); 
    res.render('dbproducts', { products: products.map(product => product.toJSON()), title: 'Lista de productos👜' })
 })


export default router;

