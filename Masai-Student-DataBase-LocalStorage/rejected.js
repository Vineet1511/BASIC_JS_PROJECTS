// All the Code for the Rejected page goes here

// All the Code for the Admitted page goes here

//catch the data from Local Storage
let rejectedData = JSON.parse(localStorage.getItem("admission-rejected")) || [];
let tBody = document.querySelector("tbody");

function displayTable(data){            //create common function to create table...so use it to another admitted/rejected

    data.forEach((element) => {
        let tr = document.createElement("tr");  //create new row to append data

        let name = document.createElement("td");
        name.innerText = element.name;

        let phone = document.createElement("td");
        phone.innerText = element.phone;

        let email = document.createElement("td");
        email.innerText = element.email;

        let gender = document.createElement("td");
        gender.innerText = element.gender;

        let course = document.createElement("td");
        course.innerText = element.course;

        tr.append(name, email, course, gender, phone);

        tBody.append(tr);

    });
}

displayTable(rejectedData);