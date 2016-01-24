class TodoModel {
	_setData(data) { 
			if (!data.reduce) { data = [] ; }
		this._data = data;
		TodoModel.id = (this._data.reduce((acc, {id}) => Math.max(acc,id), (-1)) + 1) || 0;
	}

	_syncCookie() {
		document.cookie = JSON.stringify(this._data);
	}

	_setTodoState(id, state) {
		var i = this._data.map(e => e.id).indexOf(id);
		if (i >= 0) {
			this._data[i].done = state;
			this._syncCookie();
		}
	}

	constructor() {
		this._setData(JSON.parse(document.cookie));
	}
	get data() {
		return this._data;
	}
	set data(jsonData) {
		this._setData(jsonData);
		this._syncCookie();
	}

	add(content) {
		this._data.push({
			id: TodoModel.id++,
			content: content,
			date: new Date(),
			done: false
		});
		this._syncCookie();
	}

	del(id) {
		var i = this._data.map(e => e.id).indexOf(id);
		if (i >= 0) {
			this._data.splice(i, 1)
			this._syncCookie();
		}
	}

	update(id, content) {
		var i = this._data.map(e => e.id).indexOf(id);
		if (i >= 0) {
			this._data[i].content = content ; this._data[i].date = new Date()
			this._syncCookie();
		}
	}

	done(id) {
		this._setTodoState(id, true);
	}

	undo(id) {
		this._setTodoState(id, false);
	}
};

document.cookie = JSON.stringify([]);
var todo = new TodoModel();
todo.add("Hello World.");
todo.add("Hello World 2.");
todo.add("Hello World 3.");
todo.update(2, "YOLO");
todo.done(0);
todo.done(1);
todo.del(0);
todo.del(1);
todo.done(2);

var Test = React.createClass({
	render: function() { 
		var x = "NOP";
		var e = this.props.children[0];
		var done = function(x) {return (x) ? "[x]" : "[ ]"};
		if (e) { x = e.content + " " + done(e.done) }
		return ( <h1>{x}</h1> )
	}
});

ReactDOM.render(
	<Test>{todo.data}</Test>,
	document.querySelector("#todoAppContent")
);
