// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

document.addEventListener('DOMContentLoaded', (event) => {
	layoutGapObserver();
	window.addEventListener('resize', layoutGapObserver);

	const wrapperType = document.querySelector('[data-wrapper]').dataset.wrapper;
	switch (wrapperType) {
		case 'projects':
			projectsInit();
		default:
			break;
	}

	function projectsInit() {
		// layerScrollTemplateInit(
		// 	document.querySelector('[scroll-block-wrapper]'),
		// 	document.querySelector('[scroll-block]')
		// );

		for (let i = 0; i < 16; i++) {
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
});

window.addEventListener('load', (event) => {
	// layerScrollTemplateInit(document.querySelector('[scroll-block-wrapper]'), document.querySelector('[scroll-block]'));
});

function layoutGapObserver() {
	const wrapper = document.querySelector('[data-wrapper]');
	wrapper.style.cssText += `--top-gap: ${wrapper.getBoundingClientRect().top}px`;
}

window.addEventListener('load', (windowEvent) => {
	document.addEventListener('click', (clickEvent) => {
		const targetElement = clickEvent.target;

		if (targetElement.closest('.select') && !targetElement.closest('.select__options')) {
			targetElement.closest('.select').classList.toggle('select-open');
		}
	});
});

function layerScrollTemplateInit(scrollBlockWrapper, scrollBlock) {
	let leftStart = 0;
	let leftEnd = 0;
	let scrollX = 0;
	let scrollableX = scrollBlock.offsetWidth - scrollBlockWrapper.offsetWidth;

	let topStart = 0;
	let topEnd = 0;
	let scrollY = 0;
	let scrollableY = scrollBlock.offsetHeight - scrollBlockWrapper.offsetHeight;

	let drag = false;

	window.addEventListener('resize', (resizeEvent) => {
		scrollableX = scrollBlock.offsetWidth - scrollBlockWrapper.offsetWidth;
		scrollableY = scrollBlock.offsetHeight - scrollBlockWrapper.offsetHeight;
	});

	function pointerDown(e) {
		drag = true;
		leftStart = e.pageX;
		topStart = e.pageY;
	}

	function pointerMove(e) {
		if (drag) {
			let diffX = -(leftEnd + e.pageX - leftStart);

			if (diffX <= 0) {
				scrollX = 0;
			} else if (diffX > scrollableX) {
				scrollX = -scrollableX;
			} else {
				scrollX = -diffX;
			}

			let diffY = -(topEnd + e.pageY - topStart);

			if (diffY <= 0) {
				scrollY = 0;
			} else if (diffY > scrollableY) {
				scrollY = -scrollableY;
			} else {
				scrollY = -diffY;
			}

			moveBlock(scrollBlock, scrollX, scrollY);
		}
	}

	function pointerUp(e) {
		drag = false;

		leftEnd += e.pageX - leftStart;
		if (leftEnd > 0) {
			leftEnd = 0;
		} else if (leftEnd <= -scrollableX) {
			leftEnd = -scrollableX;
		}

		topEnd += e.pageY - topStart;
		if (topEnd > 0) {
			topEnd = 0;
		} else if (topEnd <= -scrollableY) {
			topEnd = -scrollableY;
		}
	}

	function moveBlock(scrollBlock, scrollX, scrollY) {
		scrollBlock.style.cssText += `
				transition-duration: 0ms;
				transition-delay: 0ms;
				transform: translate3d(${scrollX}px, ${scrollY}px, 0px);
			`;
	}

	scrollBlock.addEventListener('pointerup', pointerUp);
	scrollBlock.addEventListener('pointermove', pointerMove);
	scrollBlock.addEventListener('pointerdown', pointerDown);
}

// function layerScrollTemplateInit(scrollBlockWrapper, scrollBlock) {
// 	let wrapperContainer = document.querySelector('.wrapper-container');
// 	let paddingRight = parseInt(getComputedStyle(wrapperContainer, true).paddingRight);

// 	if (scrollBlock.hasAttribute('data-scroll-y-stop')) {
// 		allowScrollY = false;
// 	} else {
// 		allowScrollY = true;
// 	}

// 	let leftStart = 0;
// 	let leftEnd = 0;
// 	let scrollX = 0;
// 	let scrollableX = allowScrollX
// 		? scrollBlock.clientWidth - (window.innerWidth - scrollBlock.getBoundingClientRect().x - paddingRight)
// 		: 0;

// 	let topStart = 0;
// 	let topEnd = 0;
// 	let scrollY = 0;
// 	let scrollableY = allowScrollY
// 		? scrollBlock.clientHeight - (wrapperContainer.clientHeight - scrollBlock.getBoundingClientRect().y)
// 		: 0;

// 	if (scrollableY < 0) {
// 		scrollableY = 0;
// 	}

// 	let drag = false;

// 	window.addEventListener('resize', (resizeEvent) => {
// 		scrollableX = allowScrollX
// 			? scrollBlock.clientWidth - (window.innerWidth - scrollBlock.getBoundingClientRect().x - paddingRight)
// 			: 0;

// 		scrollableY = allowScrollY
// 			? scrollBlock.clientHeight - (wrapperContainer.clientHeight - scrollBlock.getBoundingClientRect().y)
// 			: 0;
// 	});

// 	function mouseUp(e) {
// 		drag = false;

// 		if (allowScrollX) {
// 			leftEnd += e.pageX - leftStart;
// 			if (leftEnd > 0) {
// 				leftEnd = 0;
// 			} else if (leftEnd <= -scrollableX) {
// 				leftEnd = -scrollableX;
// 			}
// 		}

// 		if (allowScrollY) {
// 			topEnd += e.pageY - topStart;
// 			if (topEnd > 0) {
// 				topEnd = 0;
// 			} else if (topEnd <= -scrollableY) {
// 				topEnd = -scrollableY;
// 			}
// 		}

// 		setInterval(() => {
// 			inertScroll(scrollBlock, allowScrollX, false);
// 			dependentBlocks?.forEach((block) => {
// 				inertScroll(block.elem, block.allowScrollX, false);
// 			});
// 		}, 30);
// 	}

// 	function inertScroll(scrollBlock, allowScrollX, allowScrollY) {
// 		if (allowScrollX) scrollX -= 10;
// 		if (allowScrollY) scrollY -= 10;

// 		if (-scrollX > scrollableX) scrollX = -scrollableX;
// 		if (-scrollY > scrollableY) scrollY = -scrollableY;

// 		moveBlock(scrollBlock, allowScrollX, scrollX, allowScrollY, scrollY);
// 	}

// 	function moveBlock(scrollBlock, allowScrollX, scrollX, allowScrollY, scrollY) {
// 		scrollBlock.style.cssText += `
// 				transition-duration: 0ms;
// 				transition-delay: 0ms;
// 				transform: translate3d(${allowScrollX ? scrollX : 0}px, ${allowScrollY ? scrollY : 0}px, 0px);
// 			`;
// 	}

// 	function mouseMove(e) {
// 		if (drag) {
// 			if (allowScrollX) {
// 				let diffX = -(leftEnd + e.pageX - leftStart);

// 				if (diffX <= 0) {
// 					scrollX = 0;
// 				} else if (diffX > scrollableX) {
// 					scrollX = -scrollableX;
// 				} else {
// 					scrollX = -diffX;
// 				}
// 			}

// 			if (allowScrollY) {
// 				let diffY = -(topEnd + e.pageY - topStart);

// 				if (diffY <= 0) {
// 					scrollY = 0;
// 				} else if (diffY > scrollableY) {
// 					scrollY = -scrollableY;
// 				} else {
// 					scrollY = -diffY;
// 				}
// 			}

// 			moveBlock(scrollBlock, allowScrollX, scrollX, allowScrollY, scrollY);
// 			dependentBlocks?.forEach((block) => {
// 				moveBlock(block.elem, block.allowScrollX, scrollX, block.allowScrollY, scrollY);
// 			});
// 		}
// 	}

// 	function mouseDown(e) {
// 		drag = true;
// 		leftStart = e.pageX;
// 		topStart = e.pageY;
// 	}

// 	scrollBlock.addEventListener('mouseup', mouseUp);
// 	scrollBlock.addEventListener('mousemove', mouseMove);
// 	scrollBlock.addEventListener('mousedown', mouseDown);
// }

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
