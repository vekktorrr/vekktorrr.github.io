
$(document).ready(function(){

    let options = {threshold: [1.0]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) =>{
    observer.observe(el);
   });
    
    
    function onEntry (entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.add('show-animation');
                
            }
        });
    }
   
  

  
    
  $('.image-link').magnificPopup({type:'image'});
});
    
 $(window).scroll(() => {
    
     let scrollDistance = $(window).scrollTop();
    $("section").each((i, el) => {
        if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            }); 
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
     
});

    
    

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top + "px"});
});

    


   
        let sum = 0;
       
        $("#display_block31").on("change", function(){
             sum = sum + $(this).val(); 
    });

 
$("#display_block32").on("change", function(){
             sum = sum + $(this).val(); 
    });


       
        $("#display_block33").on("change", function(){
             sum = sum + $(this).val(); 
    }); 





$(document).ready(function(){
    new WOW().init();
});

$(document).ready(function(){
    $("#EmailYo").mask("*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]"),
                greedy: false,
                clearMaskOnLostFocus: false ;
    
    $('form').submit(function(event){
       
        if($("#EmailYo").val() == "" ){
            event.prenetDefault();
            alert("Введите email");
        }
    });
});