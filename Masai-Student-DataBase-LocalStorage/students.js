// All the Code for All Students Page Goes Here

// 1. get data from the local Storage. 
// 2. catch the table-tbody from html page. 
// 3. append data to the table. 
// 4. create admitted data. 
// 5. create rejected data. 
// 6. delete data from old admission data. 
// 7. create a filter function. 
// 8. display data.

let LSData = JSON.parse(localStorage.getItem("admission")) || [];     //this is an array format
let tBody = document.querySelector("tbody");
let filter = document.querySelector("#filter");

function displayTable(data){            //create common function to create table...so use it to another admitted/rejected
    tBody.innerHTML = "";
    data.forEach((element, index) => {
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

        let accept = document.createElement("td");
        accept.innerText = "Accept";
        accept.style.backgroundColor = "green";
        accept.style.cursor = "pointer";
        accept.addEventListener("click", function(){        //stored accept element/row to Local storage
            addData("admission-accepted", element);          //key:= "admission-accepted", Value:- element(or current row)
            deleteData(LSData, index);
            window.location.href = "admitted.html"
        })

        let reject = document.createElement("td");
        reject.innerText = "Reject";
        reject.style.backgroundColor = "red";
        reject.style.cursor = "pointer";
        reject.addEventListener("click", function(){        //stored reject element/row to Local storage
            addData("admission-rejected", element);     //key:= "admission-rejected", Value:- element(or current row)
            deleteData(LSData, index);
            window.location.href = "rejected.html"
        })

        tr.append(name, email, course, gender, phone, accept, reject);

        tBody.append(tr);

    });
}

//function---->click on accept then do to accept.html and click on reject will go to reject.html
function addData(key, value){
    let newLSData = JSON.parse(localStorage.getItem(key)) || [];        //key = "admission-accepted" / "admission-rejected"
    newLSData.push(value);      //selected row
    localStorage.setItem(key, JSON.stringify(newLSData));
}

//delete the data once accepted/rejected
function deleteData(data, index){
    data.splice(index, 1);      //splice(start, end) ------->1=only one row
    localStorage.setItem("admission", JSON.stringify(data));     //delete from admissiom page 
    displayTable(data);
}

filter.addEventListener('change', ()=>{
    if(filter.value == "" || filter.value == "all"){
        displayTable(LSData);
    }else{
        let filteredData = LSData.filter((el)=>{
            return el.course === filter.value;          //filtered according to the course
        })
        displayTable(filteredData);
    }
})

displayTable(LSData);