// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const flightStatusPara = document.getElementById("flightStatus");
    const shuttleBackgroundcolor = document.getElementById("shuttleBackground");
    const spaceShuttleHeightIncrease = document.getElementById("spaceShuttleHeight");

    takeOffButton.addEventListener("click",function(){
        let answer = confirm("Confirm that the shuttle is ready for takeoff?");
        if(answer == true){
        flightStatusPara.innerHTML = "Shuttle in flight.";
        shuttleBackgroundcolor.style.background = "blue";
        spaceShuttleHeightIncrease.innerHTML = "10000";
        //removeElement(document.getElementById("rocket"));
       // document.getElementByID("rocket").style.visibilty="hidden"; 
        }
      });

      landingButton.addEventListener("click",function(){
         confirm("The shuttle is landing. Landing gear engaged.");
        flightStatusPara.innerHTML = "The shuttle has landed.";
        shuttleBackgroundcolor.style.background = "green";
        spaceShuttleHeightIncrease.innerHTML = "0";
      });

      missionAbortButton.addEventListener("click",function(){
        let answer = confirm("Confirm that you want to abort the mission?");
        if(answer == true){
        flightStatusPara.innerHTML = "Mission aborted.";
        shuttleBackgroundcolor.style.background = "green";
        spaceShuttleHeightIncrease.innerHTML = "0";
        }
      });
      
      document.getElementById("right").addEventListener("click",  function move(e) {
        document.getElementById("rocket").style.position = "relative";
        document.getElementById("rocket").style.left += "30px";
     });

     document.getElementById("left").addEventListener("click",  function move(e) {
        document.getElementById("rocket").style.position = "relative";
        document.getElementById("rocket").style.right += "30px";
     });

     document.getElementById("up").addEventListener("click",  function move(e) {
      document.getElementById("rocket").style.position = "relative";
      document.getElementById("rocket").style.down += "30px";
      spaceShuttleHeightIncrease.innerHTML = "10000";
     });

     document.getElementById("down").addEventListener("click",  function move(e) {
     document.getElementById("rocket").style.position = "relative";
     document.getElementById("rocket").style.top += "30px";
     spaceShuttleHeightIncrease.innerHTML = "0";
     });
       
      
    }

 

    window.addEventListener("load", init);