const mongoose =  require('mongoose');

const productSchema =  mongoose.Schema(
    {
        name: {
            type: String        },
        quantity: {
            type: Number,
            default: 0
        },
        price : {
            trype: Number
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports  = Product;