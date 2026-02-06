
/* Color scheme:

  main color for text #083A4F;
  can be secondary color its grey #4A4A47;
  background color for text #E4E7EB;
  main background #c7b8a2; 

*/

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const on = scrollTop > 80;

  // toggle class on the UL
    document.getElementById("home_nav").classList.toggle("active", on);

  // toggle class on each nav link
    document.querySelectorAll(".nav_single").forEach(link => {
    link.classList.toggle("active", on);
  });
});
