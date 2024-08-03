import { Router } from "https://deno.land/x/oak/mod.ts";
import { pullRepo } from "../controllers/pullRepo.ts";

const router = new Router();

router.get("/repos/:owner/:repo/pulls", pullRepo);

export default router;
