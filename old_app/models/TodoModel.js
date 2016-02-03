export default class TodoModel {
	_setData(data) { 
			if (!data.reduce) { data = [] ; }
		this._data = data;
		TodoModel.id = (this._data.reduce((acc, {id}) => Math.max(acc,id), (-1)) + 1) || 0;
	}

	_syncCookie() {
		let str = JSON.stringify(this._data)
		document.cookie = encodeURIComponent(str)
	}

	_setTodoState(id, state) {
		let i = this._data.map(e => e.id).indexOf(id);
		if (i >= 0) {
			this._data[i].done = state;
			this._syncCookie(); // PUT
		}
	}

	constructor() {
		let data = [];
		try {
			data = JSON.parse(decodeURIComponent(document.cookie)); // GET ALL
			this._setData(data);
		} catch(e) {
			data = []
			document.cookie = ""
			this._setData(data)
			this._syncCookie()
		}
	}

	get data() {
		return this._data;
	}
	 
	add(content) {
		this._data.unshift({
			id: TodoModel.id++,
			content: content,
			date: new Date(),
			done: false,
			editing: false
		});
		this._syncCookie(); // POST
	}

	del(id) {
		let i = this._data.map(e => e.id).indexOf(id);
		if (i >= 0) {
			this._data.splice(i, 1)
			this._syncCookie(); // DELETE
		}
	}

	update(id, content) {
		let i = this._data.map(e => e.id).indexOf(id);
		if (i >= 0) {
			this._data[i].content = content ; this._data[i].date = new Date()
			this._syncCookie(); // PUT
		}
	}

	done(id) {
		this._setTodoState(id, true); 
	}

	undo(id) {
		this._setTodoState(id, false); 
	}

	setEditingState(id, state) {
		let i = this._data.map(e => e.id).indexOf(id);
		if (i >= 0) {
			this._data[i].editing = state;
			this._syncCookie(); // PUT
		}
	}
}


