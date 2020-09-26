const key = require("./key");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(key.stripeSecretKey);

// SETUP API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});
// - Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/react-5453f/us-central1/api
