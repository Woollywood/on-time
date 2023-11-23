// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

let dayEventAdd = dayEventAdder();

document.addEventListener('DOMContentLoaded', (event) => {
	if (!document.querySelector('.layout__calendar')) {
		const wrapperType = document.querySelector('[data-wrapper]').dataset.wrapper;
		switch (wrapperType) {
			case 'projects':
				// projectsInit();
			default:
				break;
		}

		function projectsInit() {
			layerScrollTemplateInit(document.querySelector('[data-scroll-block]'), true, true);
			layerSwipeTemplateInit(document.querySelector('[data-scroll-block]'), true, true);

			for (let i = 0; i < 6; i++) {
				projectItemCreate(
					i,
					{ iconPath: 'img/icons/icons.svg#required', text: 'Action Required' },
					'Some Long Name of The Company Project',
					'Dmitri <br class="br--tablet"/> Kolontaevskii',
					'Department of Communities and Justice',
					'Sydney <br class="br--tablet"/>Suite 201/54, Neridah St., Chatswood <br class="br--tablet"/>NSW 2067'
				);
			}
		}
	}
});

function tasksHeightObserver() {
	const wrapper = document.querySelector('.cells-layout__scroll-wrapper');
	const layoutTop = document.querySelector('.layout__top');
	const appHeader = document.querySelector('#kt_app_header');

	wrapper.style.maxHeight = `${(window.innerHeight - (appHeader.offsetHeight + layoutTop.offsetHeight)) * 0.9}px`;
}

window.addEventListener('load', (windowEvent) => {
	// flsModules.popup.open('#on-board--pl');
	tasksHeightObserver();
	window.addEventListener('resize', tasksHeightObserver);

	if (document.querySelector('.layout__calendar')) {
		let arrayDays = [
			'7 am',
			'8 am',
			'9 am',
			'10 am',
			'11 am',
			'12 am',
			'1 pm',
			'2 pm',
			'3 pm',
			'4 pm',
			'5 pm',
			'6 pm',
			'7 pm',
			'8 pm',
			'9 pm',
			'10 pm',
			'11 pm',
			'12 pm',
			'1 am',
			'2 am',
			'3 am',
			'4 am',
			'5 am',
			'6 am',
		];

		setDayLayoutRange(arrayDays);
		clockPosition(4.8);

		const MAX_ELEM_ADD = 11;
		for (let i = 0; i < MAX_ELEM_ADD; i++) {
			userDayAdd('img/content/calendar-layout/users/01.jpg', 'Alyona <br /> Kolontaevskaya');

			let randomInt = randomInteger(1, 5);
			if (randomInt) {
				dayEventAddRandom(0, arrayDays.length);
				for (let j = 1; j < randomInt; j++) {
					dayEventAddRandom(0, arrayDays.length, i);
				}
			}
		}

		for (let i = 0; i < MAX_ELEM_ADD / 3; i++) {
			userWeekAdd('img/content/calendar-layout/users/01.jpg', 'Alyona <br /> Kolontaevskaya');
		}

		userDayAdd('img/content/calendar-layout/users/01.jpg', 'eqweqe <br /> Kolontaevskaewwe');
		dayEventAddRandom(0, arrayDays.length);

		dayLayoutObserver();
		setTimeout(() => {
			dayLayoutObserver();
		}, 0);
		window.addEventListener('resize', dayLayoutObserver);
		dayHeightLayoutObserver();
		window.addEventListener('resize', dayHeightLayoutObserver);

		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);
		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);
		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);
		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);
		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);
		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);
		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);
		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);
		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);
		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);

		taskEventAdd('6:00 am – All Day', 'Ermington', 'Riverside Church', 'Must attend today', [
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
			'img/content/calendar-layout/event-block/02/user-01.jpg',
		]);

		const layoutControlls = new Map();

		const buttonsControllTimeTags = document.querySelectorAll('[data-layout="time"]');

		const timeStampsLayoutTimeTags = document.querySelectorAll('[data-layout-time-display]');
		const calendarLayoutTimeTags = document.querySelectorAll('[data-layout-cells-display]');
		const usersLayoutTags = document.querySelectorAll('[data-users-layout]');

		buttonsControllTimeTags.forEach((button) => {
			const dataLayoutControll = button.dataset.layoutControll;
			layoutControlls.set(button, {
				layouts: Array.from(timeStampsLayoutTimeTags).concat(
					Array.from(calendarLayoutTimeTags),
					Array.from(usersLayoutTags)
				),
				timeStampLayout: Array.from(timeStampsLayoutTimeTags).find((elem) =>
					elem.dataset.layoutTimeDisplay == button.dataset.layoutControll ? true : false
				),
				calendarCellsLayout: Array.from(calendarLayoutTimeTags).find((elem) =>
					elem.dataset.layoutCellsDisplay == button.dataset.layoutControll ? true : false
				),
				scrollRelativeBlocks: Array.from(calendarLayoutTimeTags)
					.find((elem) => (elem.dataset.layoutCellsDisplay == button.dataset.layoutControll ? true : false))
					.dataset.scrollRelative?.split(',')
					.map((elem) => elem.trim()),
				swipeRelativeBlocks: Array.from(calendarLayoutTimeTags)
					.find((elem) => (elem.dataset.layoutCellsDisplay == button.dataset.layoutControll ? true : false))
					.dataset.swipeRelative?.split(',')
					.map((elem) => elem.trim()),
				usersLayoutTags,
				usersLayoutRelativeTag: button.dataset.usersLayoutTag,
			});
		});

		const tasksButton = document.querySelector('[data-layout-controll="tasks"]');
		const staffButton = document.querySelector('[data-layout-controll="staff"]');

		layoutControlls.set(tasksButton, {
			layouts: Array.from(timeStampsLayoutTimeTags).concat(
				Array.from(calendarLayoutTimeTags),
				Array.from(usersLayoutTags)
			),
			timeStampLayout: document.querySelector('[data-layout-time-display="tasks"]'),
			calendarCellsLayout: document.querySelector('[data-layout-cells-display="tasks"]'),
			usersLayoutTags,
			usersLayoutRelativeTag: tasksButton.dataset.usersLayoutTag,
		});

		layoutControlls.set(staffButton, {
			layouts: Array.from(timeStampsLayoutTimeTags).concat(
				Array.from(calendarLayoutTimeTags),
				Array.from(usersLayoutTags)
			),
			timeStampLayout: document.querySelector('[data-layout-time-display="day"]'),
			calendarCellsLayout: document.querySelector('[data-layout-cells-display="day"]'),
			usersLayoutTags,
			usersLayoutRelativeTag: staffButton.dataset.usersLayoutTag,
		});

		for (const iterator of layoutControlls) {
			iterator[0].addEventListener('click', (e) => {
				if (e.pointerId !== -1) {
					return;
				}

				iterator[1].layouts.forEach((layout) => {
					layout.style.display = 'none';
				});

				iterator[1].timeStampLayout.style.display = '';
				iterator[1].calendarCellsLayout.style.display = '';

				let usersLayoutTag = document.querySelector(iterator[1].usersLayoutRelativeTag);
				if (usersLayoutTag) {
					usersLayoutTag.style.display = '';
				}

				if (iterator[0].dataset.layoutControll === 'day') {
					dayHeightLayoutObserver();

					dayLayoutObserver();
					setTimeout(() => {
						dayLayoutObserver();
					}, 1000);
				}

				for (const iteratorInner of layoutControlls) {
					if (iteratorInner[1].calendarCellsLayout.hasAttribute('data-scroll')) {
						scrollReset(iteratorInner[1].calendarCellsLayout);
						iteratorInner[1].scrollRelativeBlocks?.forEach((block) =>
							scrollReset(document.querySelector(block))
						);
					}

					if (iteratorInner[1].calendarCellsLayout.hasAttribute('data-swipe')) {
						scrollReset(iteratorInner[1].calendarCellsLayout);
						iteratorInner[1].swipeRelativeBlocks?.forEach((block) =>
							scrollReset(document.querySelector(block))
						);
					}
				}

				if (iterator[1].calendarCellsLayout.hasAttribute('data-scroll')) {
					let scrollRelativeBlocks = null;
					if (iterator[1].scrollRelativeBlocks) {
						scrollRelativeBlocks = iterator[1].scrollRelativeBlocks.map((block) => ({
							elem: document.querySelector(block),
							allowScrollX: JSON.parse(document.querySelector(block).dataset.scrollableX),
							allowScrollY: JSON.parse(document.querySelector(block).dataset.scrollableY),
						}));
					}

					console.log('scroll init');

					layerScrollTemplateInit(iterator[1].calendarCellsLayout, true, true, scrollRelativeBlocks);
				}

				if (iterator[1].calendarCellsLayout.hasAttribute('data-swipe')) {
					let swipeRelativeBlocks = null;
					if (iterator[1].swipeRelativeBlocks) {
						swipeRelativeBlocks = iterator[1].swipeRelativeBlocks.map((block) => ({
							elem: document.querySelector(block),
							allowSwipeX: JSON.parse(document.querySelector(block).dataset.swipeableX),
							allowSwipeY: JSON.parse(document.querySelector(block).dataset.swipeableY),
						}));
					}

					layerSwipeTemplateInit(iterator[1].calendarCellsLayout, true, true, swipeRelativeBlocks);
				}
			});
		}

		layerScrollInit();
	}

	document.addEventListener('click', (clickEvent) => {
		const targetElement = clickEvent.target;

		if (
			targetElement.closest('.event-block') ||
			targetElement.closest('.event-block__mobile') ||
			targetElement.closest('.event-day')
		) {
			if (document.documentElement.classList.contains('task-details-open')) {
				document.documentElement.classList.remove('task-details-open');
				setTimeout(() => {
					document.documentElement.classList.add('task-details-open');
				}, 300);
			} else {
				document.documentElement.classList.add('task-details-open');
			}
		} else if (!targetElement.closest('.task-details') || targetElement.closest('.task-details__close')) {
			document.documentElement.classList.remove('task-details-open');
		}

		if (targetElement.closest('.controlls__filter')) {
			document.documentElement.classList.add('filters-open');
		} else if (!targetElement.closest('.filters') || targetElement.closest('.filters__close')) {
			document.documentElement.classList.remove('filters-open');
		}

		if (targetElement.closest('#new-job-button')) {
			document.documentElement.classList.add('new-job-open');
		} else if (!targetElement.closest('.new-job') || targetElement.closest('.new-job__close')) {
			document.documentElement.classList.remove('new-job-open');
		}

		if (
			(targetElement.closest('.controlls__items--time') || targetElement.closest('.controlls__items--type')) &&
			targetElement.closest('.select__options')
		) {
			if (
				targetElement.closest('[data-layout-controll="day"]') ||
				targetElement.closest('[data-layout-controll="staff"]')
			) {
				document.querySelector('.calendar-layout').classList.add('day');
			} else {
				document.querySelector('.calendar-layout').classList.remove('day');
			}
		}

		if (targetElement.closest('.controlls__items--time') && targetElement.closest('.select__options')) {
			if (targetElement.closest('[data-layout-controll="day"]')) {
				document.querySelector('.controlls__items--type').style.display = '';
			} else {
				document.querySelector('.controlls__items--type').style.display = 'none';
			}
		}

		if (targetElement.closest('.slider-board__button-skip')) {
			flsModules.popup.close();
		}

		if (targetElement.closest('.slider-board__button-done')) {
			let sliderContainer = document.querySelector('.slider-board');
			if (sliderContainer.classList.contains('slider-ends')) {
				flsModules.popup.close();
			}
		}

		if (targetElement.closest('.date__text')) {
			targetElement.closest('.date__text').querySelector('button').click();
		}

		if (targetElement.closest('.select') && !targetElement.closest('.select__options')) {
			targetElement.closest('.select').classList.toggle('select-open');
		}
	});

	let taskEditableFieldList = document.querySelectorAll('.task-details__label--editable');
	taskEditableFieldList.forEach((field) => {
		field.addEventListener('click', (e) => {
			field.classList.toggle('_edit');
			e.target.closest('.task-details__row').classList.toggle('_edit');

			if (e.target.closest('.task-details__row--span-2')) {
				e.target.closest('.task-details__row--span-2').classList.toggle('_edit');
			}
		});
	});
});

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function dayEventAddRandom(min, max, index) {
	const leftPos = randomInteger(min, max);
	const width = randomInteger(2, 4);

	dayEventAdd(false, leftPos, width, '9:30 am – 3 pm', 'Ermington', 'Riverside Church', index);
}

function layerScrollTemplateInit(scrollBlock, allowScrollX, allowScrollY, dependentBlocks = null) {
	let wrapperContainer = document.querySelector('.wrapper-container');
	let layoutCalendar = document.querySelector('.layout__calendar');
	let paddingRight = parseInt(getComputedStyle(wrapperContainer, true).paddingRight);

	if (scrollBlock.hasAttribute('data-scroll-y-stop')) {
		allowScrollY = false;
	} else {
		allowScrollY = true;
	}

	let leftStart = 0;
	let leftEnd = 0;
	let scrollX = 0;
	let scrollableX = allowScrollX
		? scrollBlock.clientWidth - (window.innerWidth - scrollBlock.getBoundingClientRect().x - paddingRight)
		: 0;

	let topStart = 0;
	let topEnd = 0;
	let scrollY = 0;
	let scrollableY = allowScrollY
		? scrollBlock.clientHeight - (wrapperContainer.clientHeight - scrollBlock.getBoundingClientRect().y)
		: 0;

	if (scrollableY < 0) {
		scrollableY = 0;
	}

	let drag = false;

	window.addEventListener('resize', (resizeEvent) => {
		scrollableX = allowScrollX
			? scrollBlock.clientWidth - (window.innerWidth - scrollBlock.getBoundingClientRect().x - paddingRight)
			: 0;

		scrollableY = allowScrollY
			? scrollBlock.clientHeight - (wrapperContainer.clientHeight - scrollBlock.getBoundingClientRect().y)
			: 0;
	});

	function mouseUp(e) {
		drag = false;

		if (allowScrollX) {
			leftEnd += e.pageX - leftStart;
			if (leftEnd > 0) {
				leftEnd = 0;
			} else if (leftEnd <= -scrollableX) {
				leftEnd = -scrollableX;
			}
		}

		if (allowScrollY) {
			topEnd += e.pageY - topStart;
			if (topEnd > 0) {
				topEnd = 0;
			} else if (topEnd <= -scrollableY) {
				topEnd = -scrollableY;
			}
		}
	}

	function moveBlock(scrollBlock, allowScrollX, scrollX, allowScrollY, scrollY) {
		scrollBlock.style.cssText += `
				transition-duration: 0ms;
				transition-delay: 0ms;
				transform: translate3d(${allowScrollX ? scrollX : 0}px, ${allowScrollY ? scrollY : 0}px, 0px);
			`;
	}

	function mouseMove(e) {
		if (drag) {
			if (allowScrollX) {
				let diffX = -(leftEnd + e.pageX - leftStart);

				if (diffX <= 0) {
					scrollX = 0;
				} else if (diffX > scrollableX) {
					scrollX = -scrollableX;
				} else {
					scrollX = -diffX;
				}
			}

			if (allowScrollY) {
				let diffY = -(topEnd + e.pageY - topStart);

				if (diffY <= 0) {
					scrollY = 0;
				} else if (diffY > scrollableY) {
					scrollY = -scrollableY;
				} else {
					scrollY = -diffY;
				}
			}

			moveBlock(scrollBlock, allowScrollX, scrollX, allowScrollY, scrollY);
			dependentBlocks?.forEach((block) => {
				moveBlock(block.elem, block.allowScrollX, scrollX, block.allowScrollY, scrollY);
			});
		}
	}

	function mouseDown(e) {
		drag = true;
		leftStart = e.pageX;
		topStart = e.pageY;
	}

	scrollBlock.addEventListener('mouseup', mouseUp);
	scrollBlock.addEventListener('mousemove', mouseMove);
	scrollBlock.addEventListener('mousedown', mouseDown);
}

function getElementHeight(element) {
	return element.getBoundingClientRect().height;
}

function layerSwipeTemplateInit(swipeBlock, allowSwipeX, allowSwipeY, dependentBlocks = null) {
	let wrapperContainer = document.querySelector('.wrapper-container');
	let paddingRight = parseInt(getComputedStyle(wrapperContainer, true).paddingRight);

	if (swipeBlock.hasAttribute('data-swipe-y-stop')) {
		allowSwipeY = false;
	} else {
		allowSwipeY = true;
	}

	let leftStart = 0;
	let leftEnd = 0;
	let swipeX = 0;
	let swipeableX = allowSwipeX
		? swipeBlock.clientWidth - (window.innerWidth - swipeBlock.getBoundingClientRect().x - paddingRight)
		: 0;

	let topStart = 0;
	let topEnd = 0;
	let swipeY = 0;
	let swipeableY = allowSwipeY
		? swipeBlock.clientHeight - (wrapperContainer.clientHeight - swipeBlock.getBoundingClientRect().y)
		: 0;

	window.addEventListener('resize', (resizeEvent) => {
		swipeableX = allowSwipeX
			? swipeBlock.clientWidth - (window.innerWidth - swipeBlock.getBoundingClientRect().x - paddingRight)
			: 0;

		swipeableY = allowSwipeY
			? swipeBlock.clientHeight - (wrapperContainer.clientHeight - swipeBlock.getBoundingClientRect().y)
			: 0;
	});

	function getTouches(e) {
		return e.touches;
	}

	swipeBlock.addEventListener('touchstart', function (e) {
		const firstTouch = getTouches(e)[0];
		leftStart = firstTouch.clientX;
		topStart = firstTouch.clientY;
	});

	let swipeXdiff = 0;
	let swipeYdiff = 0;

	swipeBlock.addEventListener('touchmove', function (e) {
		const firstTouch = getTouches(e)[0];
		if (allowSwipeX) {
			swipeXdiff = firstTouch.clientX;
			let diffX = -(leftEnd + swipeXdiff - leftStart);

			if (diffX <= 0) {
				swipeX = 0;
			} else if (diffX > swipeableX) {
				swipeX = -swipeableX;
			} else {
				swipeX = -diffX;
			}
		}

		if (allowSwipeX) {
			swipeYdiff = firstTouch.clientY;
			let diffY = -(topEnd + swipeYdiff - topStart);

			if (diffY <= 0) {
				swipeY = 0;
			} else if (diffY > swipeableY) {
				swipeY = -swipeableY;
			} else {
				swipeY = -diffY;
			}
		}

		swipeBlock.style.cssText += `
				transition-duration: 0ms;
				transition-delay: 0ms;
				transform: translate3d(${allowSwipeX ? swipeX : 0}px, ${allowSwipeY ? swipeY : 0}px, 0px);
			`;

		dependentBlocks?.forEach((block) => {
			block.elem.style.cssText += `
					transition-duration: 0ms;
					transition-delay: 0ms;
					transform: translate3d(${block.allowSwipeX ? swipeX : 0}px, ${block.allowSwipeY ? swipeY : 0}px, 0px);
				`;
		});
	});

	swipeBlock.addEventListener('touchend', function (e) {
		if (allowSwipeX) {
			leftEnd += swipeXdiff - leftStart;
			if (leftEnd > 0) {
				leftEnd = 0;
			} else if (leftEnd <= -swipeableX) {
				leftEnd = -swipeableX;
			}
		}

		if (allowSwipeX) {
			topEnd += swipeYdiff - topStart;
			if (topEnd > 0) {
				topEnd = 0;
			} else if (topEnd <= -swipeableY) {
				topEnd = -swipeableY;
			}
		}
	});
}

function scrollReset(block) {
	if (block.style) {
		block.style.cssText += `
		transition-duration: 0ms;
		transition-delay: 0ms;
		transform: translate3d(0px, 0px, 0px);
	`;
	}
}

function layerScrollInit() {
	layerScrollTemplateInit(document.querySelector('.cells-layout--day'), true, true, [
		{
			elem: document.querySelector('.time-stamp__inner'),
			allowScrollX: true,
			allowScrollY: false,
		},
		{
			elem: document.querySelector('.user-layout'),
			allowScrollX: false,
			allowScrollY: true,
		},
		,
	]);

	layerSwipeTemplateInit(document.querySelector('.cells-layout--day'), true, true, [
		{
			elem: document.querySelector('.time-stamp__inner'),
			allowSwipeX: true,
			allowSwipeY: false,
		},
		{
			elem: document.querySelector('.user-layout'),
			allowSwipeX: false,
			allowSwipeY: true,
		},
		,
	]);
}

function userDayAdd(imageUrl, name) {
	const userLayout = document.querySelector('.user-layout--day .user-layout__inner');
	const userTag = document.createElement('div');
	userTag.classList.add('user-layout__user');
	userTag.innerHTML = `
							<img
								class="user-layout__user-avatar"
								src="${imageUrl}"
								alt="user-avatar" />
							<span class="user-layout__user-name">
								${name}
							</span>
	`;
	userLayout.append(userTag);
}

function userWeekAdd(imageUrl, name) {
	const userLayout = document.querySelector('.user-layout--week .user-layout__inner');
	const userTag = document.createElement('div');
	userTag.classList.add('user-layout__user');
	userTag.innerHTML = `
							<img
								class="user-layout__user-avatar"
								src="${imageUrl}"
								alt="user-avatar" />
							<span class="user-layout__user-name">
								${name}
							</span>
	`;
	userLayout.append(userTag);
}

function setDayLayoutRange(arrayValue) {
	let range = arrayValue.length;

	let calendarLayoutWrapper = document.querySelector('.calendar-layout__wrapper');
	let calendarLayoutInner = document.querySelector('.calendar-layout__inner');
	calendarLayoutInner.style.cssText += `--cell-count: ${range}`;

	let cellLayoutInner = document.querySelector('.cells-layout__inner');
	let cellList = [];
	for (let i = 0; i < range; i++) {
		let cell = document.createElement('div');
		cell.classList.add('cells-layout__cell-day');
		cellList.push(cell);
	}

	cellList.forEach((cell) => {
		cellLayoutInner.append(cell);
	});

	let timeStampLayout = document.querySelector('.time-stamp.time-stamp--day');
	let timeStampInner = document.querySelector('.time-stamp.time-stamp--day .time-stamp__inner');
	let timeStampCellList = [];
	for (let i = 0; i < range; i++) {
		let cell = document.createElement('div');
		cell.classList.add('time-stamp__value');
		cell.innerHTML = arrayValue[i];
		timeStampCellList.push(cell);
	}
	timeStampCellList.forEach((el) => {
		timeStampInner.append(el);
	});

	DayLayoutRangeCorrect();
	window.addEventListener('resize', DayLayoutRangeCorrect);
}

function DayLayoutRangeCorrect() {
	let calendarLayoutWrapper = document.querySelector('.calendar-layout__wrapper');
	let calendarLayoutInner = document.querySelector('.calendar-layout__inner');
	let userLayout = document.querySelector('.user-layout.user-layout--day');
	let cellList = document.querySelectorAll('.cells-layout__cell-day');

	let fullWidthWrapper = calendarLayoutWrapper.offsetWidth;
	let fullWidthWrapperCalculate =
		userLayout.offsetWidth +
		Array.from(cellList).reduce(
			(sum, el) => sum + Number.parseInt(window.getComputedStyle(el).getPropertyValue('min-width')),
			0
		);

	if (fullWidthWrapperCalculate < fullWidthWrapper) {
		calendarLayoutInner.style.width = '100%';
	} else {
		calendarLayoutInner.style.width = '';
	}
}

function dayLayoutObserver() {
	let cellLayoutDay = document.querySelector('.cells-layout.cells-layout--day');
	let timeStampLayoutDay = document.querySelector('.time-stamp.time-stamp--day');
	let dayCell = document.querySelector('.cells-layout__cell-day');
	let cellWidth = dayCell.getBoundingClientRect().width;

	cellLayoutDay.style.cssText += `--cell-width: ${cellWidth}px`;
	timeStampLayoutDay.style.cssText += `--cell-width: ${cellWidth}px`;
}

function dayHeightLayoutObserver() {
	let windowHeight = window.innerHeight;
	let headerHeight = document.querySelector('.app-header').clientHeight;
	let layerTopHeight = document.querySelector('.layout__top').clientHeight;
	let cellsLayout = document.querySelector('.day .calendar-layout__cells-layout');
	if (cellsLayout) {
		let cellsLayoutHeight = cellsLayout.clientHeight;
		let contentHeight = headerHeight + layerTopHeight + cellsLayoutHeight;
		if (contentHeight + 100 < windowHeight) {
			console.log('reset');
			document.querySelector('.wrapper-calendar').style.height = '100%';
			document.querySelector('.calendar-layout__inner').style.height = '100%';
			document.querySelector('.calendar-layout__cells-layout').style.height = '100%';
			document.querySelector('.cells-layout.cells-layout--day').setAttribute('data-scroll-y-stop', '');
			document.querySelector('.cells-layout.cells-layout--day').setAttribute('data-swipe-y-stop', '');
		} else {
			document.querySelector('.wrapper-calendar').style.height = '';
			document.querySelector('.calendar-layout__inner').style.height = '';
			document.querySelector('.calendar-layout__cells-layout').style.height = '';
			document.querySelector('.cells-layout.cells-layout--day').removeAttribute('data-scroll-y-stop');
			document.querySelector('.cells-layout.cells-layout--day').removeAttribute('data-swipe-y-stop');
		}
	}
}

function dayEventAdder() {
	const calendarLayout = document.querySelector('.cells-layout.cells-layout--day .cells-layout__events');
	let evenIndextList = [];
	let lastIndex = 0;

	return function (isAlert, leftPos, width, time, place, description, index) {
		const eventTag = document.createElement('div');

		if (index >= 0) {
			if (!evenIndextList.includes(index)) {
				console.log('undefined row');
				return;
			}

			const row = calendarLayout.querySelector(`[data-row-id="${index}"]`);
			eventTag.classList.add('event-day');
			eventTag.style.cssText += `
				--left-pos-cell: ${leftPos};
				--width-cell: ${width};
			`;

			if (isAlert) {
				eventTag.innerHTML = `
									<div class="event-day__icon-wrapper">
										<svg>
											<use
												xlink:href="img/icons/icons.svg#attention"></use>
										</svg>
									</div>
			`;
			} else {
				eventTag.innerHTML = `
									<div class="event-day__top">
										<div class="event-day__time">${time}</div>
										<div class="event-day__time-short">${time.slice(0, time.indexOf(' '))}</div>
										<div class="event-day__sep"></div>
										<div class="event-day__place">${place}</div>
									</div>
									<div class="event-day__name">${description}</div>
			`;
			}

			row.append(eventTag);
		} else {
			eventTag.classList.add('event-day-row');
			eventTag.dataset.rowId = index ?? lastIndex;

			if (isAlert) {
				eventTag.innerHTML = `
									<div class="event-day" style="--left-pos-cell: ${leftPos}; --width-cell: ${width};">
										<div class="event-day__icon-wrapper">
											<svg>
												<use
													xlink:href="img/icons/icons.svg#attention"></use>
											</svg>
										</div>
									</div>
			`;
			} else {
				eventTag.innerHTML = `
									<div class="event-day" style="--left-pos-cell: ${leftPos}; --width-cell: ${width};">
										<div class="event-day__top">
											<div class="event-day__time">${time}</div>
											<div class="event-day__time-short">${time.slice(0, time.indexOf(' '))}</div>
											<div class="event-day__sep"></div>
											<div class="event-day__place">${place}</div>
										</div>
										<div class="event-day__name">${description}</div>
									</div>
			`;

				calendarLayout.append(eventTag);
			}

			evenIndextList.push(index ?? lastIndex++);
		}
	};
}

function taskEventAdd(time, address, task, description, usersImageUrl) {
	taskEventAddDesktop(time, address, task, description, usersImageUrl);
	taskEventAddMobile(time, address, task, description);

	function taskEventAddMobile(time, address, task, description) {
		const layout = document.querySelector('.cells-layout--mobile');
		const eventBlock = document.createElement('div');
		eventBlock.classList.add('event-block__mobile', 'event-block--mobile');

		eventBlock.innerHTML = `
			<div class="event-block__mobile-row event-block__mobile-row--col">
				<div class="event-block__mobile-left">
					<div class="event-block__time">${time}</div>
					<div class="event-block__address">${address}</div>
				</div>
				<div class="event-block__mobile-right">
					<a class="event-block__image-wrapper" href="#">
						<svg
							width="50"
							height="32"
							viewBox="0 0 50 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="14" cy="16" r="14" fill="#D9D9D9" />
							<circle
								cx="34"
								cy="16"
								r="15"
								fill="#D9D9D9"
								stroke="white"
								stroke-width="2" />
						</svg>
					</a>
				</div>
			</div>
			<div class="event-block__mobile-row">
				<div class="event-block__task">${task}</div>
				<div class="event-block__description">
					<span class="event-block__description-text">${description}</span>
				</div>
			</div>
		`;

		layout.append(eventBlock);
	}

	function taskEventAddDesktop(time, address, task, description, usersImageUrl) {
		const layout = document.querySelector('.cells-layout--desktop');
		const eventBlock = document.createElement('div');
		eventBlock.classList.add('event-block', 'event-block--desktop');

		eventBlock.innerHTML = `
				<div class="event-block__time">${time}</div>
				<div class="event-block__address">${address}</div>
				<div class="event-block__task">${task}</div>
				<div class="event-block__description">
					<span class="event-block__description-text">${description}</span>
					<div class="event-block__description-users">
						${userCollectionInsert(usersImageUrl)}
					</div>
				</div>
		`;

		layout.append(eventBlock);

		function userCollectionInsert(usersImageUrl) {
			return usersImageUrl.length <= 4
				? String(
						usersImageUrl.map(
							(user) => `
							<div class="event-block__description-images">
								<img
									class="event-block__description-image"
									src=${user}
									alt="user-img" />
							</div>
							`
						)
				  ).replaceAll(',', '')
				: `
				<div class="event-block__description-images">
					${String(
						usersImageUrl.map((user, index) =>
							index <= 4
								? `
							<div class="event-block__description-images">
								<img
									class="event-block__description-image"
									src=${user}
									alt="user-img" />
							</div>
							`
								: null
						)
					).replaceAll(',', '')}
				</div>
				<div class="event-block__description-more">+${usersImageUrl.length - 4}</div>
				`;
		}
	}
}

function weekEventAdd(col, row, progress, time, tasks) {
	const caledarLayoutCells = document.querySelectorAll(
		'.cells-layout.cells-layout--week .cells-layout__cell-week-inner'
	);
	const cellLayout = caledarLayoutCells[col + 7 * row];

	const eventTag = document.createElement('div');
	eventTag.classList.add('event-week');

	let progressNum = progress * 100;
	if (progressNum >= 0 && progressNum <= 30) {
		eventTag.classList.add('event-week--red');
	} else if (progressNum > 30 && progressNum <= 70) {
		eventTag.classList.add('event-week--brown');
	} else {
		eventTag.classList.add('event-week--green');
	}

	eventTag.innerHTML = `
							<div class="event-week__inner">
								<div class="event-week__time-wrapper" style="--progress-width: ${progressNum}%">
									<div class="event-week__time-value">
										${time}
									</div>
								</div>
								<div class="event-week__tasks">${tasks} tasks</div>
							</div>
	`;

	cellLayout.innerHTML = '';
	cellLayout.append(eventTag);
}

function monthEventAdd(col, row, progress, time, tasks, users) {
	const caledarLayoutCells = document.querySelectorAll('.cells-layout.cells-layout--month .cells-layout__cell-month');
	console.log(caledarLayoutCells);
	const cellLayout = caledarLayoutCells[col + 7 * row];

	const eventTag = document.createElement('div');
	eventTag.classList.add('event-month');

	let progressNum = progress * 100;
	if (progressNum >= 0 && progressNum <= 30) {
		eventTag.classList.add('event-month--red');
	} else if (progressNum > 30 && progressNum <= 70) {
		eventTag.classList.add('event-month--brown');
	} else {
		eventTag.classList.add('event-month--green');
	}

	eventTag.innerHTML = `
							<div class="event-month__inner">
								<div class="event-month__users">
									<span>${users}</span>
									<svg>
										<use
											xlink:href="img/icons/icons.svg#user"></use>
									</svg>
								</div>
								<div class="event-month__tasks">
									${tasks}<span> tasks</span>
								</div>
								<div class="event-month__time-wrapper" style="--progress-width: ${progressNum}%">
									<div class="event-month__time-value">
										<span>${time}</span>
									</div>
								</div>
							</div>
	`;

	cellLayout.append(eventTag);
}

function clockPosition(position) {
	const calendarLayout = document.querySelector('.cells-layout.cells-layout--day');
	const timeStampLayout = document.querySelector('.time-stamp.time-stamp--day');
	calendarLayout.style.cssText += `--clock-position: ${position}`;
	timeStampLayout.style.cssText += `--clock-position: ${position}`;
}



function projectItemCreate(id, status, project, supervisor, customerName, address) {
	console.log('project create start...');

	const projectItem = document.createElement('div');
	projectItem.classList.add('project-item');
	projectItem.id = `project-item-${id}`;
	projectItem.innerHTML = `
		<div class="project-item__inner">
			<div class="project-item__status">
				<div class="project-item__status-mobile-wrapper">
					<div class="project-item__status-icon color-green">
						<svg>
							<use xlink:href="${status.iconPath}"></use>
						</svg>
					</div>
					<span class="project-item__status-text color-green">${status.text}</span>
				</div>
			</div>
			<div class="project-item__project" data-da="#project-item-${id} .project-item__center, 479.98">
				<div class="project-item__project-mobile-wrapper color-green"></div>
				<span data-da="#project-item-${id} .project-item__project-mobile-wrapper, 479.98">${project}</span>
			</div>
			<div class="project-item__supervisor">
				<div class="project-item__supervisor-icon">
					<svg>
						<use xlink:href="img/icons/icons.svg#user"></use>
					</svg>
				</div>
				<div class="project-item__supervisor-name">${supervisor}</div>
			</div>
			<div
				class="project-item__customer-name"
				data-da="#project-item-${id} .project-item__status, 479.98">
				${customerName}
			</div>
			<div class="project-item__address" data-da="#project-item-${id} .project-item__center, 479.98, last">
				${address}
			</div>
		</div>
		<div class="project-item__center" data-da="#project-item-${id} .project-item__inner, 479.98, 1"></div>
	`;

	document.querySelector('.projects-layout__content-body').append(projectItem);
}
