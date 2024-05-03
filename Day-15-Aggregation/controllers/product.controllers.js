import ProductSchema from "../modals/product.schema.js";

export const AddProduct = async (req, res) => {
    try {
        const { name, category, price, quantity} = req.body;
        if(!name || !category || !price || !quantity) {
            return res.status(401).json({ success: false, message: "All fields are required.."})
        }

        const newProduct = await ProductSchema({
            name: name,
            category: category,
            price: price,
            quantity: quantity
        });

        await newProduct.save();

        return res.status(200).json({ success: true, message: "Product successfully added.."})
    } catch (error) {
        return res.status(500).json({ success: false, message: error})
    }
}

export const GetProduct = async (req, res) => {
    try {
        const pipeline = [
            {
                $match: { category: "electronics", price: { $gt: 9000 } }
              },
              {
                $group: {
                  _id: "$product",
                  totalQuantity: { $sum: "$quantity" },
                  totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } }
                }
              }
            
        ];

        const product = await ProductSchema.aggregate(pipeline)

        console.log(product, "product")

        return res.status(200).json({success: true, message: "Products Aggregated", data: product})
    } catch (error) {
        return res.status(500).json({ success: false, message: error})
    }
}