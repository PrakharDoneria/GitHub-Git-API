import { Router } from "https://deno.land/x/oak/mod.ts";
import { createRepo } from "../controllers/createRepo.ts";

const router = new Router();

router.post("/repos", createRepo);

export default router;
