const form = document.querySelector(".block");
const inputName = document.querySelector(".input-name");
const inputDate = document.querySelector(".input-date");
const inputAddress = document.querySelector(".input-address");
const inputEmail = document.querySelector(".input-email");
const inputPhone = document.querySelector(".input-phone");
const khoahoc =document.querySelector(".khoahoc");


form.addEventListener("submit", (e) => {
	e.preventDefault();
	alert("Đăng kí khóa học thành công");
	const cruser =JSON.parse(localStorage.getItem("currentUser"));
    console.log(cruser);
	const users = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];
    const cuser ={};
	cuser.realname = `${inputName.value}`;
	cuser.birthday = `${inputDate.value}`;
	cuser.address = `${inputAddress.value}`;
	cuser.email = `${inputEmail.value}`;
	cuser.phone = `${inputPhone.value}`;
	cuser.khoahoc = `${khoahoc.value}`;
	console.log(cuser);
	if (cruser!==null){
	const newcurrentuser = {...cruser,...cuser,};
	localStorage.setItem("currentUser", JSON.stringify(newcurrentuser));
	for(i=0;i<users.length;i++){
			
		if(users[i].username == cruser.username){
	users[i].realname=cuser.realname;
	users[i].birthday=cuser.birthday;
	users[i].address=cuser.address;
	users[i].email=cuser.email;
	users[i].phone=cuser.phone;
	users[i].khoahoc=cuser.khoahoc;
};
};
}		

else{
	const userdangki = localStorage.getItem("khachdangki")
		? JSON.parse(localStorage.getItem("khachdangki"))
		: [];
	userdangki.push(cuser);
	localStorage.setItem("khachdangki", JSON.stringify(userdangki));

}
	localStorage.setItem("users", JSON.stringify(users));

	window.location.href = "/project/Home/Home.html";
});
