import { Router } from "express";
import checkRole from "../middlewares/checkRole.js";

const router = Router();

router.post("/", checkRole(["Editor", "Admin"]), (req, res, next) => {
    res.status(201).end();
});
router.get("/", (req, res, next) => {
    res.json([]);
});
router.put("/:id", checkRole(["Editor", "Admin"]), (req, res, next) => {
    res.status(204).end();
});
router.delete("/:id", checkRole(["Admin", "Mastermind"]), (req, res, next) => {
    res.status(204).end();
});

export default router;

// post request with protected-routes erst im anschluss an auth route , mit token der bei post: "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IkVkaXRvciIsImlhdCI6MTY3NTE3NzQ2MiwiZXhwIjoxNjc1MTgwNDYyfQ.uJXrXZpZ29J5JP03sQgQjjhtHKODkSdQ_dv3nhZNNrSZkzOzBVUjEYZHGWFOPLXICCOFz5oabHJrpPXHMA-JqQ"
