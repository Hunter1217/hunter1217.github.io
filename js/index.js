// window.onscroll = function() {scrollFunction()};



/* Color scheme:

  main color for text #083A4F;
  can be secondary color its grey #4A4A47;
  background color for text #E4E7EB;
  main background #c7b8a2; 

*/


// function scrollFunction(){
//     if(document.body.scrollTop > 50 ||
//         document.documentElement.scrollTop > 50){
//             document.getElementById("nav_bar").style.backgroundColor = "#083A4F";
//             document.querySelectorAll(".nav_single").forEach(link => {
//                 link.style.color = "#E4E7EB";
//                 link.style.backgroundColor = "#4A4A47";
//             });
//         }
//     else{
//         document.getElementById("nav_bar").style.backgroundColor = "#c7b8a2";
//         document.querySelectorAll(".nav_single").forEach(link => {
//                 link.style.backgroundColor = "#E4E7EB";
//                 link.style.color = "#083A4F";
//         })
//     }
// }

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const on = scrollTop > 400;

  // toggle class on the UL
    document.getElementById("home_nav").classList.toggle("active", on);

  // toggle class on each nav link
    document.querySelectorAll(".nav_single").forEach(link => {
    link.classList.toggle("active", on);
  });
});
