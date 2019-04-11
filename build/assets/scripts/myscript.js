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
});