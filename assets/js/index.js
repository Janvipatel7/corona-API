let checkbtn = document.getElementById("checkbtn");
let ansReport = document.getElementById("ans");

checkbtn.addEventListener("click", () => {
    let stateName = document.getElementById("searchName").value.trim();

    const URL = "https://api.rootnet.in/covid19-in/stats/latest";

    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        let states = data.data.regional;
        console.log(states);
        for (let i = 0; i < states.length; i++) {
            if (states[i].loc.toLowerCase() === stateName.toLowerCase()) {
                ansReport.innerHTML = 
                    "State: " + states[i].loc + "<br>" +
                    "Total Confirmed: " + states[i].totalConfirmed + "<br>" +
                    "Discharged: " + states[i].discharged + "<br>" +
                    "Deaths: " + states[i].deaths + "<br>";
                return;
            }
        }

        ansReport.innerHTML = "State Not Found! Please Check Name....";
    });
});
