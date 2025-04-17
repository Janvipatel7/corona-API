let checkbtn = document.getElementById("checkbtn");
let stateName = document.getElementById("stateName");
let totalCases = document.getElementById("totalCase");
let deaths = document.getElementById("deaths");
let recovered = document.getElementById("recovered");
let clearbtn = document.getElementById("clearbtn");

checkbtn.addEventListener("click", () => {
    let stateName = document.getElementById("stateName").value.trim();
    const URL = "https://api.rootnet.in/covid19-in/stats/latest";

    if(stateName === ""){
        Swal.fire({
            icon: "warning",
            text: "State Not Found",
            position: 'bottom-start',
            toast: 'true',
            showConfirmButton: false,
            timer: 1500,
        });
        document.querySelector("#stateName").value = "";
        return;
    }

    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            let states = data.data.regional;
            let found = false;
            console.log(states);
            
            for (let i = 0; i < states.length; i++) {
                if (states[i].loc.toLowerCase() === stateName.toLowerCase()) {
                    totalCase.innerHTML = states[i].totalConfirmed;
                    deaths.innerHTML = states[i].deaths;
                    recovered.innerHTML = states[i].discharged;
                    found = true;
                    break;
                }
            }
            if (!found) {
                Swal.fire({
                    icon: "warning",
                    text: "State Not Found",
                    position: 'bottom-start',
                    toast: 'true',
                    showConfirmButton: false,
                    timer: 1500,
                });
                document.querySelector("#stateName").value = "";
                return;
            }
        })
});

clearbtn.addEventListener("click", ()=>{
    document.getElementById("stateName").value = "";
    document.getElementById("totalCase").innerHTML = "0";
    document.getElementById("deaths").innerHTML = "0";
    document.getElementById("recovered").innerHTML = "0";
})