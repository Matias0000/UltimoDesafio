import { Application } from "./deps.ts";
import { productRouter } from "./routes/ProductRoutes.ts";


const app = new Application();


app.use(productRouter.routes())
app.use(productRouter.allowedMethods())

app.listen({ port: 8082 });
console.log("Server on localhost:8082");
