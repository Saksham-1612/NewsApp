import express, { urlencoded } from "express";
import "dotenv/config";
import router from "./routes/router.js";
const PORT = process.env.PORT || 8000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
