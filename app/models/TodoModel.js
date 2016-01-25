export default class TodoModel {
	_setData(data) { 
			if (!data.reduce) { data = [] ; }
		this._data = data;
		TodoModel.id = (this._data.reduce((acc, {id}) => Math.max(acc,id), (-1)) + 1) || 0;
	}

	_syncCookie() {
		var jsonstr = JSON.stringify(this._data)
		document.cookie = encodeURIComponent(jsonstr)
	}

	_setTodoState(id, state) {
		var i = this._data.map(e => e.id).indexOf(id);
		if (i >= 0) {
			this._data[i].done = state;
			this._syncCookie();
		}
	}

	constructor() {
		var data = [];
		try {
			data = JSON.parse(decodeURIComponent(document.cookie));
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
	set data(jsonData) {
		this._setData(jsonData);
		this._syncCookie();
	}

	add(content) {
		this._data.unshift({
			id: TodoModel.id++,
			content: content,
			date: new Date(),
			done: false,
			edited: false
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

	setEditedState(id, state) {
		var i = this._data.map(e => e.id).indexOf(id);
		if (i >= 0) {
			this._data[i].edited = state;
			this._syncCookie();
		}
	}
}


