const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const StopSchema=new Schema({
    stopId: {
            type: String,
            unique: true,
            required: true,
            trim: true
    },
    routeId: {
        type: String,
        required: [true, 'Route No is required!'],
        trim: true
    },
    stopLocation: {
        type: String,
        required: [true, 'Location of Stop is required!'],
        trim: true
    },
    stopNo: {
        type: Number,
        required: [true, 'Number allocated to stop is required!'],
        trim: true
    }
    // stops: [{
    //     type: Number,
    //     required: [true, 'Stops are required!'],
    //     trim: true
    // }]
});

const Stop = mongoose.model('Stop', StopSchema);

StopSchema.plugin(autoIncrement.plugin, {
    model: 'Stop',
    field: 'stopId',
    startAt: 1000,
    incrementBy: 1
});

module.exports = Stop;