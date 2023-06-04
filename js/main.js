(() => {
	function setActiveLang() {
		const langLink = document.querySelectorAll('.lang__item-link');
		langLink.forEach((el) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				let activeLang = document.querySelectorAll('.lang__item-link.active')
				activeLang.forEach((elActive) => {
					elActive.classList.remove('active')
				})
				el.classList.add('active');
				setLang();
			})
		})
	}

	function setLang() {
		const ru = document.querySelectorAll('.ru');
		const eng = document.querySelectorAll('.eng');
		const activeLang = document.querySelector('.lang__item-link.active')
		if (activeLang.innerHTML === "ENG") {
			ru.forEach((el) => {
				el.style.display = 'none';
				el.classList.remove('active')
			})
			eng.forEach((el) => {
				el.style.display = 'block';
				el.classList.add('active')
			})
		} else {
			eng.forEach((el) => {
				el.style.display = 'none';
				el.classList.remove('active')
			})
			ru.forEach((el) => {
				el.style.display = 'block';
				el.classList.add('active')
			})
		}
	}
	setLang();
	setActiveLang();

	let burger = document.querySelector('.burger');
	let menu = document.querySelector('.header__nav');
	burger.addEventListener('click',
		(e) => {
			e.preventDefault();
			menu.classList.add('header__nav--active');
			document.body.classList.add('stop-scroll');
			let spanIs = document.querySelector('.showClose');
			if (!(typeof (spanIs) != 'undefined' && spanIs != null)) {
				let span = document.createElement("span");
				span.style.display = 'block';
				span.style.width = "23px";
				span.style.height = "22px";
				span.tabIndex = 0;
				span.classList.add('showClose');
				span.ariaLabel = 'Закрыть';
				menu.prepend(span);
				let divLang = document.querySelector('.divLang');
				if (!(typeof (divLang) != 'undefined' && divLang != null)) {
					let div = document.createElement("div");
					div.classList.add('divLang');
					let ul = document.createElement("ul");
					ul.classList.add('divLangList');
					for (let i = 1; i <= 3; i++) {
						let li = document.createElement("li");
						li.classList.add('lang__item')
						let a = document.createElement('a');
						a.href = '#'
						a.classList.add('lang__item-link');
						let activeLang = document.querySelectorAll('.lang__item-link.active')
						if (i == 1) {
							a.innerHTML = 'RU'
							if (activeLang[0].innerHTML === "RU") {
								a.classList.add('active')
							}
						} else if (i == 3) {
							a.innerHTML = 'ENG'
							if (activeLang[0].innerHTML === "ENG") {
								a.classList.add('active')
							}
						}

						li.append(a);
						ul.append(li);
					}
					div.append(ul);
					menu.append(div)
					setActiveLang();
				} else {
					divLang.style.display = 'flex'
				}
				span.addEventListener('click', function (e) {
					e.preventDefault();
					menu.classList.remove('header__nav--active')
					document.body.classList.remove('stop-scroll');
					span.style.display = 'none';
					document.querySelector('.divLang').style.display = 'none'
				})
			} else {
				spanIs.style.display = 'block';
				document.querySelector('.divLang').style.display = 'flex'
			}
		});
		let menuList = document.querySelectorAll('.header__item');
		menuList.forEach(function (el) {
			el.addEventListener('click',
				 ()=> {
					menu.classList.remove('header__nav--active');
					document.body.classList.remove('stop-scroll');
				})
		});

})();