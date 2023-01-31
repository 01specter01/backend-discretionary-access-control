import { Router } from "express";
import checkAccess from "../middlewares/checkAccess.js";

const router = Router();

router.get("/", checkAccess("Read"), (req, res, next) => {
    res.json([]);
});
router.post("/", checkAccess("Create"), (req, res, next) => {
    res.status(201).end();
});
router.put("/:id", checkAccess("Change"), (req, res, next) => {
    res.status(204).end();
});
router.delete("/:id", checkAccess("Delete"), (req, res, next) => {
    res.status(204).end();
});

export default router;

// post request with protected-routes erst im anschluss an auth route , mit token der bei post: "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IkVkaXRvciIsImlhdCI6MTY3NTE3NzQ2MiwiZXhwIjoxNjc1MTgwNDYyfQ.uJXrXZpZ29J5JP03sQgQjjhtHKODkSdQ_dv3nhZNNrSZkzOzBVUjEYZHGWFOPLXICCOFz5oabHJrpPXHMA-JqQ"
