//GET - hämtar 
export async function getFirebase() {
    const url = "https://highscoreavjs-default-rtdb.europe-west1.firebasedatabase.app/highscore.json";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.sort((a, b) => b.score - a.score);
    console.log(data);

    const ol = document.createElement("ol");
    for (let players of data) {
        const li = document.createElement("li");
        li.innerText = players.name + " " + players.score;
        ol.append(li);
        document.body.append(ol);
    }

    return data;
}

//PATCH - Lägger till/ersätter existerande object 
export async function patchFirebase(hs) {

    const url = `https://highscoreavjs-default-rtdb.europe-west1.firebasedatabase.app/.json`;
    const newHighscore = {
        highscore: hs
    }
    const options = {
        method: "PATCH",
        body: JSON.stringify(newHighscore),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}