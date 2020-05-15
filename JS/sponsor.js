$(document).ready(function () {
    $('.submit').click(function (e) {
        var errcheck = 0;
        let formData = new FormData(form);
        var object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        object["eventName"] = 'DevStack20';
        object["registrationNumber"] ="17BCE2009";
        console.log(object)
        fetch('http://localhost:3000/api/v1/participants/register', {
                method: 'POST',
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(object)
            })
                .then(function (response) {
                    // console.log(response.status);   // Will show you the status
                    if (!response.ok) {
                        if (response.status == 500) {
                            errcheck = 1;
                            throw new Error("HTTP status " + response.status);
                        }
                        else if (response.status == 401) {
                            errcheck = 2;
                            throw new Error("HTTP status " + response.status);
                        }
                        else if (response.status == 406) {
                            errcheck = 3;
                            throw new Error("HTTP status " + response.status);
                        }
                        else if (response.status == 400) {
                            errcheck = 4;
                            throw new Error("HTTP status " + response.status);
                        }
                    } 
                    return response.json();
                })
                .then(
                    success => {
                        // console.log(success)
                        document.getElementById('message').innerHTML = 'We will contact you shortly'
                        document.getElementById('message').style.color = "green"
                        location.href="../index.html"
                    }
                )
                .catch(
                    error => {
                        if (errcheck == 1) {
                            document.getElementById('message').innerHTML = 'Please try again'
                            document.getElementById('message').style.color = "red"
                        }
                    }
                );
                e.preventDefault();
    })
})