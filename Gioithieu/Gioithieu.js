const imgsg = document.querySelector(".imgsg");
const btnmap =document.querySelectorAll(".mapsg");
const mapAll = document.querySelector(".mAll");
const mapA = document.querySelector(".mA");
const mapB = document.querySelector(".mB");
const mapC = document.querySelector(".mC");
const mapD = document.querySelector(".mD");
console.log(btnmap);

mapAll.onclick = () =>{
    imgsg.setAttribute("src","https://tansonnhatgolf.vn/pictures/catalog/golf/master.png")
    for(i=0;i<btnmap.length;i++){
        btnmap[i].classList.remove("mapnow");
    }
    mapAll.classList.add("mapnow");
}
mapA.onclick = () =>{
    imgsg.setAttribute("src","https://tansonnhatgolf.vn/pictures/catalog/golf/golf-a.png")
    for(i=0;i<btnmap.length;i++){
        btnmap[i].classList.remove("mapnow");
    }
    mapA.classList.add("mapnow");
}
mapB.onclick = () =>{
    imgsg.setAttribute("src","https://tansonnhatgolf.vn/pictures/catalog/golf/golf-b.png")
    for(i=0;i<btnmap.length;i++){
        btnmap[i].classList.remove("mapnow");
    }
    mapB.classList.add("mapnow");
}
mapC.onclick = () =>{
    imgsg.setAttribute("src","https://tansonnhatgolf.vn/pictures/catalog/golf/golf-c.png")
    for(i=0;i<btnmap.length;i++){
        btnmap[i].classList.remove("mapnow");
    }
    mapC.classList.add("mapnow");
}
mapD.onclick = () =>{
    imgsg.setAttribute("src","https://tansonnhatgolf.vn/pictures/catalog/golf/golf-d.png")
    for(i=0;i<btnmap.length;i++){
        btnmap[i].classList.remove("mapnow");
    }
    mapD.classList.add("mapnow");
}

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
