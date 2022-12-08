// fetch 
function LoadDegrees() {
    //assigning a variable to degreeList element in html file (span)
    var degreeList = document.getElementById("degreeList");
    //Fetching the JSON file and adding to console 
    fetch('/my_college_degrees.json').then((response) => {
        console.log('resolved', response);
        return response.json();
    // Adding the JSON file to span element
    }).then(data => {
        degreeList.textContent = JSON.stringify(data, null, 4);
        console.log(data);
    //Error catching
    }).catch((err) => {
        degreeList.textContent = "Error encountered fetching data: " + err;
        console.log('rejected', err);
    });
}
