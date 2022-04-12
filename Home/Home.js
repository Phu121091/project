const menubtn = document.querySelector(".menucol");
const headermenu = document.querySelector(".header-center");

menubtn.addEventListener("click", () => {
  headermenu.classList.toggle("options-active");
});

const loging = document.querySelector("#login");
const logou = document.querySelector(".logout");
console.log(loging);
const cuser = JSON.parse(localStorage.getItem("currentUser"));
console.log(cuser);
if (cuser!==``){
loging.innerHTML=`${cuser.username}`;
loging.setAttribute("href","/project/InforUser/InforUser.html");
logou.classList.add("logout-active");}

const logout = document.querySelector(".logoutbtn");
logout.onclick = () =>{
  localStorage.removeItem(`currentUser`);
  location.reload();
}