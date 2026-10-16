fetch("https://jsonplaceholder.typicode.com/todos/99999999") //throws error because can't fetch todo with that id
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Failed to fetch todo");
        }
    })
    .then(todo => console.log(todo.title))
    .catch(err => console.error(err));