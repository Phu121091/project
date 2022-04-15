const gridtintuc = document.querySelector(".gridtintuc");

const bangtin = [
  {
    id: 0,
    tittle: `Golfer 14 tuổi vô địch Tiền Phong Golf Championship 2021`,
    content: `<a href="/project/Tintuccontent/Tintuccontent0.html" class="linktintuc">
    <div class="imgdiv"><img src="https://th.bing.com/th/id/OIP.o6HCSZtE1EkRJzCxqUkVsgHaFj?pid=ImgDet&rs=1" alt="" class="imgtt"></div> 
     <h5 class="tittle">Golfer 14 tuổi vô địch Tiền Phong Golf Championship 2021</h5>
 </a>`,
  },
  {
    id: 1,
    tittle: `Cặp kè đại gia U60, Hiền Hồ tổn thất nặng nề: Sụp đổ hình tượng, tẩy
    chay, huỷ show`,
    content: `<a href="/project/Tintuccontent/Tintuccontent1.html" class="linktintuc">
    <div class="imgdiv"><img src="https://ttol.vietnamnetjsc.vn/images/2022/03/21/20/27/hien-ho-choi-golf-5.jpg" alt="" class="imgtt"></div>
    <h5 class="tittle">Cặp kè đại gia U60, Hiền Hồ tổn thất nặng nề: Sụp đổ hình tượng, tẩy
        chay, huỷ show</h5>
</a>`,
  },
  {
    id: 2,
    tittle: `Xu hướng nữ giới chơi golf: “Săn” đại gia hay tìm niềm kiêu hãnh trong những cú swing?`,
    content: `<a href="/project/Tintuccontent/Tintuccontent2.html" class="linktintuc">
    <div class="imgdiv"><img src="https://th.bing.com/th/id/R.f9b892e2b1032bfaa23cf385c4d50269?rik=JaSLybhaPJtceQ&pid=ImgRaw&r=0" alt="" class="imgtt"></div>
    <h5 class="tittle">Xu hướng nữ giới chơi golf: “Săn” đại gia hay tìm niềm kiêu hãnh trong những cú swing?</h5>
</a>`,
  },
  {
    id: 3,
    tittle: `Bryson DeChambeau golf hàng đầu thế giới từng chơi golf rất tệ`,
    content: `<a href="/project/Tintuccontent/Tintuccontent3.html" class="linktintuc">
      <div class="imgdiv"><img src="https://golftimes.vn/wp-content/uploads/2021/12/hinh-anh-golf-hang-dau-the-gioi-1.jpg" alt="" class="imgtt"></div>
      <h5 class="tittle">Bryson DeChambeau golf hàng đầu thế giới từng chơi golf rất tệ</h5>
  </a>`,
    area:0,
  },
    {
    id: 4,
    tittle: `Ai là người giữ kỷ lục Hole-in-one ở Việt Nam?`,
    content: `<a href="/project/Tintuccontent/Tintuccontent4.html" class="linktintuc">
      <div class="imgdiv"><img src="https://golftimes.vn/wp-content/uploads/2018/05/nguoi-giu-ky-luc-hole-in-one-viet-nam.jpg" alt="" class="imgtt"></div>
      <h5 class="tittle">Ai là người giữ kỷ lục Hole-in-one ở Việt Nam?</h5>
  </a>`,
  },
  {
    id: 5,
    tittle: `Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt`,
    content: `<a href="/project/Tintuccontent/Tintuccontent5.html" class="linktintuc">
      <div class="imgdiv"><img src="https://golftimes.vn/wp-content/uploads/2022/03/hinh-anh-hien-ho-choi-golf-1.jpg" alt="" class="imgtt"></div>
      <h5 class="tittle">Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt</h5>
  </a>`,
  },
  {
    id: 6,
    tittle: `Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt`,
    content: `<a href="/project/Tintuccontent/Tintuccontent5.html" class="linktintuc">
        <div class="imgdiv"><img src="https://golftimes.vn/wp-content/uploads/2022/03/hinh-anh-hien-ho-choi-golf-1.jpg" alt="" class="imgtt"></div>
        <h5 class="tittle">Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt</h5>
    </a>`,
  },
  {
    id: 7,
    tittle: `Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt`,
    content: `<a href="/project/Tintuccontent/Tintuccontent5.html" class="linktintuc">
            <div class="imgdiv"><img src="https://golftimes.vn/wp-content/uploads/2022/03/hinh-anh-hien-ho-choi-golf-1.jpg" alt="" class="imgtt"></div>
            <h5 class="tittle">Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt</h5>
        </a>`,
  },
  {
    id: 8,
    tittle: `Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt`,
    content: `<a href="/project/Tintuccontent/Tintuccontent5.html" class="linktintuc">
                <div class="imgdiv"><img src="https://golftimes.vn/wp-content/uploads/2022/03/hinh-anh-hien-ho-choi-golf-1.jpg" alt="" class="imgtt"></div>
                <h5 class="tittle">Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt</h5>
            </a>`,
  },
  {
    id: 9,
    tittle: `Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt`,
    content: `<a href="/project/Tintuccontent/Tintuccontent5.html" class="linktintuc">
                    <div class="imgdiv"><img src="https://golftimes.vn/wp-content/uploads/2022/03/hinh-anh-hien-ho-choi-golf-1.jpg" alt="" class="imgtt"></div>
                    <h5 class="tittle">Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt</h5>
                </a>`,
  },
  {
    id: 10,
    tittle: `Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt`,
    content: `<a href="/project/Tintuccontent/Tintuccontent5.html" class="linktintuc">
                        <div class="imgdiv"><img src="https://golftimes.vn/wp-content/uploads/2022/03/hinh-anh-hien-ho-choi-golf-1.jpg" alt="" class="imgtt"></div>
                        <h5 class="tittle">Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt</h5>
                    </a>`,
  },
  {
    id: 11,
    tittle: `Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt`,
    content: `<a href="/project/Tintuccontent/Tintuccontent5.html" class="linktintuc">
                            <div class="imgdiv"><img src="https://golftimes.vn/wp-content/uploads/2022/03/hinh-anh-hien-ho-choi-golf-1.jpg" alt="" class="imgtt"></div>
                            <h5 class="tittle">Điểm Danh Top 5 Tay Golf Nữ HOT Nhất Trong Showbiz Việt</h5>
                        </a>`,
  },
];

//hàm tìm kiếm
const searchvalue = document.querySelector(".searchinput");
const search = document.querySelector(".search");
const findmenu = document.querySelector(".findmenu");
const kqtk = document.querySelector(".kqtk");

search.onclick = () => {
  const a = searchvalue.value.toLowerCase().trim();
  if (a!==``){
  kqtk.classList.add("Active");
    findmenu.innerHTML = ``;
    bangtin.map((d)=>{
      if ((d.tittle.toLowerCase().trim()).includes(a)) {
         const finded = document.createElement("h5");
        finded.innerHTML = `<a href="/project/Tintuccontent/Tintuccontent${d.id}.html">${d.tittle}`;
        findmenu.appendChild(finded);
    }
  });
  if(findmenu.innerHTML==``){findmenu.innerHTML=`Không tìm thấy kết quả phù hợp`}
}
};

//tin tức mới
const menunews = document.querySelector(".menunews");
bangtin.slice(0,3).map((d)=>{
    const newnew = document.createElement("h5");
    newnew.innerHTML = `<a href="/project/Tintuccontent/Tintuccontent${d.id}.html" class="linktintuc">${d.tittle}`;
    menunews.appendChild(newnew);
});


const tintuccontainer = document.querySelector(".tintuccontainer");
const pageContainer = document.querySelector(".page-container");
const rendertintuc = (start, end,tin) => {
  tintuccontainer.innerHTML=``;
  tin.slice(start, end).map((d) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("tintuc");
    imageWrapper.innerHTML = `
             ${d.content}
          `;

    tintuccontainer.appendChild(imageWrapper);
  });
};

const renderPageBtn = (a) => {
  pageContainer.innerHTML=``;
  const pages = a.length / 6;
  for (let i = 1; i <= Math.ceil(pages); i++) {
    const btn = document.createElement("span");
    btn.classList.add("button");
    if (i === 1) {
      btn.classList.add("button-active");
    }
    btn.innerHTML = i;
    pageContainer.appendChild(btn);
  }
  const btns = document.querySelectorAll(".button");

  btns.forEach((button) => {
    button.addEventListener("click", () => {
      btns.forEach((b) => {
        b.classList.remove("button-active");
      });
      button.classList.add("button-active");

      const position = button.innerHTML;
      tintuccontainer.innerHTML = "";
      rendertintuc(Number(position * 6) - 6, Number(position * 6),a);
    });
  });
};

const menutinTG =[];
const menutinVN =[];
for(i=0;i<bangtin.length;i++){
  if (bangtin[i].area == 0){
    menutinTG.push(bangtin[i]);
  }
  else menutinVN.push(bangtin[i]);
}
console.log(menutinTG);
console.log(menutinVN);
const tinTGbtn = document.querySelector(".newworld");
const tinVNbtn = document.querySelector(".newVN");
tinTGbtn.onclick=()=>{
  window.location.href = "/project/Tintuc/TinTG.html";
}

tinVNbtn.onclick=()=>{
  window.location.href = "/project/Tintuc/TinVN.html";
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
rendertintuc(0, 6,menutinVN);
renderPageBtn(menutinVN);
