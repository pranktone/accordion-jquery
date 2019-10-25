$(function(){
  // '.is-opened'がついている展開メニューを表示する
  $('.js-accordion-trigger.is-opened').next('.js-accordion-target').show();

  // トリガーを押した時のアクション
  $('.js-accordion-trigger').on('click', function() {
    // アコーディオントグル
    $(this).next('.js-accordion-target').slideToggle();

    // トリガーに'.is-opened' クラスをトグル
    $(this).toggleClass('is-opened');
  });
});
