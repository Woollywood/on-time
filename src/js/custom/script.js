// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

document.addEventListener('DOMContentLoaded', (event) => {
	document.addEventListener('click', (clickEvent) => {
		const targetElement = clickEvent.target;

		if (targetElement.closest('.select') && !targetElement.closest('.select__options')) {
			targetElement.closest('.select').classList.toggle('select-open');
		}
	});

	layoutGapObserver();
	window.addEventListener('resize', layoutGapObserver);

	projectsInit();

	function projectsInit() {
		projectItemCreate(
			0,
			{ iconPath: 'img/icons/icons.svg#required', text: 'Action Required', color: 'green' },
			'Some Long Name of The Company Project',
			{ name: 'Dmitri <br class="br--tablet"/> Kolontaevskii' },
			'Department of Communities and Justice',
			'Sydney <br class="br--tablet"/>Suite 201/54, Neridah St., Chatswood <br class="br--tablet"/>NSW 2067'
		);

		projectItemCreate(
			1,
			{ iconPath: 'img/icons/icons.svg#invoiced', text: 'Invoiced', color: 'brown' },
			'Some Long Name of The Company Project',
			{ avatarPath: 'img/avatars/avatar-01.jpg', name: 'Sandra <br class="br--tablet"/> Wilson' },
			'Department of Communities and Justice',
			'Sydney <br class="br--tablet"/>Suite 201/54, Neridah St., Chatswood <br class="br--tablet"/>NSW 2067'
		);

		projectItemCreate(
			2,
			{ iconPath: 'img/icons/icons.svg#active', text: 'Active', color: 'blue' },
			'Some Long Name of The Company Project',
			{ name: 'Dmitri <br class="br--tablet"/> Kolontaevskii' },
			'Department of Communities and Justice',
			'Sydney <br class="br--tablet"/>Suite 201/54, Neridah St., Chatswood <br class="br--tablet"/>NSW 2067'
		);

		projectItemCreate(
			3,
			{ iconPath: 'img/icons/icons.svg#cancelled', text: 'Cancelled', color: 'red' },
			'Some Long Name of The Company Project',
			{ name: 'Dmitri <br class="br--tablet"/> Kolontaevskii' },
			'Department of Communities and Justice',
			'Sydney <br class="br--tablet"/>Suite 201/54, Neridah St., Chatswood <br class="br--tablet"/>NSW 2067'
		);

		projectItemCreate(
			4,
			{ iconPath: 'img/icons/icons.svg#archived', text: 'Archived', color: 'pink' },
			'Some Long Name of The Company Project',
			{ name: 'Dmitri <br class="br--tablet"/> Kolontaevskii' },
			'Department of Communities and Justice',
			'Sydney <br class="br--tablet"/>Suite 201/54, Neridah St., Chatswood <br class="br--tablet"/>NSW 2067'
		);

		projectItemCreate(
			5,
			{ iconPath: 'img/icons/icons.svg#on-hold', text: 'On Hold', color: 'cold' },
			'Some Long Name of The Company Project',
			{ name: 'Dmitri <br class="br--tablet"/> Kolontaevskii' },
			'Department of Communities and Justice',
			'Sydney <br class="br--tablet"/>Suite 201/54, Neridah St., Chatswood <br class="br--tablet"/>NSW 2067'
		);

		for (let i = 7; i < 11; i++) {
			projectItemCreate(
				i,
				{ iconPath: 'img/icons/icons.svg#required', text: 'Action Required', color: 'brown' },
				'Some Long Name of The Company Project',
				{ avatarPath: 'img/avatars/avatar-01.jpg', name: 'Sandra <br class="br--tablet"/> Wilson' },
				'Department of Communities and Justice',
				'Sydney <br class="br--tablet"/>Suite 201/54, Neridah St., Chatswood <br class="br--tablet"/>NSW 2067'
			);
		}
	}

	document.querySelectorAll('.managers-files-item').forEach((item) =>
		item.addEventListener('sendMessage', (event) => {
			console.log(event);
		})
	);

	document.querySelectorAll('.managers-files-item').forEach((item) =>
		item.addEventListener('createTippy', (event) => {
			console.log(event.detail.instance);
		})
	);

	const dragZone = document.querySelector('[drag-zone]');

	dragZone.addEventListener('dragenter', (event) => {
		event.preventDefault();

		const relatedTarget = event.relatedTarget;
		if (relatedTarget == null || !dragZone.contains(relatedTarget)) {
			const dragZone = event.target.closest('[drag-zone]');
			dragZone.classList.add('file-drop');
		}
	});

	dragZone.addEventListener('dragleave', (event) => {
		event.preventDefault();

		const relatedTarget = event.relatedTarget;
		if (!dragZone.contains(relatedTarget)) {
			const dragZone = event.target.closest('[drag-zone]');
			dragZone.classList.remove('file-drop');
		}
	});

	dragZone.addEventListener('drop', (event) => {
		event.preventDefault();
	});

	document.querySelector('[data-new-project-open]').addEventListener('click', (event) => {
		const wrapper = event.target.closest('[data-wrapper]');
		wrapper.classList.add('new-project-drawer-open');
	});

	document.querySelector('[data-new-project-close]').addEventListener('click', (event) => {
		const wrapper = event.target.closest('[data-wrapper]');
		wrapper.classList.remove('new-project-drawer-open');
	});
});

window.addEventListener('load', (e) => {
	scrollInit();
});

function scrollInit() {
	const scrollBlocks = document.querySelectorAll('[scroll-block-wrapper]');
	scrollBlocks.forEach((scrollBlock) => {
		if (scrollBlock.getAttribute('scroll-sync')) {
			const syncBlocks = scrollBlock
				.getAttribute('scroll-sync')
				.split(',')
				.map((string) => string.trim())
				.map((selector) => document.querySelector(selector));

			scrollSyncInit(scrollBlock, syncBlocks);
		}

		layerScrollTemplateInit(scrollBlock);
	});
}

function scrollSyncInit(scrollBlock, syncBlocks) {
	scrollBlock.addEventListener('layout-scroll', (scrollEvent) => {
		syncBlocks.forEach((block) =>
			moveBlockSync(block, scrollEvent.detail.scrollLeft, scrollEvent.detail.scrollTop)
		);
	});
}

function layerScrollTemplateInit(scrollBlockWrapper) {
	const scrollBlock = scrollBlockWrapper.firstElementChild;

	let leftStart = 0;
	let leftEnd = 0;
	let scrollX = 0;
	let scrollableX = scrollBlock.offsetWidth - scrollBlockWrapper.offsetWidth;

	let topStart = 0;
	let topEnd = 0;
	let scrollY = 0;
	let scrollableY = scrollBlock.offsetHeight - scrollBlockWrapper.offsetHeight;

	let drag = false;

	const scrollEvent = new CustomEvent('layout-scroll', {
		detail: {
			scrollLeft: 0,
			scrollTop: 0,
		},
	});

	window.addEventListener('resize', (resizeEvent) => {
		scrollableX = scrollBlock.offsetWidth - scrollBlockWrapper.offsetWidth;
		scrollableY = scrollBlock.offsetHeight - scrollBlockWrapper.offsetHeight;
	});

	function pointerDown(e) {
		drag = true;
		leftStart = e.pageX;
		topStart = e.pageY;

		e.target.setPointerCapture(e.pointerId);
	}

	function pointerMove(e) {
		console.log('move');

		if (drag) {
			let diffX = -(leftEnd + e.pageX - leftStart);

			if (diffX <= 0) {
				scrollX = 0;
			} else if (!(diffX > scrollableX)) {
				scrollX = -diffX;
			}

			let diffY = -(topEnd + e.pageY - topStart);

			if (diffY <= 0) {
				scrollY = 0;
			} else if (!(diffY > scrollableY)) {
				scrollY = -diffY;
			}

			scrollEvent.detail.scrollLeft = scrollX;
			scrollEvent.detail.scrollTop = scrollY;
			scrollBlockWrapper.dispatchEvent(scrollEvent);

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

	scrollBlock.addEventListener('pointerup', pointerUp);
	scrollBlock.addEventListener('pointermove', pointerMove);
	scrollBlock.addEventListener('pointerdown', pointerDown);
}

function moveBlockSync(scrollBlockWrapper, scrollX, scrollY) {
	const scrollBlock = scrollBlockWrapper.firstElementChild;

	const scrollXAllowed = getAllowedXScroll(scrollBlock, scrollBlockWrapper, scrollX);
	const scrollYAllowed = getAllowedYScroll(scrollBlock, scrollBlockWrapper, scrollY);

	scrollBlock.style.cssText += `
			transition-duration: 0ms;
			transition-delay: 0ms;
			transform: translate3d(${scrollXAllowed}px, ${scrollYAllowed}px, 0px);
		`;
}

function getAllowedXScroll(scrollBlock, scrollBlockWrapper, parentScrollValue) {
	const scrollValue = scrollBlock.offsetWidth - scrollBlockWrapper.offsetWidth;
	const scrollAllowed =
		Math.abs(parentScrollValue) > scrollValue
			? parentScrollValue - (parentScrollValue + scrollValue)
			: parentScrollValue;

	return scrollAllowed;
}

function getAllowedYScroll(scrollBlock, scrollBlockWrapper, parentScrollValue) {
	const scrollValue = scrollBlock.offsetHeight - scrollBlockWrapper.offsetHeight;
	const scrollAllowed =
		Math.abs(parentScrollValue) > scrollValue
			? parentScrollValue - (parentScrollValue + scrollValue)
			: parentScrollValue;

	return scrollAllowed;
}

function moveBlock(scrollBlock, scrollX, scrollY) {
	scrollBlock.style.cssText += `
			transition-duration: 0ms;
			transition-delay: 0ms;
			transform: translate3d(${scrollX}px, ${scrollY}px, 0px);
		`;
}

function layoutGapObserver() {
	const wrapper = document.querySelector('[data-wrapper]');
	wrapper.style.cssText += `--top-gap: ${wrapper.getBoundingClientRect().top}px`;
}

function projectItemCreate(id, status, project, supervisor, customerName, address) {
	const projectItem = document.createElement('div');
	projectItem.classList.add('project-item');
	projectItem.id = `project-item-${id}`;
	projectItem.innerHTML = `
		<div class="project-item__inner">
			<div class="project-item__status">
				<div class="project-item__status-mobile-wrapper">
					<div class="project-item__status-icon color-${status.color}">
						<svg>
							<use xlink:href="${status.iconPath}"></use>
						</svg>
					</div>
					<span class="project-item__status-text color-${status.color}">${status.text}</span>
				</div>
			</div>
			<div class="project-item__project" data-da="#project-item-${id} .project-item__center, 479.98">
				<div class="project-item__project-mobile-wrapper color-green"></div>
				<span data-da="#project-item-${id} .project-item__project-mobile-wrapper, 479.98">${project}</span>
			</div>
			<div class="project-item__supervisor">
				${
					supervisor.avatarPath === undefined
						? `<div class="project-item__supervisor-icon">
								<svg>
									<use xlink:href="img/icons/icons.svg#user"></use>
								</svg>
							</div>`
						: `<div class="project-item__supervisor-avatar">
								<img src="${supervisor.avatarPath}" alt="avatar" />
							</div>`
				}
				<div class="project-item__supervisor-name">${supervisor.name}</div>
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

	document.querySelector('[data-projects-content]')?.append(projectItem);
}
