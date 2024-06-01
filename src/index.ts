import express, { Response, Request } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import myUserRoute from "./routes/MyUserRoute"
import {v2 as cloudinary} from "cloudinary";
import myRestaurantRoute from "./routes/MyRestaurantRoute";

mongoose.connect(process.env.MONGODB_URL as string).then(() => console.log("Connected to DB"));

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/healthy", async (req: Request, res: Response) => {
    res.send({ message: "Health OK!" });
})
app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})