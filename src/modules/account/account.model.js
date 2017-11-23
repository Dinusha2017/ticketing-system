const mongoose = require('mongoose');

const AccountSchema=new Schema({
    cardNo: {             //card already made with IDs. admin enter ID.
            type: Number,
            unique: true,
            required: true,
            trim: true
    },
    creditAmount: {
        type: Number,
        required: [true, 'Credit Amount is required!'],
        trim: true
    },
    creditCardNo: {
        type: Number,
        trim: true
    },
    nicNo: {
        type: String,
        required : [true, 'NIC is required!'],
        ref: 'User'
    }
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;