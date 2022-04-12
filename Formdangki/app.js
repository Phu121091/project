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
	// inputName.value = "";
	// inputDate.value = "";
	// inputAddress.value = "";
	// inputEmail.value = "";
	// inputPhone.value = "";
	const cuser = JSON.parse(localStorage.getItem("currentUser"));
if (cuser!==``){
	cuser.realname = `${inputName.value}`;
	cuser.birthday = `${inputDate.value}`;
	cuser.address = `${inputAddress.value}`;
	cuser.email = `${inputEmail.value}`;
	cuser.phone = `${inputPhone.value}`;
	cuser.khoahoc = `${khoahoc.value}`;
	localStorage.setItem("currentUser", JSON.stringify(cuser));
	const users = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];
		for(i=0;i<users.length;i++){
			if(users[i].username == cuser.username){		
		// users[i].password= cuser.password;
		users[i].realname=cuser.realname;
		users[i].birthday=cuser.birthday;
		users[i].address=cuser.address;
		users[i].email=cuser.email;
		users[i].phone=cuser.phone;
		users[i].khoahoc=cuser.khoahoc;

		
	};}
	localStorage.setItem("users", JSON.stringify(users));
}
	window.location.href = "/project/home/Home.html";
});