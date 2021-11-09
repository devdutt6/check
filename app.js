const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const swaggerJsDoc = require("swagger-jsdoc");
const SwaggerUi = require("swagger-ui-express");
require('dotenv').config();

const user = require('./routes/user');
const nft = require('./routes/nft');

const app = express();

// var pass = encodeURIComponent(process.env.DB_PASSWORD)
var port = process.env.PORT;
var connection_string = `mongodb://localhost:27017/bubble`;
// var connection_string = `mongodb://${process.env.DB_USER}:${pass}@${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
      console.log("Database connected")
})
.catch((err) => {
      console.log(`Error connecting Database: ${err}`)
})

app.use(cors());
app.use(express.json());


app.use('/', nft);
app.use('/', user);

const options = {
      definition: {
            openapi: "3.0.0",
            info: {
                  title: "BUBBLE",
                  version: "1.0.0",
                  description: "A documntation for prototype"
            },
            servers: [
                  {
                        url: `http://localhost:${port}/`,
                  },
            ],
      },
      apis: ["./docs/*.js"],
};

//Making Swagger Call
const swaggerDocs = swaggerJsDoc(options)
console.log(`swaggerDocs is running on http://localhost:${port}/api-docs`)
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));

app.listen(port , () => {
    console.log(`App is running on port ${port}`);
});
