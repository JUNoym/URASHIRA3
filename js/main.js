"use strict";
{
  const menuitems = document.querySelectorAll(".menu li a");
  const contents = document.querySelectorAll(".content");

  menuitems.forEach((item) => {
    item.addEventListener("click", (e) => {
      //   e.preventDefault();
      menuitems.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      document.getElementById(item.dataset.id).classList.add("active");
    });
  });

  const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "nav.html"; //読み込まれるHTMLを指定
  const nav = document.getElementById("common-nav"); //読み込みたい位置を指定

  xhr.open(method, "/nav.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const restxt = xhr.responseText; //String型で取得
      nav.innerHTML = restxt; //完了
    }
  };
  xhr.send();
}
