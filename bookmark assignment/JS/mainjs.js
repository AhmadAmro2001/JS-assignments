var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var sitesGroup=[];
var updatedIndex ;
var searchText = document.getElementById("searchInput")


if(localStorage.getItem("websites") != null){
    sitesGroup = JSON.parse(localStorage.getItem("websites"))
    displayWeb(sitesGroup);
}

var submitBtn = document.getElementById("submitBtn");
var updateBtn = document.getElementById("updateBtn");

submitBtn.addEventListener("click" ,addWeb )

function addWeb(){
    // console.log("hello");
    // website = {
    //     name: siteName.value ,
    //     url: siteUrl.value
    // }

    // sitesGroup.push(website);
    // localStorage.setItem("websites" , JSON.stringify(sitesGroup))
    // console.log(sitesGroup);
    // displayWeb(sitesGroup)
    // clearInput();
    if (validateInput() == true) {
        website = {
            name: siteName.value,
            url: siteUrl.value
        }
        sitesGroup.push(website)
        localStorage.setItem("Websites", JSON.stringify(sitesGroup))
        clearInput()
        console.log(sitesGroup);
        displayWeb(sitesGroup)
    } else {
        openModal()
    }
}

function clearInput(){
    siteName.value = null;
    siteUrl.value = null
}


function displayWeb(x){
    var cartona = ``
    for(i = 0; i< x.length ; i++){
        var oIndex = sitesGroup.indexOf(x[i])
        cartona += ` 
        <tr>
        <th>${i + 1}</th>
        <th>${x[i].name}</th>
        <th><button onclick="visitWeb('${x[i].url}')" class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</button></th>
        <th><button onclick="getUpdateYouWant(${oIndex}) " class="btn btn-warning"><i class="fa-solid fa-eye"></i> Update</button></th>
        <th><button onclick="deleteWeb(${oIndex})" class="btn btn-danger"><i class="fa-solid fa-eye"></i> Delete</button></th>
        </tr>
        `
    }
    document.getElementById("t-body").innerHTML = cartona ;
}


function deleteWeb(index){
    sitesGroup.splice(index , 1);
    localStorage.setItem("websites", JSON.stringify(sitesGroup));
    displayWeb(sitesGroup);
}


function visitWeb(url){
    window.open(url)
}

function getUpdateYouWant(index){
    siteName.value = sitesGroup[index].name 
    siteUrl.value = sitesGroup[index].url
    
    // concept el kobryyyy!!!!
    submitBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");
    updatedIndex = index ; 
}

updateBtn.addEventListener("click" , updateWeb)
function updateWeb(){
    sitesGroup[updatedIndex].name = siteName.value;
    sitesGroup[updatedIndex].url = siteUrl.value;
    displayWeb(sitesGroup)
    localStorage.setItem("websites" , JSON.stringify(sitesGroup))
    submitBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
    clearInput()
}

searchText.addEventListener("input", searchWeb)
function searchWeb(){
    var term = searchText.value;
    var newArray = [];
    for (let i = 0; i < sitesGroup.length; i++) {
        if(sitesGroup[i].name.toLowerCase().includes(term.toLowerCase()))
        newArray.push(sitesGroup[i])
    }
    displayWeb(newArray)
}



function validateInput(){
    var siteNameRegex= /^[0-9]*[a-zA-Z]{3,}[0-9]*$/
    var siteUrlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/

    if(siteNameRegex.test(siteName.value) == false){
        return false
    }else if(siteUrlRegex.test(siteUrl) == false){
        return false
    }
    return true ;
}
var modal = document.getElementById("exampleModal")
var closeBtn = document.getElementById("closeBtn")

closeBtn.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.add("d-none")
}

function openModal() {
    modal.classList.remove("d-none")
}

