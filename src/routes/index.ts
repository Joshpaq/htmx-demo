import express from "express";

import render from "preact-render-to-string";

import { Home } from "../pages/Home";
import { Items } from "../components/Items";

import * as form from "./form";

const router = new express();

router.get("/", (req, res) => {
  const html = render(Home());
  res.send(html);
});

router.get("/items", (req, res) => {
  const html = render(Items());
  res.send(html);
});

router.use("/form", form.router);

export { router };
