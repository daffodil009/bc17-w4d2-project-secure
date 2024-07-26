import express from "express";
import helmet from "helmet";
import { v4 as uuidv4 } from "uuid";

import { activities } from "./activities.js";

// save port number in a const
const port = 3000;

// create an application instance using express
const app = express();

// add some middleware to make use safer
app.use(helmet());

// add some middleware to let user read JSON from request body
app.use(express.json());

// handle a basic "/" request to show app is available
app.get("/", (req, res) => {
	res.status(200).send("Hello World! 🚀✨ "); 
	console.log(req);
});

// GET all the activities
app.get("/activities", (req, res) => {
	res.status(200).json({
		error: null,
		// data: JSON.stringify(activities),
		data: activities,
	});
});

// post a new activity, 
app.post("/activities", (req, res) => {
	
	const newActivity = req.body.newActivity; // POSTMAN request has to have the same request

	//  the newActivity to be posted in the postman.
	
	// {
    // 	"newActivity" : {
    //     "activity_type" : "table tennis",
    //     "activity_duration " : "20"
    // 	 }

	// }	


	console.log(newActivity);

	// If there is no new activity posted
	if (!newActivity) {
		res.status(400).json({
			error: true,
			data: null,
		});
	}

	// Adding ID and Date to new Activity object
	const activity = {
		...newActivity,
		id: uuidv4(),
		activity_submitted: Date.now(),
	};

	// Add new activity to existing activities
	activities.push(activity);
	console.log(activity);
	console.log(activities);

	// Error handling
	res.status(201).json({
		error: false,
		data: activity,
	});
});

// app.delete("/activities"), (req, res) => {
// 	console.log("trying to delete");
// } 

app.listen(port, () => {
	console.log(
		`Server is running on ${port}. This is the address of the port  http://localhost:3000`
	); 
	
});
