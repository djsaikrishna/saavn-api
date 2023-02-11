import express from "express";
import router from "../src/routes/router.js";

const app = express();
const PORT = process.env.PORT || 8000 || 8001;

app.use("/api", router);

app.get("/", (req, res) => {
  res.send(
    "<a href='http://localhost:8000/api/songs?id=kIeKIfvs'> http://localhost:8000/api/songs?id=kIeKIfvs</a>"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
