import { Router } from 'express';
import ProductsdbManager from '../../dao/Products.manager.js';

const router = Router();

router.get('/productos', async (req, res) => {
    const products = await ProductsdbManager.get();
    res.status(200).json(products) ;
})

router.get('/productos/:pid', async (req, res) => {
    const { pid } = req.params;
    const product = await ProductsdbManager.getById(pid);
    res.status(200).json(product) ;
})

router.post('/productos', async (req, res) => {
    const { body } = req;
    const product = await ProductsdbManager.create(body);
    res.status(201).json(product) ;
});

router.put('/productos/:pid', async (req, res) => {
    const { pid } = req.params;
    const { body } = req;
    await ProductsdbManager.updateById(pid, body);
    res.status(204).end();
});

router.delete('/productos/:pid', async (req, res) => {
    const { pid } = req.params;
    await ProductsdbManager.deleteById(pid);
    res.status(204).end();
});

export default router;