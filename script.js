document.querySelector("#form1").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        let first = document.querySelector("input[name='fname']").value.trim();
        let last = document.querySelector("input[name='lname']").value.trim();
        
        if (first !== "" && last !== "") {
            alert(`${first} ${last}`);
        }
        else (alert("enter valid inputs!"))
    });
