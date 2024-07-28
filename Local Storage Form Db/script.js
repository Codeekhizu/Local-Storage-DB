var subbtn = document.getElementById("btnsubmit");
        subbtn.addEventListener('click', function() {
            var firstname = document.getElementById("fname").value;
            var lastname = document.getElementById("lname").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("pass").value;

            var obj = {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password
            };

            var users = JSON.parse(localStorage.getItem("userDetails")) || [];
            users.push(obj);
            localStorage.setItem("userDetails", JSON.stringify(users));

            displayUserData();
            clearForm();
        });

        function displayUserData() {
            var users = JSON.parse(localStorage.getItem("userDetails")) || [];
            var tableBody = document.querySelector("#table1 tbody");
            tableBody.innerHTML = "";

            users.forEach(function(user) {
                var row = tableBody.insertRow();
                row.insertCell().textContent = user.firstName;
                row.insertCell().textContent = user.lastName;
                row.insertCell().textContent = user.email;
                row.insertCell().textContent = user.password;
            });
        }

        function clearForm() {
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pass").value = "";
        }

        var bremove = document.getElementById('btnremove');
        bremove.addEventListener('click', function() {
            localStorage.removeItem("userDetails");
            displayUserData(); // to refresh the table after removing data
        });

        // Ensure displayUserData runs when the page loads
        window.addEventListener("load", function() {
            displayUserData();
        });