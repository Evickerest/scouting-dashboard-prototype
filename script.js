const teamSearcher = document.querySelector("#team-searcher");

const nextMatchNumber = document.querySelector("#next-match-number");
const teamList = document.querySelector(".team-list");
const teamName = document.querySelector("#team-name");


teamSearcher.onkeyup = filterTeamSearchOrder;


function filterTeamSearchOrder(){
    let numberFilter = teamSearcher.value;
    for( i = 0; i < teamNumbers.length; i++){
        const team = teamNumbers[i];
        if(team.textContent.indexOf(numberFilter) == 0){
           team.style.display = "";
        } else {
           team.style.display = "none";
        }
        
    }
}
const teams = ["4381","3538","3572","2075","3357","4422","5167","6005","3546","7054","2960","141","904","5926","6100","7501","4956","2405","7195","858","7202","4004","3458","5162","9246","6128","9223","9248","7810","6094","8285","4337","4855","7602","6428","9225","6561","5470"];


// let availableData = [];
// for( i = 0; i < )




for( i = 0 ; i < teams.length; i++){
    ele = document.createElement("li");
    ele.dataset.value = Math.floor(Math.random() * 80 + 1);
    ele.textContent = teams[i];
    ele.classList.add("team-number");
    ele.dataset.color = update();
    teamList.append(ele);
}
const teamNumbers = document.querySelectorAll(".team-number");



teamNumbers.forEach( teamButton => {
    teamButton.addEventListener("click", () => {
        teamNumbers.forEach( teamButton => teamButton.classList.remove("active"));
        teamButton.classList.toggle("active");
        nextMatchNumber.textContent = teamButton.dataset.value;
        nextMatchNumber.style.color = teamButton.dataset.color;
        setTeamName(teamButton.textContent);

    })
})

function update(){
    return ["red","blue"][  Math.floor(Math.random() * 2)];
}

function setTeamName( teamNumber ){
    fetch(`https://www.thebluealliance.com/api/v3/team/frc${teamNumber}`, {
        method: "GET",
        headers: {
            "X-TBA-Auth-Key": "api-key",
        
        }
    }).then( res => res.json()).then( json => {
        teamName.textContent = json["nickname"];
    }).catch( err => console.log(err));

}


