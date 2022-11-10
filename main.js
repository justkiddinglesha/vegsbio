/*********************************************/
/*      Главное меню "каталог" в хедере      */
/*********************************************/
(function () {

	const mainCategories = document.querySelectorAll('.main-categories__list-item');
	const showButtons = document.querySelectorAll('.show-subcategories');
	const showSubmenuButtons = document.querySelectorAll('.show-sub-lvl');
	const prevButtons = document.querySelectorAll('.submenu-custom__title');
	const titles = document.querySelectorAll('.sub-categories__title');

	if(window.innerWidth > 768) {
		mainCategories[0].classList.add('active');
	}

	titles.forEach((title) => {
		title.addEventListener('click', () => {
			mainCategories.forEach((item) => {
				item.classList.remove('active');
				item.classList.remove('hdn');
			});
		});
	});

	prevButtons.forEach((button) => {
		button.addEventListener('click', () => {
			button.closest('.sub-categories__list-item.lvl_2').classList.remove('active');
			const subLists = button.closest('.subcategory-items').querySelectorAll('.sub-categories__list-block');
			subLists.forEach((subList) => {
				subList.classList.remove('active');
				subList.classList.remove('hdn');
			});
			titles.forEach((title) => {
				title.classList.remove('hidden');
			});
		});
	});

	showButtons.forEach((item) => {
		item.addEventListener('click', () => {
			const isCurrentActive = item.closest('.main-categories__list-item').classList.contains('active');
			showButtons.forEach((item) => {
				item.closest('.main-categories__list-item').classList.remove('active');
				mainCategories.forEach((mainCategory) => {
					mainCategory.classList.add('hdn');
				});
			});
			if (!isCurrentActive) {
				item.closest('.main-categories__list-item').classList.add('active');
				item.closest('.main-categories__list-item').classList.remove('hdn');
			}
		});
	});

	showSubmenuButtons.forEach((item) => {
		item.addEventListener('click', () => {
			const isCurrentActive = item.closest('.sub-categories__list-item.lvl_2').classList.contains('active');
			showSubmenuButtons.forEach((item) => {
				item.closest('.sub-categories__list-item.lvl_2').classList.remove('active');
				if(window.innerWidth > 1200) {
					item.closest('.sub-categories__list-item.lvl_2').querySelector('.submenu-custom').style.height = '0px';
				}
				item.closest('.sub-categories__list-block').classList.remove('active');
				item.closest('.sub-categories__list-block').classList.add('hdn');
			});
			if (!isCurrentActive) {
				titles.forEach((title) => {
					title.classList.add('hidden');
				});
				item.closest('.sub-categories__list-item.lvl_2').classList.add('active');
				if(window.innerWidth > 1200) {
					item.closest('.sub-categories__list-item.lvl_2').querySelector('.submenu-custom').style.height = item.closest('.sub-categories__list-item.lvl_2').querySelector('.submenu-custom').scrollHeight + 'px';
				}
				item.closest('.sub-categories__list-block').classList.add('active');
				item.closest('.sub-categories__list-block').classList.remove('hdn');
			}
		});
	});

    // function openSubs($this){
    //     $this.closest('.js-subCategories').addClass('subcategory-items--openSub')
    //     $this.closest('.js-menuBlock').next().html($this.find('.subcategory-items').html()).addClass('subcategory-items--active')
    //     $this.closest('.js-menuBlock').addClass('main-categories--openSub')
    //     $this.closest('.js-menuBlock').addClass('subcategory-categories--openSub')
    // }
    // function closeSubs($this){
    //     $this.closest('.js-subCategories').removeClass('subcategory-items--openSub')
    //     $this.closest('.js-menuBlock').next().html('').removeClass('subcategory-items--active')
    //     $this.closest('.js-menuBlock').removeClass('main-categories--openSub')
    // }

    // function onHover(evt){
    //     if(window.innerWidth > 1200) {
    //         if(evt.type == 'mouseenter') {
    //             $(this).addClass('active');
    //             $(this).find('.submenu-custom').animate({height: "toggle", opacity: "toggle"}, 200);
    //         } else {
    //             $(this).removeClass('active');
    //             $(this).find('.submenu-custom').animate({height: "toggle", opacity: "toggle"}, 200);
    //         }
    //     }
    //     if(window.innerWidth < 1201) {
    //         if(evt.target.classList.contains('submenu-custom__back')) {
    //             $('.sub-categories__list-block').removeClass('hidden');
    //             $('.sub-categories__list-block').removeClass('active');
    //             $('.lvl_2').removeClass('hidden');
    //             $('.lvl_2').removeClass('active');
    //         } else {
    //             $('.lvl_2').addClass('hidden');
    //             $(this).removeClass('hidden');
    //             $('.sub-categories__list-block').addClass('hidden');
    //             $(this).parent().removeClass('hidden');
    //             $(this).parent().addClass('active');
    //             $(this).addClass('active');
    //         }

    //     }
    // }
  
  	// $('.submenu-custom__back').click(function() {
    //   alert( "Handler for .click() called." );
    // });

    // $(document).on('mouseenter mouseleave', '.sub-categories__list-item.lvl_2', onHover);

    // $('.main-categories__list-item').on('mouseenter', function(){
    //     if(window.innerWidth > 1200) {
    //         if($(this).find('.subcategory-items').html()) {
    //             openSubs($(this));
    //         }else{
    //             closeSubs($(this));
    //         }
    //     }
    // });


    // $('.mobile-tab').on('click', function(e) {
    //     if(window.innerWidth < 1201) {
    //         e.preventDefault();
    //       	if(window.innerWidth < 769) {
    //           e.target.closest('.collection-menu-dropdown').classList.add('opened');
    //         }
    //         if($(this).find('.subcategory-items').html()) {
    //             openSubs($(this));
    //         }else{
    //             closeSubs($(this));
    //         }
    //     }
    // });

    // $('.collection-menu-dropdown').on('mouseleave', function(e){
    //     $('.js-menuBlock').removeClass('main-categories--openSub')
    // });
})();


const menu = document.querySelector('.header-custom_menu'),
    headerButton = document.querySelector('.header-open-menu');

let isMenuVisible = false;

const openMenu = () => {
	menu.classList.add('open');
  	scrollLock.disablePageScroll();
  	isMenuVisible = true;
};

const closeMenu = () => {
	menu.classList.remove('open');
  	scrollLock.enablePageScroll();
  	isMenuVisible = false;
};

headerButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (isMenuVisible) {
		closeMenu();
    } else {
		openMenu();
    }
});

document.addEventListener('click', (e) => {
    let target = e.target,
    itsMenu = target == menu || menu.contains(target),
    itsMenuButton = target == headerButton,
    isVisible = menu.classList.contains('open');
    if (!itsMenu && !itsMenuButton && isVisible) {
        closeMenu();
    }
});