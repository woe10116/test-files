$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .nav_menu').toggleClass('active');
    });
    });

    let pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page");
    let navItem = document.querySelector(`[data-id-nav=${pageId}]`);
    if(pageId == 'main'){
        navItem.classList.add("active-desktop-main");
        navItem.classList.remove('no-active');
        let SvgItem = document.querySelector('#svg').style.stroke = "#43E8FF";
    }
else if(pageId == navItem.getAttribute("data-id-nav")) {
    navItem.classList.add("active-desktop-link");
    navItem.classList.remove('no-active');
    document.querySelector(`[data-id-svg =${pageId}]`).style.stroke = "#23273A";
    navItem.closest('div').style.background = "radial-gradient(133.33% 2508.35%, #32E6FF 0%, rgba(0, 255, 209, 0.81) 100%) #43E8FF"
   
}
$(document).ready(function(){
    
    $('.spoiler__title').click(function(event){
        $(this).parent().find('.spoiler-content').slideToggle(300);
        $(this).find('.document-spoiler').slideToggle(300);
      $(this).toggleClass('active');

    });
  });
  $("#datepicker").mask("99.99.9999 - 99.99.9999");

document.querySelector("#MyInput").onkeyup = function () {
  
      
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("MyInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("MyTable");
    
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
