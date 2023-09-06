import * as bodyParser from "body-parser";
import express from "express";
import path from "node:path";

import { router } from "./routes";

const port = process.env.PORT || 3000;

const app = express();

// htmx posts uses application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.get("/styles.css", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "dist", "styles.css"))
);

app.listen(port, () => console.log(`Listening on port ${port}`));
