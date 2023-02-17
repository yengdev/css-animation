const list = []

function addMoreList() {
	const name = document.getElementById('name');
	if (!name.value) {
		alert('Please enter a name')
		return false
	}

	list.push(name.value)

	addArrayIntoListHtml();

	name.value = ''
}

function addArrayIntoListHtml() {
	removeAllListChild();

	list.forEach(element => {
		const listNode = document.createElement('li')
		const textNode = document.createTextNode(element)
		listNode.appendChild(textNode)
		document.getElementById('myList').appendChild(listNode)
	});
}

function removeAllListChild() {
	const myList = document.getElementById('myList');
	myList.innerHTML = ''
}

// using api
let dummyList = null
function fetchData() {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(json => {
			dummyList = json;

			const dummy = document.getElementById('dummy')
			dummyList.forEach(e => {
				dummy.innerHTML += `
				<div>
					<h3>${e.title}</h3>
				</div>
				`
			})
		})

}

fetchData()