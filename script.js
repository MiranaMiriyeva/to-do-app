let usernameElem =  document.getElementById("username");
let useremailElem =  document.getElementById("useremail");
let userpasswordElem =  document.getElementById("userpassword");
let adduserElem =  document.getElementById("adduser");
let editElem = document.getElementById("edit");
let searchElem = document.getElementById("search");
let tbodyElem = document.querySelector("table tbody");
let data = [];
let findedUser;
let id = 0;
let localData = localStorage.getItem("res")
let localId = localStorage.getItem("userId")
if(localData){
    data = JSON.parse(localData)
    theUser(data)
 }
// if(localId) {
//     id = Number(localId)
// }
adduserElem.addEventListener("click",(event) => {
    event.preventDefault()
    
if (usernameElem.value==""||useremailElem.value==""||userpasswordElem.value=="") {
    alert("Please Fix ")
}
else{
    data.push({
        userid: ++id,
        username:  usernameElem.value, 
        useremail:  useremailElem.value, 
        userpassword:  userpasswordElem.value, 
    })}
    theUser(data)
    clear()
    // localStorage.setItem("res",JSON.stringify(data))
    // localStorage.setItem("userId",JSON.stringify(id))

}) 
function deleteuser(param){
    data = data.filter(user => user.userid !== param )
   theUser(data)
//    localStorage.setItem("res",JSON.stringify(data))
//    localStorage.setItem("userId",JSON.stringify(id))
}
function theUser(param){
    tbodyElem.innerHTML= ""
    param.forEach(user=>{
        let id = 0
        tbodyElem.innerHTML += `
        <tr>
         <td scope="row">${user.userid}</td>
        <td>${user.username}</td>
        <td>${user.useremail}</td>
        <td>
            <button class="btn btn-secondary"  onclick="updateuser(${user.userid})">Update</button>
            <button class="btn btn-danger" onclick="deleteuser(${user.userid})">Delete</button>
        </td>
    </tr>`})
}

function updateuser(param){
   findedUser = data.find(user=>user.userid === param)
  usernameElem.value = findedUser.username
  useremailElem.value = findedUser.useremail
  userpasswordElem.value = findedUser.userpassword
  editElem.classList.remove("d-none")
  adduserElem.classList.add("d-none")
}

editElem.addEventListener("click",(event)=>{
    editElem.classList.add("d-none")
    adduserElem.classList.remove("d-none")
    event.preventDefault()
    findedUser.username = usernameElem.value, 
    findedUser.useremail =  useremailElem.value, 
    findedUser.userpassword =  userpasswordElem.value, 
    theUser(data)
    clear()
    // localStorage.setItem("res",JSON.stringify(data))
    // localStorage.setItem("userId",JSON.stringify(id))
})

searchElem.addEventListener("keyup",(event)=>{
let filtered = data.filter(user=>user.username.includes(event.target.value))
theUser(filtered)
// console.log(event.target.value)
})

function clear(){
    usernameElem.value =  "";
    useremailElem.value = "";
    userpasswordElem.value =  ""; 
}
