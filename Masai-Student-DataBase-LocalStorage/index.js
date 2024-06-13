// All the JS Code for the Add Students Page Goes Here

//1. catch the form 
//2. create an object to store data of the form
//3. store the data in Local Storage

 let admission_form = document.querySelector("#form"); //this is also an object

//  let LSData = [];           //for storing differents student data
let LSData = JSON.parse(localStorage.getItem("admission")) || [];   //whenever refreshing webpage...it prevent to restore data in local storage

 admission_form.addEventListener("submit", function(event){
    event.preventDefault(); //this is preventing the form from refreshing.
    
    
    //everything in the DOM, all the elements are in form of Objects....So don't need everytime "querySelector"
    let obj = {
        name : admission_form.name.value,           //id=name; consider as keys
        email : admission_form.email.value,
        phone : admission_form.phone.value,
        gender : admission_form.gender.value,
        course : admission_form.course.value
    }
    // console.log(obj)
    if(obj.name == "" || obj.email == "" || obj.gender == "" || obj.phone == ""){
        alert("Kindly fill all the details carefully!!!")

    }else{

        LSData.push(obj);
        localStorage.setItem("admission", JSON.stringify(LSData)); //save the data to local storage

        alert("Form submitted sucessfully!!!");
        window.location.href = "index.html"
    }
 })