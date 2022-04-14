const nameu = document.querySelector(".name");
const pass =document.querySelector(".pass");
const bday =document.querySelector(".bday");
const address =document.querySelector(".address");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const khoahoc = document.querySelector(".khoahoc");
const cuser = JSON.parse(localStorage.getItem("currentUser"));

pass.innerHTML = `${cuser.password}`;
if(cuser.realname!==``){nameu.innerHTML=cuser.realname};
if(cuser.birthday!==``){bday.innerHTML=cuser.birthday};
if(cuser.address!==``){address.innerHTML=cuser.address};
if(cuser.email!==``){email.innerHTML=cuser.email};
if(cuser.phone!==``){phone.innerHTML=cuser.phone};
if(cuser.khoahoc!==``){khoahoc.innerHTML=cuser.khoahoc}

const menubtn = document.querySelector(".menucol");
const headermenu = document.querySelector(".header-center");

menubtn.addEventListener("click", () => {
  headermenu.classList.toggle("options-active");
});

const loging = document.querySelector("#login");
const logou = document.querySelector(".logout");
console.log(loging);
console.log(cuser);
if (cuser!==``){
loging.innerHTML=`${cuser.username}`;
loging.setAttribute("href","/project/InforUser/InforUser.html");
logou.classList.add("logout-active");}

const logout = document.querySelector(".logoutbtn");
logout.onclick = () =>{
  localStorage.removeItem(`currentUser`);
  window.location.href = "/project/Home/Home.html";
}
