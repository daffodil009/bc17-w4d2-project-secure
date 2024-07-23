import express from "express";
import helmet from "helmet";

const app = express();

const activityData = [
	{
		id: "54321234", // UUID
		activity_submitted: "1719486190058", // simple Epoc timestamp (Date.now() in JS)
		activity_type: "run", // choose some standard types
		activity_duration: "30", // choose standard unit type (minutes probably)
	},
];

app.use(helmet());

app.get("/", (req, res) => {
	res.send("status code 200. Hello World!");
	console.log(req);
});

// I make a GET request to “http://localhost:3000/activities”
// Then the the request should succeed, responding with the correct status code and an array of User Activity objects in the response body (response.data).

app.get("/activities", (req, res) => {
	
    res.status(200).send(activityData);
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
