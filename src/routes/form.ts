import express from "express";

import { validate } from "../services/form";

const router = new express();

router.post("/validate/:id", (req, res) => {
  const id = req.params.id;
  const value = req.body[id];
  const html = validate(id, value); // we have the entire form values on the body if we ever need to validate compound fields
  res.send(html);
});

export { router };
