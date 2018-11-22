jQuery(function($){
    $(function(){
      $('.problem0').on('click', function() {
        if ($(this).prop('checked')){
            // 一旦全てをクリアして再チェックする
            $('.problem0').prop('checked', false);
            $(this).prop('checked', true);
        }
      });
    });
}); 
jQuery(function($){
  $(function(){
    $('.problem1').on('click', function() {
      if ($(this).prop('checked')){
          // 一旦全てをクリアして再チェックする
          $('.problem1').prop('checked', false);
          $(this).prop('checked', true);
      }
    });
  });
}); 
jQuery(function($){
  $(function(){
    $('.problem2').on('click', function() {
      if ($(this).prop('checked')){
          // 一旦全てをクリアして再チェックする
          $('.problem2').prop('checked', false);
          $(this).prop('checked', true);
      }
    });
  });
}); 