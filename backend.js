
//Object constructor, som skal kunne vise album,artist,udgivelsesår og genren på albummet. 
function Albums(album,artist,year,genre,tracks){
    this.albumName = album;
    this.artistName = artist;
    this.productionYear = year;
    this.genre = genre; 
    this.trackList = tracks;
}

//Tilføjer en metode, som får det ønskede album tilføjet til det valgte html id.
function addAlbumsTogehter(album,whereToGoId){
    let addAlbumsToId = document.getElementById(whereToGoId);
    let addElements = 
    "<div>" +
    "Album: " + album.albumName + "<br>" +
    "Artist: " + album.artistName + "<br>" +
    "Årstal: " + album.productionYear + "<br>" +
    "Genre: " + album.genre + 
    "</div>"
    
    addAlbumsToId.innerHTML += addElements;
}

//Funktion som adder tracklist til html.  
function addTrackList(track,whereToGoId){
    let addTracksToId = document.getElementById(whereToGoId);
    const trackArray = track.trackList; 

    
    let addElements = "";
    
    for(let i = 0; i < trackArray.length; i++){

    addElements += 
            "<div>" + 
               trackArray[i].trackNumber + ": " + trackArray[i].trackTitle + "<br>" +
            "</div>"
    }

    addTracksToId.innerHTML += addElements;    
}

fetchContent("albums.json").then((albums) => {
    //Log data to the console in order to inspect it and confirm load
    console.log("Original Data: ");
    console.log(albums);

    //Tilføjer array
    let allAlbums = [];
    

//For loop, som kører alle elementerne igennem i JSON 
    for (let i = 0; i < albums.length; i++) {
        const album = new Albums(
            albums[i].albumName,
            albums[i].artistName,
            albums[i].productionYear,
            albums[i].genre,
            albums[i].trackList
        )
        //Bruger push metoden til at tilføje alle elementer i mit array
        allAlbums.push(album);
    } 

    //Laver et array med kun false, som kobles til knapperne.
    let buttonsClicked = [false,false,false,false,false,false,false,false,false,false];

    //En funktion som gør fortæller hvilke knapper er trykket. 
    function buttonClicked(button){

    //If statementet fortæller, at hvis værdien er true(En knap er blevet trykket en gang), så sætter den 
    //alle værdier til false igen og dermed fjernes indholdet også på siden. 
        if(buttonsClicked[button]){
            document.getElementById("albumInfo").innerHTML = "<h1>Album information</h1>";
            document.getElementById("trackList").innerHTML = "<h1>Tracks</h1>";
           
            for(let i = 0; i < buttonsClicked.length; i++){
                buttonsClicked[i] = false;
            }         

             return;
        }

    //Hvis false, sættes alle værdier til false i loopet og derefter fjernes alt på siden. Den trykkede nye
    //trykkede knap sættes til true og vises på siden. 
        for(let i = 0; i < buttonsClicked.length; i++){
            buttonsClicked[i] = false;
        }

        document.getElementById("albumInfo").innerHTML = "<h1>Album information</h1>";
        document.getElementById("trackList").innerHTML = "<h1>Tracks</h1>";
        buttonsClicked[button] = true;
        console.log("You clicked button " +(button + 1));
        return true;
    }

//En metode, som samler alle de andre metoder, så det hele spiller sammen.  
function showAlbum(number){
    if(buttonClicked(number)){

         addTrackList(allAlbums[number],"trackList");
         addAlbumsTogehter(allAlbums[number],"albumInfo"); 
    }    
}

//Alle knapperne. Kunne helt sikkert gøres på en smartere måde, men ja :)

document.getElementById("buttonOne").onclick = function(){
    showAlbum(0);
}

document.getElementById("buttonTwo").onclick = function(){
    showAlbum(1);
}
document.getElementById("buttonThree").onclick = function(){
    showAlbum(2);
}

document.getElementById("buttonFour").onclick = function(){
    showAlbum(3);
}

document.getElementById("buttonFive").onclick = function(){
    showAlbum(4);
}

document.getElementById("buttonSix").onclick = function(){
    showAlbum(5);
}

document.getElementById("buttonSeven").onclick = function(){
    showAlbum(6);
}

document.getElementById("buttonEight").onclick = function(){
    showAlbum(7);
}

document.getElementById("buttonNine").onclick = function(){
    showAlbum(8);
}

document.getElementById("buttonTen").onclick = function(){
    showAlbum(9);
}


});

//Lidt magi jeg har lånt :)
async function fetchContent(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
  }
