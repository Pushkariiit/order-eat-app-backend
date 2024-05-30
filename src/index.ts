import express, { Response, Request } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import myUserRoute from "./routes/MyUserRoute"


mongoose.connect(process.env.MONGODB_URL as string).then(() => console.log("Connected to DB"));
const app = express();
app.use(express.json());
app.use(cors());

app.get("/healthy", async (req: Request, res: Response) => {
    res.send({ message: "Health OK!" });
})
app.use("/api/my/user", myUserRoute);

app.listen(7200, () => {
    console.log("server started on port 7000");
})
