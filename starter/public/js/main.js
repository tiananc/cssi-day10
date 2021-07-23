console.log("Script Running!");
console.log(firebase.database().ref());

const databaseRef = firebase.database().ref();
const songsInput = document.querySelector("#songs");
const addPlaylist = document.querySelector("#addPlaylist");
const playlistTitle = document.querySelector("#playlistTitle");

 addPlaylist.addEventListener("click", (e) => {
     console.log("clicked!")
     console.log(songsInput.value);

     databaseRef.push({
         title: playlistTitle.value,
         songs: songsInput.value.split("\n")



     }

     )
    });





