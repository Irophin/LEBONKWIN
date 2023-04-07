import express from "express";
import { createServer } from "http";
import { connection } from "./api/config/database";
import cors from 'cors';
import api from "./api";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors())

app.use('/api', api)

connection().then(() => {
	server.listen(3000, () => {
		console.log("Server is running on port 3000");
	})
}).catch((error) => {
	console.log(error);
});
