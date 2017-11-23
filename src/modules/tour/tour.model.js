const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const TourSchema=new Schema({
    tourId: {
            type: String,
            unique: true,
            required: true,
            trim: true
    },
    startPoint: {
        type: String,
        required: [true, 'Start Point is required!'],
        trim: true
    },
    endPoint: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        required: [true, 'Date is required!'],
        trim: true
    },
    startTime: {
        type: Date,
        required: [true, 'Start Time is required!'],
        trim: true
    },
    endTime: {
        type: Date,
        trim: true
    },
    paidAmount: {
        type: Number,
        trim: true
    },
    busRoute: {
        type: Schema.Types.ObjectId,
        required : [true, 'Bus Route is required!'],
        ref: 'Route'
    },
    nicNo: {
        type: Schema.Types.ObjectId,
        required : [true, 'NIC is required!'],
        ref: 'User'
    }
});

const Tour = mongoose.model('Tour', TourSchema);

TourSchema.plugin(autoIncrement.plugin, {
    model: 'Tour',
    field: 'tourId',
    startAt: 1000,
    incrementBy: 1
});

module.exports = Tour;