let usernameElem =  document.getElementById("username")
let useremailElem =  document.getElementById("useremail")
let userpasswordElem =  document.getElementById("userpassword")
let adduserElem =  document.getElementById("adduser")
let tbodyElem = document.querySelector("table tbody")
let data = []
let id = 0
adduserElem.addEventListener("click",(event) => {
    event.preventDefault()
    data.push({
        userid: ++id,
        username:  usernameElem.value, 
        useremail:  useremailElem.value, 
        userpassword:  userpasswordElem.value, 
    })
    theUser()
}) 
function deleteuser(param){
    data = data.filter(user => user.userid !== param )
    console.log("asdfghj");
   theUser()
}
function theUser(){
    tbodyElem.innerHTML= ""
    data.forEach(user=>{
        let id = 0
        tbodyElem.innerHTML += `
        <tr>
         <td scope="row">${user.userid}</td>
        <td>${user.username}</td>
        <td>${user.useremail}</td>
        <td>
            <button class="btn btn-secondary" id="updateuser">Update</button>
            <button class="btn btn-danger" onclick="deleteuser(${user.userid})">Delete</button>
        </td>
    </tr>`})
}

let udelem = document.getElementById("updateuser")
udelem.addEventListener("click",() => {
    console.log("dfghjkl")
    // if(param=user.userid){
    //     usernameElem.value =  user.username  
    //     useremailElem.value = user.useremail 
    //     userpasswordElem.value =  user.userpassword 
    //   }
    //   theUser()
      }
)


// function updateuser(param){
// if(param=user.userid){
//   usernameElem.value =  user.username  
//   useremailElem.value = user.useremail 
//   userpasswordElem.value =  user.userpassword 
// }
// theUser()
// }