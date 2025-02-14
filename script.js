document.querySelector("#form1").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        let first = document.querySelector("#fname").value.trim();
        let last = document.querySelector("#lname").value.trim();
        
        if (first !== "" && last !== "") {
            alert(`${first} ${last}`);
        }
        else (alert("enter valid inputs!"))
    });
