import { Router } from "https://deno.land/x/oak/mod.ts";
import { pushRepo } from "../controllers/pushRepo.ts";

const router = new Router();

router.put("/repos/:owner/:repo/contents/:path", pushRepo);

export default router;
