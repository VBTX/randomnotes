// $('.button').click(function() {
// 	alert('yup');
// });

const getWord = async () => {
	const res = await fetch('/getword');
	const word = await res.text();

	document.getElementById('random-word').innerText = word;
};

const getComments = async () => {
	const res = await fetch('/api/posts');
	const posts = await res.json();
	const comments = posts.slice(0, 10);
	console.log(comments);

	comments.forEach(comment => {
		const li = document.createElement('li');
		const text = document.createTextNode(comment.title);
		li.appendChild(text);
		document.getElementById('comments').appendChild(li);
	});
};

getWord();
getComments();
