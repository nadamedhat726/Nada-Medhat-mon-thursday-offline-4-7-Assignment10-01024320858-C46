var bookmarkNameInput = document.getElementById('bookMarkName');
var WebsiteURLInput = document.getElementById('bookMarkURL');
var tableContent = document.getElementById('tableContent');
var boxButton=document.getElementById("allwindow");

var sitedata;
if (localStorage.getItem('site') != null) {
    sitedata = JSON.parse(localStorage.getItem('site'));
    displaycontent(sitedata);
} else {
   var sitedata = []
}


function submit() {
    console.log("Name input:", bookmarkNameInput);
console.log("URL input:", WebsiteURLInput);
    // validate both inputs
    if (validateForm(bookmarkNameInput) && validateForm(WebsiteURLInput)) {
        var site = {
            name: bookmarkNameInput.value.trim(),
            link: WebsiteURLInput.value.trim()
        };

        sitedata.push(site);
        console.log(sitedata);

        clear();
        localStorage.setItem('site', JSON.stringify(sitedata));
        displaycontent();
    } else {
        // show warning box
        boxButton.classList.remove("d-none");
    }
}



// function submit() {
//     if(validateForm(bookmarkNameInput)&&validateForm(WebsiteURLInput)){
//     var site = {
//         name: bookmarkNameInput.value,
//         link: WebsiteURLInput.value
//     };
//     sitedata.push(site)
//     console.log(sitedata);
//     clear();
//     localStorage.setItem('site', JSON.stringify(sitedata))
//     displaycontent();
// }else{
//     boxButton.classList.remove("d-none")
// }
// }

function clear() {
    bookmarkNameInput.value= null;
    WebsiteURLInput.value = null;
    bookmarkNameInput.classList.remove('is-valid', 'is-invalid');
    WebsiteURLInput.classList.remove('is-valid', 'is-invalid');
}

function displaycontent() {
    var box = ''
    for (var i = 0; i < sitedata.length; i++) {
        box += `<tr>
                    <th class="index">${[i + 1]}</th>
                    <th class="name">${sitedata[i].name}</th>
                    <th ><button onclick="visitsite(${i})" class="btn btn-success visit"><i class="fa-solid fa-eye pe-1"></i>Visit</button></th>
                    <th><button onclick="deletecontent(${i})" class="btn btn-danger delete"><i class="fa-solid fa-trash-can"></i> Delete</button></th>
                </tr>`
    }
    tableContent.innerHTML = box;
}

function deletecontent(deleteIndex) {
    // console.log(deleteIndex);
    sitedata.splice(deleteIndex, 1)
    localStorage.setItem('site', JSON.stringify(sitedata))
    displaycontent(sitedata);
}

function visitsite(index){
var URL=sitedata[index].link
console.log(URL)
window.open(URL, "_blank");
}

function validateForm(element){
var regex={
    bookMarkURL:/^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})$/,
    bookMarkName:/^([a-zA-Z0-9.-]+)$/
}
if(regex[element.id].test(element.value)){
    element.classList.add('is-valid');
    element.classList.remove('is-invalid')
    return true
}else{
    element.classList.add('is-invalid');
    element.classList.remove('is-valid')
    return false
}
}

function closebtn(){
boxButton.classList.add("d-none")
}







































// var line=document.getElementById('line')

// var rowData;
// if (localStorage.getItem('data') != null) {
//     rowData = JSON.parse(localStorage.getItem('data'));
//     displayproduct(rowData);
// } else {
//     rowData = []
// }


// function submit() {
//     var data = {
//         name : bookmarkNameInput.value,
//         link : WebsiteURLInput.value
//     }
//     rowData.push(data)
//     console.log(rowData);
//     clearform();
//     displaydata(rowData);
// }



// function displaydata(){
//     var cartoona = ''
//     for (var i = 1; i < arr.length; i++) {
//     cartoona += `
//     <table class="mt-4 text-center table">
//                 <thead>
//                     <tr>
//                         <th>${arr[i]} </th>
//                         <th>${arr[i.name]} </th>
//                         <th><button onclick="visit(${i})" class="btn-submit btn  btn-col px-5">visit</button></th>
//                         <th><button onclick="Delete(${i})" class="btn-submit btn  btn-col px-5">delete</button></th>
//                     </tr>
//                 </thead>
//                 <tbody id="tableContent"></tbody>
//             </table>
//             `
//     }

// }