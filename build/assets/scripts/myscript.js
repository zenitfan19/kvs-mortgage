$(document).ready(function () {   
          $(document).on('click', '.mortgage-container-row', function () {
            var block = $(this).closest('.mortgage-container-row');
            var blockId = block.index();
            if(blockId != 0) {
              $('.mortgage-container-row').not($('.mortgage-container-row').eq(blockId)).removeClass('active');  
            if(!block.hasClass('active')) {
              block.addClass('active');
              block.find('.mortgage-container-row-container').each(function() {
                $(this).addClass('animated fadeInUp');
              });
            } 
            }                                     
      });  
      $(document).on('click', '.plus-icon', function () {        
        var block = $(this).closest('.mortgage-container-row');
        var blockId = block.index();
        if(blockId != 0) {
          $('.mortgage-container-row').not($('.mortgage-container-row').eq(blockId)).removeClass('active');  
        if(!block.hasClass('active')) {
          block.addClass('active');
          block.find('.mortgage-container-row-container').each(function() {
            $(this).addClass('animated fadeInUp');
          });
        } else {          
          setTimeout(function() { block.removeClass('active'); }, 10);          
        } 
        }                                     
  });
  $(document).on('click', '.mortgage-container-row-container', function () {
    window.location.href = $(this).data('link');                                     
});
  $('.mortgage-description-head').closest('.content').find('.breadcrumbs').css('background', 'rgba(41,157,55,0.15)');

  var button = $(".mortgage-description-info").find('.mortgage-description-info-column').eq(0);  
  var button_height = $('.mortgage-description-other').offset().top - 175;          
  $(window).scroll(function(){
            if($(window).width()<768) {              
              if ( $(this).scrollTop() >= button_height - $('.mortgage-description-other').height()){                
                button.css('position', 'absolute').css('top', button_height).css('bottom', 'unset');
            } else if($(this).scrollTop() < button_height - $('.mortgage-description-other').height()) {
                button.css('position', 'fixed').css('bottom', '115px').css('top', 'unset');
            }
            }
  });


});