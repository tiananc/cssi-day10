console.log("Script Running!");
console.log(firebase.database().ref());

const databaseRef = firebase.database().ref();
const songsInput = document.querySelector("#songs");
const addPlaylist = document.querySelector("#addPlaylist");
const playlistTitle = document.querySelector("#playlistTitle");
const playlists = document.querySelector("#playlists");

addPlaylist.addEventListener("click", (e) => {
     console.log("clicked!")
     console.log(songsInput.value);

     databaseRef.push({
         title: playlistTitle.value,
         songs: songsInput.value.split("\n")
     })
});

databaseRef.on("value", (snapshot) => {
    data = snapshot.val();
    for (let key in data) {
        console.log(data);
        playlists.innerHTML += "\n<details open>"
        playlists.innerHTML += `\n<summary>${data[key].title}</summary>`
        playlists.innerHTML += "\n<ol>"
        for (let i = 0; i < data[key].songs.length; i++) {
            playlists.innerHTML += `\n<li>${data[keys].songs[i]}</li>`
        }
        playlists.innerHTML += "\n</ol>"
        playlists.innerHTML += "\n</details>"
    }
});


// let temp = `<details open>
//     <summary>${}</summary>
//     <ol id="">
//         <li>${}</li>
//     </ol>
// </details>`