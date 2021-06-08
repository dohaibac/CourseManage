
const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
	{"id" : 1, "name" : "course 1"},
	{"id" : 2, "name" : "course 2"},
	{"id" : 3, "name" : "course 3"},
];

app.get("/", (req, res) => {
	res.send("hello Word");
});

app.get("/api/courses", (req, res) => {
	res.send(courses);
});

app.get("/api/course/:id", (req, res) => {
	const course = getCourse(req);
	if (!course) return res.status(404).send("The Course ID was not found");

	res.send(course);
});

app.post("/api/courses", (req, res) => {
	const { error } = validateCourse(req.body);

	if (error) return res.status(400).send(error.details[0].message);

	const course = {
		"id" : courses.length + 1, 
		"name" : req.body.name
	};

	courses.push(course);
	res.send(course);
});

app.put("/api/course/:id", (req, res) => {
	const course = getCourse(req);
	if (!course) return res.status(404).send("The Course ID was not found");

	const { error } = validateCourse(req.body);

	if (error) return res.status(400).send(error.details[0].message);

	course.name = req.body.name;
	res.send(course);

});

app.delete("/api/course/:id", (req, res) => {
	console.log(parseInt(req.params.id));
	const course = getCourse(req);
	console.log(course);
	if (!course) return res.status(404).send("The Course ID was not found");

	const index = courses.indexOf(course);

	courses.splice(index, 1);

	res.send(course);
});

function validateCourse(course) {
	const schema = Joi.object({ name: Joi.string().min(3).required()
	 });
	return schema.validate(course);
}

function getCourse(req) {
	return courses.find(c => c.id == parseInt(req.params.id));
}

app.listen(3000, () => console.log("listening on port 3000 ... "));