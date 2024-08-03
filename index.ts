import { Application } from "https://deno.land/x/oak/mod.ts";
import createRepoRoutes from "./routes/createRepoRoutes.ts";
import deleteRepoRoutes from "./routes/deleteRepoRoutes.ts";
import pullRepoRoutes from "./routes/pullRepoRoutes.ts";
import pushRepoRoutes from "./routes/pushRepoRoutes.ts";

const app = new Application();

app.use(createRepoRoutes.routes());
app.use(createRepoRoutes.allowedMethods());

app.use(deleteRepoRoutes.routes());
app.use(deleteRepoRoutes.allowedMethods());

app.use(pullRepoRoutes.routes());
app.use(pullRepoRoutes.allowedMethods());

app.use(pushRepoRoutes.routes());
app.use(pushRepoRoutes.allowedMethods());


const port = 8000;
console.log(`Server is running on http://localhost:${port}`);
await app.listen({ port });
