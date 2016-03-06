import http from 'http';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import logger from 'morgan';
import compression from 'compression';
import path from 'path';
import db from './db';
import middleware from './middleware';
import api from './api';

var app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
    exposedHeaders: ['Link']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(cookieParser());

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public'), {maxAge: 31557600000}));

//mongoose.connect(process.env.MONGODB || process.env.MONGOLAB_URI);
//mongoose.connection.on('error', function () {
//    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
//    process.exit(1);
//});


/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), function () {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});


export default app;