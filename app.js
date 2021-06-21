const cluster = require('cluster');
const dotenv = require('dotenv');
const express = require('express');
const favicon = require('serve-favicon');
const http = require('http');
const mongoose = require('mongoose');
const os = require('os');
const path = require('path');

const numCPUs = process.env.WEB_CONCURRENCY || os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++)
    cluster.fork();

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();
  const server = http.createServer(app);

  dotenv.config({ path: path.join(__dirname, '.env') });

  const PORT = process.env.PORT || 3000;
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/usersmagic';

  const companyRouteController = require('./routes/companyRoute');
  const indexRouteController = require('./routes/indexRoute');
  const pricingRouteController = require('./routes/pricingRoute');
  const reportsRouteController = require('./routes/reportsRoute');
  const resourcesRouteController = require("./routes/resourcesRoute");
  const testerRouteController = require('./routes/testerRoute');

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  mongoose.connect(mongoUri, { useNewUrlParser: true, auto_reconnect: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

  app.use(express.static(path.join(__dirname, 'public')));
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  app.use((req, res, next) => {
    req.query = (req.query && typeof req.query == 'object' ? req.query : {});
    next();
  });
  
  app.use('/', indexRouteController);
  app.use('/company', companyRouteController);
  app.use('/pricing', pricingRouteController);
  app.use('/reports', reportsRouteController);
  app.use("/resources", resourcesRouteController);
  app.use('/tester', testerRouteController);
  
  server.listen(PORT, () => {    
    console.log(`Server is on port ${PORT} as Worker ${cluster.worker.id} running @ process ${cluster.worker.process.pid}`);
  });
}
