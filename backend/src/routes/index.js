import { Router } from "express";
import authRoutes from "./auth.routes.js";

const router = Router();

router.use("/auth", authRoutes);

router.get("/health", (req, res) => {
    res.json({ ok: true, message: "API working"});
})

export default router;
