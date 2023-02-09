


fetch("http://127.0.0.1:8000/", { method: "GET" })
.then(res => res.text())
.then(data => {
    let html = data
        .replaceAll(`href="/course`, `data-url="/course`)
        .replaceAll(`class="active"`, `class="active" onclick="getFolder(this)"`)

    const parser = new DOMParser()
    html = parser.parseFromString(html, "text/html")

    document.querySelector("#root").append(html.querySelector("body"))
})


function getFolder(d) {
    const href = d.getAttribute('data-url')

    fetch(`http://127.0.0.1:8000/course?href=${href}`, { method: "GET" })
    .then(res => res.text())
    .then(data => {
        let html = data
            .replaceAll(`href="/course`, `data-url="/course`)
            .replaceAll(`class="active"`, `class="active" onclick="getFolder(this)"`)

        const parser = new DOMParser()
        html = parser.parseFromString(html, "text/html")

        const topBar = html.querySelector(".materials-top")
        topBar.style = "height: 60px !important"
        const downloadBtn = document.createElement("button")
        downloadBtn.setAttribute("onclick", "downloadAll()")
        downloadBtn.setAttribute("class", "downloadBtn")
        topBar.append(downloadBtn)
        downloadBtn.innerHTML = "Download All Files"

        document.querySelector("#root").innerHTML = ""
        document.querySelector("#root").append(html.querySelector("body"))
    })
}


function downloadAll() {
    const tbody = document.querySelector("tbody")
    console.log(tbody)
    console.log(tbody.children)
}