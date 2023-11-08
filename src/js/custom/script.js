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

	getSaveProjectButtonHeight();
	window.addEventListener('resize', getSaveProjectButtonHeight);

	projectsInit();

	projectsFilesInit();

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

function getSaveProjectButtonHeight() {
	const buttonWrapper = document.querySelector('[data-save-project]');
	const offsetHeight = buttonWrapper.offsetHeight;
	const projectTabs = document
		.querySelectorAll('[data-project-tab]')
		.forEach((tab) => (tab.style.cssText += `--button-height: ${offsetHeight}px`));
}

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

function projectsFilesInit() {
	projectFileLoadingCreate({
		type: 'normal',
		id: 0,
		fileName: 'IMG_999999.JPG',
		imagePath: 'img/managers-files/image-01.jpg',
		iconExtPath: 'img/icons/icons.svg#x',
		description: 'Aug 2, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: false,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'mime-type',
		id: 1,
		fileName: 'FileNameShort',
		iconExtPath: 'img/icons/icons.svg#w',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: false,
		dialogType: 'fill',
	});

	projectFileCreate({
		type: 'normal',
		id: 2,
		fileName: 'IMG_999_99_999999.JPG',
		imagePath: 'img/managers-files/image-01.jpg',

		previewPath: 'img/managers-files/slider-preview.jpg',
		thumbPath: 'img/managers-files/image-01.jpg',

		iconExtPath: 'img/icons/icons.svg#image',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: false,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'normal',
		id: 3,
		fileName: 'IMG_999_99_999999.JPG',
		imagePath: 'img/managers-files/image-01.jpg',

		previewPath: 'img/managers-files/slider-preview.jpg',
		thumbPath: 'img/managers-files/image-02.jpg',

		iconExtPath: 'img/icons/icons.svg#image',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: false,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'normal',
		id: 4,
		fileName: 'IMG_999_99_999999.JPG',
		imagePath: 'img/managers-files/image-01.jpg',

		previewPath: 'img/managers-files/slider-preview.jpg',
		thumbPath: 'img/managers-files/image-01.jpg',

		iconExtPath: 'img/icons/icons.svg#image',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: false,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'normal',
		id: 5,
		fileName: 'IMG_999_99_999999.JPG',
		imagePath: 'img/managers-files/image-01.jpg',

		previewPath: 'img/managers-files/slider-preview.jpg',
		thumbPath: 'img/managers-files/image-02.jpg',

		iconExtPath: 'img/icons/icons.svg#image',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: false,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'normal',
		id: 6,
		fileName: 'IMG_999_99_999999.JPG',
		imagePath: 'img/managers-files/image-01.jpg',

		previewPath: 'img/managers-files/slider-preview.jpg',
		thumbPath: 'img/managers-files/image-01.jpg',

		iconExtPath: 'img/icons/icons.svg#image',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: false,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'normal',
		id: 7,
		fileName: 'IMG_999_99_999999.JPG',
		imagePath: 'img/managers-files/image-01.jpg',

		previewPath: 'img/managers-files/slider-preview.jpg',
		thumbPath: 'img/managers-files/image-02.jpg',

		iconExtPath: 'img/icons/icons.svg#image',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: false,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'normal',
		id: 8,
		fileName: 'IMG_999_99_999999.JPG',
		imagePath: 'img/managers-files/image-01.jpg',

		previewPath: 'img/managers-files/slider-preview.jpg',
		thumbPath: 'img/managers-files/image-01.jpg',

		iconExtPath: 'img/icons/icons.svg#image',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: false,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'mime-type',
		id: 9,
		fileName: 'FileNameLong_with2_rows_with_with2_rows_with_with2_rows... end_of.pdf',
		iconExtPath: 'img/icons/icons.svg#pdf',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: true,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'mime-type',
		id: 10,
		fileName: 'FileNameLong_with2_rows_with_with2_rows_with_with2_rows... end_of.pdf',
		iconExtPath: 'img/icons/icons.svg#pdf',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: true,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'mime-type',
		id: 11,
		fileName: 'FileNameLong_with2_rows_with_with2_rows_with_with2_rows... end_of.pdf',
		iconExtPath: 'img/icons/icons.svg#pdf',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: true,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'mime-type',
		id: 12,
		fileName: 'FileNameLong_with2_rows_with_with2_rows_with_with2_rows... end_of.pdf',
		iconExtPath: 'img/icons/icons.svg#pdf',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: true,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'mime-type',
		id: 13,
		fileName: 'FileNameLong_with2_rows_with_with2_rows_with_with2_rows... end_of.pdf',
		iconExtPath: 'img/icons/icons.svg#pdf',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: true,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'mime-type',
		id: 14,
		fileName: 'FileNameLong_with2_rows_with_with2_rows_with_with2_rows... end_of.pdf',
		iconExtPath: 'img/icons/icons.svg#pdf',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: true,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'mime-type',
		id: 15,
		fileName: 'FileNameLong_with2_rows_with_with2_rows_with_with2_rows... end_of.pdf',
		iconExtPath: 'img/icons/icons.svg#pdf',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: true,
		dialogType: 'empty',
	});

	projectFileCreate({
		type: 'mime-type',
		id: 16,
		fileName: 'FileNameLong_with2_rows_with_with2_rows_with_with2_rows... end_of.pdf',
		iconExtPath: 'img/icons/icons.svg#pdf',
		description: 'Aug 3, 8:00 AM, Sergey Zadrutsky',
		descriptionCrossed: true,
		dialogType: 'empty',
	});
}

function projectFileLoadingCreate({ type, ...other }) {
	console.log('project file create');

	switch (type) {
		case 'normal':
			projectFileLoadingNormalCreateGrid(other);
			break;
		case 'mime-type':
			projectFileLoadingMimeTypeCreateGrid(other);
			break;
	}

	projectFileLoadingCreateList(other);
}

function projectFileLoadingNormalCreateGrid(options) {
	const fileWrapper = document.createElement('div');
	fileWrapper.classList.add('managers-files-item');
	fileWrapper.classList.add('managers-files-item--grid');
	fileWrapper.dataset.fileItemId = options.id;
	fileWrapper.innerHTML = `
		<div class="managers-files-item__body">
			<div class="managers-files-item__controlls">
				<button
					class="managers-files-item__controll-item"
					data-tippy-content>
					<img
						src="${options.dialogType === 'empty' ? `img/icons/dialog--empty.svg` : `img/icons/dialog--empty.svg`}"
						alt="icon" />
				</button>
				<button
					class="managers-files-item__controll-item"
					data-delete-file
					data-popup="#delete-file--pl">
					<img src="img/icons/delete.svg" alt="icon" />
				</button>
			</div>
			<div class="managers-files-item__background-ibg">
				<img
					src="${options.imagePath}"
					alt="background" />
			</div>
		</div>
		<footer class="managers-files-item__footer">
			<div class="managers-files-item__load-progress">
				<div
					class="managers-files-item__load-progress-line">
					<div
						class="managers-files-item__load-progress-line-inner"
						style="width: 0%"></div>
				</div>
				<div
					class="managers-files-item__load-progress-text">
					0%
				</div>
			</div>
		</footer>
	`;

	document.querySelector('.managers-files__tab.managers-files__tab--grid').append(fileWrapper);
}

function projectFileLoadingMimeTypeCreateGrid(options) {
	const fileWrapper = document.createElement('div');
	fileWrapper.classList.add('managers-files-item');
	fileWrapper.classList.add('managers-files-item--grid');
	fileWrapper.dataset.fileItemId = options.id;
	fileWrapper.innerHTML = `
		<div class="managers-files-item__body">
			<div class="managers-files-item__controlls">
				<button
					class="managers-files-item__controll-item"
					data-tippy-content>
					<img src="${
						options.dialogType === 'empty' ? `img/icons/dialog--empty.svg` : `img/icons/dialog--empty.svg`
					}" alt="icon" />
				</button>
				<button
					class="managers-files-item__controll-item"
					data-delete-file
					data-popup="#delete-file--pl">
					<img src="img/icons/delete.svg" alt="icon" />
				</button>
			</div>
			<div class="managers-files-item__mime-type">
				<div class="managers-files-item__mime-type-icon">
					<svg>
						<use
							xlink:href="${options.iconExtPath}"></use>
					</svg>
				</div>
				<div class="managers-files-item__mime-type-name">
					${options.fileName}
				</div>
			</div>
		</div>
		<footer class="managers-files-item__footer">
			<div class="managers-files-item__load-progress">
				<div
					class="managers-files-item__load-progress-line">
					<div
						class="managers-files-item__load-progress-line-inner"
						style="width: 0%"></div>
				</div>
				<div
					class="managers-files-item__load-progress-text">
					0%
				</div>
			</div>
		</footer>
	`;

	document.querySelector('.managers-files__tab.managers-files__tab--grid').append(fileWrapper);
}

function projectFileLoadingCreateList(options) {
	const fileWrapper = document.createElement('div');
	fileWrapper.classList.add('managers-files-item');
	fileWrapper.classList.add('managers-files-item--list');
	fileWrapper.dataset.fileItemId = options.id;
	fileWrapper.innerHTML = `
		<div class="managers-files-item__body">
			<div class="managers-files-item__body--mobile-wrapper"></div>
			<div class="managers-files-item__file-info" data-da="[data-file-item-id='${
				options.id
			}'] .managers-files-item__body--mobile-wrapper, 589.98">
				<div class="managers-files-item__file-ext-icon">
					<svg>
						<use
							xlink:href="${options.iconExtPath}"></use>
					</svg>
				</div>
				<div class="managers-files-item__file-name">
					${options.fileName}
				</div>
			</div>
			<div class="managers-files-item__loading-wrapper">
				<div
					class="managers-files-item__loading-line-wrapper">
					<div
						class="managers-files-item__loading-line-progress"
						style="width: 0%"></div>
				</div>
				<div class="managers-files-item__loading-value">
					0%
				</div>
			</div>
			<div class="managers-files-item__controlls" data-da="[data-file-item-id='${
				options.id
			}'] .managers-files-item__body--mobile-wrapper, 589.98">
				<button
					class="managers-files-item__controll-item"
					data-tippy-content>
					<img
						src="${options.dialogType === 'empty' ? `img/icons/dialog--empty.svg` : `img/icons/dialog.svg`}"
						alt="icon" />
				</button>
				<button
					class="managers-files-item__controll-item"
					data-delete-file
					data-popup="#delete-file--pl">
					<img
						src="img/icons/delete.svg"
						alt="icon" />
				</button>
			</div>
		</div>
	`;

	document.querySelector('.managers-files__tab-body.managers-files__tab-body--list').append(fileWrapper);
}

function projectFileCreate({ type, previewPath, thumbPath, ...other }) {
	switch (type) {
		case 'normal':
			projectFileNormalCreateGrid(other);
			addFileToSlide({ previewPath, thumbPath });
			break;
		case 'mime-type':
			projectFileMimeTypeCreateGrid(other);
			break;
	}

	projectFileCreateList(other);
}

function projectFileNormalCreateGrid(options) {
	const fileWrapper = document.createElement('div');
	fileWrapper.classList.add('managers-files-item');
	fileWrapper.classList.add('managers-files-item--grid');
	fileWrapper.dataset.fileItemId = options.id;
	fileWrapper.innerHTML = `
		<div class="managers-files-item__body">
			<div class="managers-files-item__controlls">
				<button
					class="managers-files-item__controll-item"
					data-tippy-content>
					<img
						src="${options.dialogType === 'empty' ? `img/icons/dialog--empty.svg` : `img/icons/dialog--empty.svg`}"
						alt="icon" />
				</button>
				<button
					class="managers-files-item__controll-item"
					data-delete-file
					data-popup="#delete-file--pl">
					<img src="img/icons/delete.svg" alt="icon" />
				</button>
			</div>
			<a class="managers-files-item__background-ibg" href="#" data-popup="#files-gallery--pl">
				<img
					src="${options.imagePath}"
					alt="background" />
			</a>
		</div>
		<footer class="managers-files-item__footer">
			<div class="managers-files-item__description">
				${options.description}
			</div>
		</footer>
	`;

	document.querySelector('.managers-files__tab.managers-files__tab--grid').append(fileWrapper);
}

function projectFileMimeTypeCreateGrid(options) {
	const fileWrapper = document.createElement('div');
	fileWrapper.classList.add('managers-files-item');
	fileWrapper.classList.add('managers-files-item--grid');
	fileWrapper.dataset.fileItemId = options.id;
	fileWrapper.innerHTML = `
		<div class="managers-files-item__body">
			<div class="managers-files-item__controlls">
				<button
					class="managers-files-item__controll-item"
					data-tippy-content>
					<img src="${
						options.dialogType === 'empty' ? `img/icons/dialog--empty.svg` : `img/icons/dialog--empty.svg`
					}" alt="icon" />
				</button>
				<button
					class="managers-files-item__controll-item"
					data-delete-file
					data-popup="#delete-file--pl">
					<img src="img/icons/delete.svg" alt="icon" />
				</button>
			</div>
			<div class="managers-files-item__mime-type">
				<div class="managers-files-item__mime-type-icon">
					<svg>
						<use
							xlink:href="${options.iconExtPath}"></use>
					</svg>
				</div>
				<div class="managers-files-item__mime-type-name">
					${options.fileName}
				</div>
			</div>
		</div>
		<footer class="managers-files-item__footer">
			<div class="managers-files-item__description">
				${options.description}
			</div>
		</footer>
	`;

	document.querySelector('.managers-files__tab.managers-files__tab--grid').append(fileWrapper);
}

function projectFileCreateList(options) {
	const fileWrapper = document.createElement('div');
	fileWrapper.classList.add('managers-files-item');
	fileWrapper.classList.add('managers-files-item--list');
	fileWrapper.dataset.fileItemId = options.id;
	fileWrapper.innerHTML = `
		<div class="managers-files-item__body">
			<div class="managers-files-item__body--mobile-wrapper"></div>
			<div class="managers-files-item__file-info" data-da="[data-file-item-id='${
				options.id
			}'] .managers-files-item__body--mobile-wrapper, 589.98">
				<div class="managers-files-item__file-ext-icon">
					<svg>
						<use
							xlink:href="${options.iconExtPath}"></use>
					</svg>
				</div>
				<div class="managers-files-item__file-name">
					${options.fileName}
				</div>
			</div>
			<div class="managers-files-item__author-info ${
				options.descriptionCrossed ? `managers-files-item__author-info--line-through` : ``
			}">
				${options.description}
			</div>
			<div class="managers-files-item__controlls" data-da="[data-file-item-id='${
				options.id
			}'] .managers-files-item__body--mobile-wrapper, 589.98">
				<button
					class="managers-files-item__controll-item"
					data-tippy-content>
					<img
						src="${options.dialogType === 'empty' ? `img/icons/dialog--empty.svg` : `img/icons/dialog.svg`}"
						alt="icon" />
				</button>
				<button
					class="managers-files-item__controll-item"
					data-delete-file
					data-popup="#delete-file--pl">
					<img
						src="img/icons/delete.svg"
						alt="icon" />
				</button>
			</div>
		</div>
	`;

	document.querySelector('.managers-files__tab-body.managers-files__tab-body--list').append(fileWrapper);
}

function addFileToSlide(pathObject) {
	addFileToSlidePreview(pathObject.previewPath);
	addFileToSlideThumb(pathObject.thumbPath);
}

function addFileToSlidePreview(imgPath) {
	const slider = document.createElement('div');
	slider.classList.add('slider-gallery__slide');
	slider.innerHTML = `
		<div class="slider-gallery__slide-wrapper">
			<img src="${imgPath}" alt="slider-preview" />
		</div>
	`;
	document.querySelector('[data-slider-preview]').append(slider);
}

function addFileToSlideThumb(imgPath) {
	const slider = document.createElement('div');
	slider.classList.add('slider-thumb-gallery__slide');
	slider.innerHTML = `
		<div class="slider-thumb-gallery__slide-wrapper">
			<img src="${imgPath}" alt="slider-preview" />
		</div>
	`;
	document.querySelector('[data-slider-thumb]').append(slider);
}
