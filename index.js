$(document).ready(function(){
    
    
    $('a').click(function(){
    
       
    
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        });
    });
       
}); 
    

    