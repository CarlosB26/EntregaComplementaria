import  express from 'express' ;
import path from 'path';
import handlebars from 'express-handlebars';

import productRoutes  from './routers/products.router.js';
import homeRoutes  from './routers/home.router.js';
import cartRoutes  from './routers/cart.router.js';
import realTime  from './routers/realTimeProducts.router.js';
import indexRoutes from './routers/views/index.router.js'
import productApiRouter from './routers/api/dbproducts.router.js'

import { __dirname } from './utils.js';


const app = express();

// Middleware para el análisis de JSON en las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views')),
app.set('view engine', 'handlebars')

// Usa las rutas definidas en los archivos importados
app.use('/', homeRoutes);
app.use('/dbproducts', indexRoutes);
app.use('/api/dbproducts', productApiRouter);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/realtimeproducts', realTime);

app.use((error, req, res, next) => {
  const message = `Ocurrio un error desconocido 😔: ${error.message}`;
  console.error(message);
  res.status(500).json ({ message });
})


export default app;

