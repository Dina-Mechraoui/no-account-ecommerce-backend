import express from 'express'
import connectDB from './config/db.js';
import ProductRoutes from './app/routes/productRoutes.js';
import OrderRoutes from './app/routes/orderRoutes.js';
import sessionMiddleware from './app/middlewares/session.js';
import CartRoutes from './app/routes/CartRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionMiddleware)

app.get('/', (req, res) => {
    if (!req.session.views) {
        req.session.views = 1;
    } else {
        req.session.views++;
    }
    res.send(`You've visited this page ${req.session.views} times`);
});

app.use('/api/product', ProductRoutes);
app.use('/api/cart', CartRoutes);
app.use('/api/order', OrderRoutes);

app.listen(PORT, () => {
    console.log(`APP running at port ${PORT}`);
});