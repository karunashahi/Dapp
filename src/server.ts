import express from 'express';
import CountryRoute from './routes/countryRoute.js';
import cors from "cors";

// We will create an express app
const app = express();
// The port that the express server will listen on
const PORT = 3000;
app.use(express.json());
app.use(cors());
// //our new route
app.use('/api/Country', CountryRoute);
// Start the express server
app.listen(PORT, () => {
  console.log('Server is listening on port ${PORT}');
});
