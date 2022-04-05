import https from "https";

const url = "https://hookb.in/VGrykZ3ZVNtDrgoop1B3";

const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive : ${data.toString()}`)
    })
});

const body = JSON.stringify({
    firstName: "Azzam",
    lastName: "Jiul"
});

request.write(body);
request.end();