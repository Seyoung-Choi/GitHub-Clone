// (function(window,document){
//     'use strict';

//     const $toggles=document.querySelectorAll('.toggle');
//     const $toggleBtn=document.getElementById('toggle-btn');

//     // 특정 버튼을 클릭 하는것= 이벤트, addEventListener로 이벤트를 감지하겠다
//     $toggleBtn.addEventListener('click',function(){
//         // 토글버튼을 클릭할때 마다 함수가 실행됨
//         toggleElements();
//     });

//     window.addEventListener('resize',function(){
//         // console.log("Resized");
//         if(window.innerWidth>1024){
//             offElements();
//         }
//     });

//     function toggleElements(){
//         // 유사배열 반복
//         [].forEach.call($toggles, function(toggle){
//             toggle.ClassList.toggle('on');
//         });
//     }

//     function offElements(){
//         [].forEach.call($toggles, function(toggle){
//             toggle.ClassList.remove('on');
//         });
//     }
// })(window,document)


  
// $(function () {
//     'use strict';
  
//     var $toggle = $('.toggle');
//     var $toggleBtn = $('#toggle-btn');
//     // var $signInput = $('.sign-form input');
  
//     // '햄버거 버튼'을 클릭했을 경우
//     $toggleBtn.on('click', function () {
//       $toggle.toggleClass('on');
//     });
  
//     // 브라우저의 사이즈가 변경될 때
//     // 사이즈가 1200px 이상 일 경우 '메뉴' 보임
//     $(window).on('resize', function () {
//       if ($(this).width() > 1200) $toggle.removeClass('on');
//     });
  
//     // `<input>` 에서 `tab`가 아닌 `enter`를 눌렀을 때
//     // 다음 `<input>`으로 넘어가도록 설정
//     // $signInput.on('keydown', function (event) {
//     //   if (event.which === 13) {
//     //     event.preventDefault();
//     //     $(event.target).parent().next().find('input, button').focus();
//     //   }
//     // });
  
//   });

// $(function () {

//     $('#toggle-btn').on('click', function () {
//         $('.toggle').toggleClass('on');
//     });

//     $(window).on('resize', function () {
//         if ($(this).width() > 1200) {
//             $('.toggle').removeClass('on');
//         }
//     });

//     $('.sign-form input').on('keydown', function (event) {
//         if (event.which === 13) {
//             event.preventDefault();
//             $(event.target).parent().next().find('input, button').focus();
//         }
//     });
// });


    $(function() {
        $(window).on('resize', function () {
                  if ($(this).width() > 1200) $toggle.removeClass('on');
        });
        $('#toggle-btn').click(function(){          
          $('.toggle').slideToggle();
        });
 });