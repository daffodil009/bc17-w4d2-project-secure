import express from "express";
import helmet from "helmet";

const port = 3000;
const app = express();

app.use(helmet());
app.use(express.json());

const activityData = [
		{
			id: "54321234",
			activity_submitted: "1719486190058",
			activity_type: "run",
			activity_duration: "30",
		}
	];

app.get("/", (req, res) => {
	res.send("Hello World")
});

app.get("/activities", (req, res) => {
	res.status(200).json({
		"success": true,
		"payload": JSON.stringify(activityData)
	})
});

app.post("/activities", (req, res) => {
	const newActivity = req.body.newActivity;

})




app.listen(port, () => {
	console.log("Server is running on http://localhost:3000");
});
