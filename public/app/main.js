class TodoModel {
	_setData(data) { 
			if (!data.reduce) { data = [] }
		this._data = data;
		TodoModel.id = this._data.reduce((acc, {id}) => Math.max(acc,id), 0) + 1 || 1;
	}

	_syncCookie() {
		document.cookie = JSON.stringify(this._data);
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
};

document.cookie = JSON.stringify([]);
var test = new TodoModel();
console.log("OK, Hello World !");

var Test = React.createClass({
	render: function() { return ( <h1>{this.props.children}</h1> ) }
});

ReactDOM.render(
	<Test>Hello World, React.JS is OK.</Test>,
	document.querySelector("#todoAppContent")
);
