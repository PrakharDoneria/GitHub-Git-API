import { Router } from "https://deno.land/x/oak/mod.ts";
import { deleteRepo } from "../controllers/deleteRepo.ts";

const router = new Router();

router.delete("/repos/:owner/:repo", deleteRepo);

export default router;
