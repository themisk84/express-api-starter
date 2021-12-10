import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import data from "./data.json";
import hotels from "./hotels.json";

console.log(data.length);

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.json(hotels);
});

app.get("/hotels/:id", (req, res) => {
  let hotelId = req.params.id;
  const selectedHotel = hotels.find((hotel) => hotel.id === +hotelId);
  res.json(selectedHotel);
});

app.put("/hotels/:id/location", (req, res) => {
  let hotelId = req.params.id;
  const selectedHotel = hotels.find((hotel) => hotel.id === +hotelId);
  console.log(selectedHotel);
  const selected = selectedHotel.location === "Athens";

  res.json(selected);
  // const updatedHotel = hottels.find((hotel) => {
  //   hotel.id === hotelId;
  // });
  // const changedLocation = updatedHotel.location === "Athens";
  // res.json(changedLocation);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
