const api_url = "http://127.0.0.1:8000/api/"
const div = document.querySelector(".posts")

const getPosts = () => {
    axios.get(api_url)
    .then(response => {
        const resposta = response.data
        resposta.forEach(element => {
            // console.log(element)

            div.innerHTML += `
            <h4>${JSON.stringify(element.title)}</h4>
            <div class="tabulado">
                ${JSON.stringify(element.content)} <pre>${JSON.stringify(element.created_at)}</pre>
            </div>
            `
        });
    })
    .catch(error => console.error(error))
}

getPosts()

const addNewPost = () => {
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value

    if (title != " " && content != " ") {
        axios.post(api_url, {
            title: title,
            content: content,
            author: 1
        })
        .then(response => {console.log(response)})
        .catch(error => {console.error(error)})
    }
}

