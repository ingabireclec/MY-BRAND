import http from "http";
import dotenv from "dotenv";
import { mongoConnect } from "./services/mongo.js";
import app from "./app.js";
dotenv.config();
const PORT = process.env.PORT;
// const server = http.createServer(app);
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
await mongoConnect();
//image config
// const startServer = async () => {
//   await mongoConnect();
//   server.listen(PORT, () => {
//     console.log(`server is running on ${PORT}`);
//   });
// };
// startServer();
