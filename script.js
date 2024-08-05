


const person = {
    firstname: "John",
    lastname: "Doe",
    dob: "1990-01-01"
};


function displayPersonInfo(person) {
    document.getElementById('firstname').textContent = person.firstname;
    document.getElementById('lastname').textContent = person.lastname;
    document.getElementById('dob').textContent = person.dob;
}


displayPersonInfo(person);

