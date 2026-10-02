const mongoose = require("mongoose");

const eventSlotSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: [true, "Event name is required"],
      trim: true
    },

    date: {
      type: Date,
      required: [true, "Date is required"]
    },

    startTime: {
        type :String,
      required: [true, "Start time is required"],
      trim: true
    },

    endTime: {
        type : String,
      required: [true, "End time is required"],
      trim: true
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true
    },

    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
    },

    status: {
      type: String,
    }
  },
 
);

module.exports = mongoose.model("EventSlot", eventSlotSchema);
