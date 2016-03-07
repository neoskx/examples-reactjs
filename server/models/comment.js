'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Comment Schema
const Comment = new Schema({
  name: {
    type: String,
    default
  }
});