import jsonfile from "jsonfile"

/************************
** Data *****************
************************/
let data = [{id: 1, content: "Hello World"}, {id: 42, content: "Forty Two"}];

/************************
** Utilities ************
************************/
const findTodo = idTodo => data.findIndex(({id}) => idTodo == id);

/************************
** Persistance **********
************************/
const syncModel = () => {
	jsonfile.writeFile("./todolist.json", data, (err) => {
		if (err)
			console.log("Error writing todolist.json file.");
	});
};

jsonfile.readFile("./todolist.json", "utf8", (err, d) => {
		if (err)
		{
			console.log("todolist.json not present, create an empty model.");
			data = [];
			syncModel();
		}
		else {
			data = d;
			console.log("Data Loaded.");
		}
});

/************************
** API ******************
************************/
const todoGet = (req, res) => {
	let id = findTodo(req.params.id)

	if (data[id])
		res.status(200).json(data[id])
	else
		res.status(500).write("todo #" + req.params.id + " doesnt't exist.")
	res.end()
};

const todoPost = (req, res) => {
	let id = findTodo(req.params.id)

	if (id == -1) {
		req.body.id = req.params.id;
		data.push(req.body);
		res.status(200).write("post ok");
		syncModel();
	}
	else
		res.status(500).write("todo #" + req.params.id + " already exist.")
	res.end()
};

const todoDelete = (req, res) => {
	let id = findTodo(req.params.id)

	if (id >= 0) {
		data.splice(id, 1);
		res.status(200).write("delete ok");
		syncModel();
	}
	else
		res.status(500).write("todo #" + req.params.id + " doesnt't exist.")
	res.end()
};

const todoPut = (req, res) => {
	let id = findTodo(req.params.id)

	if (id >= 0) {
		data[id] = req.body
		data[id].id = req.params.id
		res.status(200).write("put ok")
		syncModel();
	}
	else
		res.status(500).write("todo #" + req.params.id + " doesnt't exist.")
	res.end()
}

/************************
** Injector  ************
************************/
const injectAPI = app => {
	app	.route('/api/todo/:id')
		.get(todoGet)
		.post(todoPost)
		.delete(todoDelete)
		.put(todoPut)

		app.get('/api/todos/', (req, res) => {
		res.status(200).json(data)
		res.end()	
	});
};
export default injectAPI;
