console.log("i am from js file");
// var button = document.getElementById("button");
var entryForm = document.getElementById("entryForm");
var entries = document.getElementById("entries");
var entryTextbox = document.getElementsByClassName("entry-textbox");
var entriesNav = document.querySelector(".entries-nav");

var count=0;
function renderNewList (event) {
    event.preventDefault();
    console.log("i am clicked");
    console.log(entryTextbox[0].value);
    var newEntry = document.createElement("div");
   
    ///
    newEntry.classList.add("single-entry")
    newEntry.textContent = entryTextbox[0].value;
    newEntry.style.display ="none";
    entries.appendChild(newEntry);
    entryTextbox[0].value = "";

     //create new button to show the entry;
     var displayEntryButton = document.createElement("button");
     displayEntryButton.classList.add ("display-entry-button");
     
     count++;
     displayEntryButton.textContent = count;
     entriesNav.append(displayEntryButton);
    //  console.log(newEntry);
    //  console.log(displayEntryButton);
    
  displayEntryButton.addEventListener("click", function(e){
      e.preventDefault();
      console.log("i am clicke");
     
      var allEntries = document.querySelectorAll(".single-entry")
      console.log(allEntries);
     
      
 //for loop
 for (var i = 0; i < allEntries.length; i++) {
    console.log(allEntries[i]);
  //   newEntry[i].display = "none";
  allEntries[i].style.display = "none";
  
}
newEntry.style.display = "block";


  })
}
// console.log(entryTextbox[0]);
entryForm.addEventListener("submit", renderNewList);