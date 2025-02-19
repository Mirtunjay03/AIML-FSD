const http = require('http');
const axios = require('axios');
const port = 3001;
const server = http.createServer(async(req, res) => {
    console.log('Hello from the server!');
    res.writeHead(200, { "Content-Type": "text/html" });

    // const response = await fetch("https://dummyjson.com/products");
    // const data = await response.json();

    const response = await axios.get("https://api.github.com/users");
    const gists_urldata = response.data;
    let frontdata = `<html><head></head><body>`
    gists_urldata.forEach((gists_url) => {
        frontdata+=`<div><img src="${gists_url.avatar_url}"></div>`
    });
    frontdata += `</body></html>`;
    res.end(frontdata);
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});