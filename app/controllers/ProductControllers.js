import Product from "../models/Product.js";


const addProduct = async (req, res) => {
    try {
        console.log('got here')
        const {name, price, stock, description, category, promotion } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        console.log('heeloooo')
        const picture = req.file.path;
        console.log('got here')
        const newProduct = new Product({
            picture,
            name,
            price,
            stock,
            description,
            category,
            promotion
        });

        await newProduct.save();
        res.status(201).json({ message: newProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;

        const product = await Product.deleteOne({_id: id})

        if (product.deletedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProduct = async (req, res) =>{
    try {
        const {id} = req.params;
        const updateData = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export {addProduct, deleteProduct, updateProduct, getProducts, getProduct}