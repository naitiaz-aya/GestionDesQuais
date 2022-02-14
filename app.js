const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const portRoutes = require('./routes/portRoutes');
const systemRoutes = require('./routes/systemRoutes');
const quayTypeRoutes = require('./routes/quayTypeRoutes');
const quayRoutes = require('./routes/quayRoutes');
const containerRoutes = require('./routes/containerRoutes');
const shipRoutes = require('./routes/shipRoutes');
const shipOwnerRoutes = require('./routes/shipOwnerRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const truckRoutes = require('./routes/truckRoutes');
const driverRoutes = require('./routes/driverRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const blockPartRoutes = require('./routes/blockPartRoutes');
const blockRoutes = require('./routes/blockRoutes');
const storageAreaRoutes = require('./routes/storageAreaRoutes');

const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

// Allow Cross-Origin requests
//mécanisme qui consiste à ajouter des en-têtes HTTP
app.use(cors());

// Helmet vous aide à sécuriser vos applications 
// Express en définissant divers en-têtes HTTP.
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());


// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/system', systemRoutes);
app.use('/api/v1/port', portRoutes);
app.use('/api/v1/quayType', quayTypeRoutes);
app.use('/api/v1/quay', quayRoutes);
app.use('/api/v1/container', containerRoutes);
app.use('/api/v1/ship', shipRoutes);
app.use('/api/v1/shipOwner', shipOwnerRoutes);
app.use('/api/v1/reservation', reservationRoutes);  
app.use('/api/v1/truck', truckRoutes);  
app.use('/api/v1/driver', driverRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/blockPart', blockPartRoutes);
app.use('/api/v1/block', blockRoutes);
app.use('/api/v1/storageArea', storageAreaRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;