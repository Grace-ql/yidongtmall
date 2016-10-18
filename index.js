$(function(){
   $('.header-gengduo').on('click',function(){
       $('.tab').addClass('zuochu').removeClass('zuohui');
       $('.fanhui').addClass('zuochu').removeClass('zhohui');
   })

})
$(document).on('click','.fanhui',function(){
    $('.tab').addClass('zuohui').removeClass('zuochu');
    $('.fanhui').addClass('zuohui').removeClass('zuochu');
})
$('.right').eq(0).css('display','block');
$(document).on('click','.tit',function(){
    $('.tit').removeClass('bg')
   $(this).addClass('bg');
    $('.right').removeClass('active');
    $('.right').eq( $(this).index() ).addClass('active');
})