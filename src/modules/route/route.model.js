const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const RouteSchema=new Schema({
    routeId: {
            type: String,
            unique: true,
            required: true,
            trim: true
    },
    routeNo: {
        type: String,
        required: [true, 'Route No is required!'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    stops: [{
        type: Number,
        required: [true, 'Stops are required!'],
        trim: true
    }]
});

const Route = mongoose.model('Route', RouteSchema);

RouteSchema.plugin(autoIncrement.plugin, {
    model: 'Route',
    field: 'routeId',
    startAt: 1000,
    incrementBy: 1
});

module.exports = Route;