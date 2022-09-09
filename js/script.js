$('.password__icon').on('click', function() {
  $('.password__icon').toggleClass('hidden');
  let attr = $('[name="password"]').attr('type');
  if (attr == 'text')
    $('[name="password"]').attr('type', 'password');
  else
    $('[name="password"]').attr('type', 'text');
});

$('.login-block__btn').on('click', function() {
  window.location.href = 'index.html';
});

$('.filters__item').on('click', function() {
  $('.filters__item').removeClass('active');
  $(this).addClass('active');
});

$('body').on('click', '.delete-btn', function() {
  let index = $(this).closest('.widgets-block').index();
  $('.modal-btn__delete').data('index', index);
  $('.modal-delete').show();
});
$('.modal-btn__delete').on('click', function() {
  let index = $(this).data('index');
  let $el = $('.widgets-block').eq(index);
  $el.fadeOut();
  setTimeout(() => {
    $el.remove();
  }, 400);
  $(this).closest('.mymodal').trigger('click');
});

$('body').on('click', '.info-btn', function() {
  $('.text-block').fadeOut(200);
  $(this).find('.text-block').fadeIn(200);
});
$('body').on('click', function(e) {
  if (!$(e.target).closest('.info-btn').length)
    $('.text-block').fadeOut(200);
});

$('.mymodal').on('click', function(e) {
  let $el = $(e.target);
  if ($el.hasClass('mymodal') || $el.hasClass('modal-btn__close')) {
    closeModal($(this));
  }
});

$('.logout-btn').on('click', function() {
  $('.modal-logout').show();
});
$('.rights-btn').on('click', function() {
  $('.modal-rights').show();
});

$('.modal-btn__rights').on('click', function() {
  // code...
  $(this).closest('.mymodal').trigger('click');
});

$('.modal-btn__logout').on('click', function() {
  // code...
  window.location.href = 'login.html';
});

$('.add-btn').on('click', () => addWidgetBlock());

function closeModal($modal) {
  $modal.addClass('close');
  setTimeout(() => {
    $modal.hide();
    $modal.removeClass('close');
  }, 400);
}

function addWidgetBlock() {
  $('.widgets-list').append(`
    <div class="widgets-block">
      <div class="widgets-block__head">
        <div class="widgets-block__select">
          <span class="widgets-block__select-item">Антон Антонов</span>
          <div class="widgets-block__select-list">
              <div class="find">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="white"/>
                </svg>        
                <input type="text" placeholder="Поиск" name="find">          
              </div>
              <div class="select-list__block">
                <div class="select-list__parent select-list__parent_red">Все магазины</div>
              </div>
              <div class="select-list__block">
                <div class="select-list__parent select-list__parent_purple">Аурум</div>
              </div>
              <div class="select-list__block">
                <div class="select-list__parent select-list__parent_blue">ПрофильДорс</div>
              </div>
              <div class="select-list__block">
                <div class="select-list__parent select-list__parent_gray">Artplay</div>
                <div class="select-list__item">
                  <span>Имя фамилия</span>
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z" fill="white"/>
                  </svg>                    
                </div>
                <div class="select-list__item">Имя фамилия</div>
                <div class="select-list__item">Имя фамилия</div>
              </div>
              <div class="select-list__block">
                <div class="select-list__parent select-list__parent_gray">Можайка</div>
                <div class="select-list__item">Имя фамилия</div>
                <div class="select-list__item">Имя фамилия</div>
                <div class="select-list__item">Имя фамилия</div>
              </div>
            </div>
        </div>
        <div class="widgets-block__menu">
          <div class="widgets-block__price">1 200 488</div>
          <div class="widgets-block__btns">
            <button type="button" class="widgets-block__btn info-btn">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.1665 4.83333H9.83317V6.5H8.1665V4.83333ZM8.1665 8.16666H9.83317V13.1667H8.1665V8.16666ZM8.99984 0.666664C4.39984 0.666664 0.666504 4.4 0.666504 9C0.666504 13.6 4.39984 17.3333 8.99984 17.3333C13.5998 17.3333 17.3332 13.6 17.3332 9C17.3332 4.4 13.5998 0.666664 8.99984 0.666664ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.675 2.33317 9C2.33317 5.325 5.32484 2.33333 8.99984 2.33333C12.6748 2.33333 15.6665 5.325 15.6665 9C15.6665 12.675 12.6748 15.6667 8.99984 15.6667Z" fill="white"/>
              </svg>
              <div class="text-block">
                <p>Лиды...</p>
                <p>Реализация...</p>
                <p>Нагрузка...</p>
                <p>Отказы...</p>
              </div>
            </button>
            <button type="button" class="widgets-block__btn delete-btn">
              <svg width="16" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999837 13.8333C0.999837 14.75 1.74984 15.5 2.6665 15.5H9.33317C10.2498 15.5 10.9998 14.75 10.9998 13.8333V3.83333H0.999837V13.8333ZM11.8332 1.33333H8.9165L8.08317 0.5H3.9165L3.08317 1.33333H0.166504V3H11.8332V1.33333Z" fill="#FF5757"/>
              </svg>                
            </button>
          </div>
        </div>
      </div>
      <div class="widgets-block__body">
        <div class="widgets-block__row">
          <div class="widgets-block__row-values">
            <span>Лиды</span>
            <span class="number">150</span>
          </div>
          <div class="widgets-block__row-progress">
            <div class="widgets-block__row-progress_line blue" style="width: 40%;"></div>
          </div>
        </div>
        <div class="widgets-block__row">
          <div class="widgets-block__row-values">
            <span>Реализация</span>
            <span class="number">150</span>
          </div>
          <div class="widgets-block__row-progress">
            <div class="widgets-block__row-progress_line green" style="width: 54%;"></div>
          </div>
        </div>
        <div class="widgets-block__row">
          <div class="widgets-block__row-values">
            <span>Нагрузка</span>
            <span class="number">150</span>
          </div>
          <div class="widgets-block__row-progress">
            <div class="widgets-block__row-progress_line purple" style="width: 20%;"></div>
          </div>
        </div>
        <div class="widgets-block__row">
          <div class="widgets-block__row-values">
            <span>Отказы</span>
            <span class="number">150</span>
          </div>
          <div class="widgets-block__row-progress">
            <div class="widgets-block__row-progress_line red" style="width: 33%;"></div>
          </div>
        </div>
      </div>
    </div>
  `);
}


$('.swipper input').on('change', function() {
  $(this).closest('.swipper').toggleClass('checked');
});


let selfPeriod = new AirDatepicker('#self-period', {
  maxDate: new Date(),
  range: true,
  buttons: ['clear'],
  autoClose: true,
  onChangeView() {
    let top = $('.select-period').offset().top + $('.select-period').outerHeight() + 10;
    let left = $('.select-period').offset().left;

    selfPeriod.$datepicker.style.top = top + 'px';
    selfPeriod.$datepicker.style.left = left + 'px';
  }
});

$('.select-period').on('click', function() {
  if (selfPeriod.visible) {
    selfPeriod.hide();
    return;
  }
  selfPeriod.show()
  let top = $(this).offset().top + $(this).outerHeight() + 10;
  let left = $(this).offset().left;

  selfPeriod.$datepicker.style.top = top + 'px';
  selfPeriod.$datepicker.style.left = left + 'px';
});

$('body').on('click', (e) => {
  if (selfPeriod.visible
    && !$(e.target).hasClass('air-datepicker-cell')
    && !$(e.target).closest('.air-datepicker').length 
    && !$(e.target).closest('.select-period').length) {  
      selfPeriod.hide();
    }
});


$('body').on('click', '.widgets-block__select-item', function() {
  $('.widgets-block__select-list').fadeOut(200);
  $('.select-list__item').show();
  $('.find-input').val('');
  $(this).next().fadeIn(200);
});
$('body').on('click', function(e) {
  if (!$(e.target).closest('.widgets-block__select-item').length
    && !$(e.target).closest('.find-input').length) {
    $('.widgets-block__select-list').fadeOut(200);
  }
});

$('body').on('click', '.select-list__item', function() {
  $(this).closest('.widgets-block__select-list').find('.select-list__item').removeClass('active');
  $(this).addClass('active');
});

$('body').on('input', '.find-input', function() {
  $('.select-list__item').show();
  let val = $(this).val().trim().toLowerCase();
  let $res = $(this)
    .closest('.widgets-block__select-list')
    .find(`.select-list__item`).filter((i, el) => {
      let text = $(el).text().trim().toLowerCase();
      if (text.indexOf(val) === -1) return true;
      return false;
    });
  $res.hide();
});