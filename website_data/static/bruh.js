


fetch("http://127.0.0.1:8000/", { method: "GET" })
.then(res => res.text())
.then(data => console.log(data))
