const mongoose = require('mongoose');
const UserModel = require('./UserModel');
const ProductModel = require('./ProductModel');

const CartModel = new mongoose.Schema({
    facturapiId: {
        type: String
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsuarioFacturapi',
        required: true
    },
    productos: [{
        producto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProductFacturapi', 
            required: true
        },
        cantidad: {
            type: Number,
            min: 1,
            default: 1
        }
    }],
    subtotal: {
        type: Number,
        default: 0,
        min: 0
    },
    iva: {
        type: Number,
        min: 0,
        default: 0
    },
    total: {
        type: Number,
        min: 0,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    estatus: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    },
    fechaCierre: {
        type: Date
    }

});

const Cart = mongoose.model('CartFacturapi', CartModel);

module.exports = Cart;