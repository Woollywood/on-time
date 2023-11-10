// Подключение функционала "Чертоги Фрилансера"
import { isMobile, FLS } from '../custom/functions.js';
// Подключение списка активных модулей
import { flsModules } from '../custom/modules.js';

// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение стилей из src/scss/libs
import '../../scss/libs/tippy.scss';

const files = [
	[],
	[],
	[],
	[
		{
			userAvatarPath: 'img/avatars/avatar-01.jpg',
			userName: 'Alyona Kolontaevskaya',

			messageDate: 'Aug 3, 8:00 AM',
			messageBody:
				'Нужно показать стейт редактирования. Должно быть возможно удалить коммент и закрыть попап с комментом',
		},
		{
			userAvatarPath: 'img/avatars/avatar-02.jpg',
			userName: 'Sergey Zadrutsky',

			messageDate: 'Nov 3, 11:30 PM',
			messageBody: 'Плюс удалить и закрыть кнопки',
		},
		{
			userAvatarPath: 'img/avatars/avatar-01.jpg',
			userName: 'Alyona Kolontaevskaya',

			messageDate: 'Aug 3, 8:00 AM',
			messageBody:
				'Нужно показать стейт редактирования. Должно быть возможно удалить коммент и закрыть попап с комментом',
		},
		{
			userAvatarPath: 'img/avatars/avatar-02.jpg',
			userName: 'Sergey Zadrutsky',

			messageDate: 'Nov 3, 11:30 PM',
			messageBody: 'Плюс удалить и закрыть кнопки',
		},
		{
			userAvatarPath: 'img/avatars/avatar-01.jpg',
			userName: 'Alyona Kolontaevskaya',

			messageDate: 'Aug 3, 8:00 AM',
			messageBody:
				'Нужно показать стейт редактирования. Должно быть возможно удалить коммент и закрыть попап с комментом',
		},
		{
			userAvatarPath: 'img/avatars/avatar-02.jpg',
			userName: 'Sergey Zadrutsky',

			messageDate: 'Nov 3, 11:30 PM',
			messageBody: 'Плюс удалить и закрыть кнопки',
		},
		{
			userAvatarPath: 'img/avatars/avatar-01.jpg',
			userName: 'Alyona Kolontaevskaya',

			messageDate: 'Aug 3, 8:00 AM',
			messageBody:
				'Нужно показать стейт редактирования. Должно быть возможно удалить коммент и закрыть попап с комментом',
		},
		{
			userAvatarPath: 'img/avatars/avatar-02.jpg',
			userName: 'Sergey Zadrutsky',

			messageDate: 'Nov 3, 11:30 PM',
			messageBody: 'Плюс удалить и закрыть кнопки',
		},
		{
			userAvatarPath: 'img/avatars/avatar-01.jpg',
			userName: 'Alyona Kolontaevskaya',

			messageDate: 'Aug 3, 8:00 AM',
			messageBody:
				'Нужно показать стейт редактирования. Должно быть возможно удалить коммент и закрыть попап с комментом',
		},
		{
			userAvatarPath: 'img/avatars/avatar-02.jpg',
			userName: 'Sergey Zadrutsky',

			messageDate: 'Nov 3, 11:30 PM',
			messageBody: 'Плюс удалить и закрыть кнопки',
		},
	],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
];

function render(fileId) {
	const id = +fileId;

	if (files[id].length) {
		return renderUsersCommentWrapper(files[id]);
	} else {
		return renderEmptyCommentWrapper();
	}
}

function renderEmptyCommentWrapper() {
	return `
		<div
			class="tooltip-comment tooltip-comment--empty">
			<header class="tooltip-comment__header">
				<div class="tooltip-comment__title">Comments</div>
				<div class="tooltip-comment__header-actions">
					<button class="tooltip-comment__delete" data-button-delete>
						<img src="img/icons/delete.svg" alt="icon" />
					</button>
					<button class="tooltip-comment__close" data-button-close>
						<img src="img/icons/close.svg" alt="icon">
					</button>
				</div>
			</header>
			<ul class="tooltip-comment__comment-list"></ul>
			<div class="tooltip-comment__action-send">
				<div class="tooltip-comment__input-wrapper input" onclick="this.querySelector('input').focus()">
					<input
						class="tooltip-comment__input"
						type="text"
						placeholder="Add a Comment"
						data-comment-input />
					<button class="tooltip-comment__send" data-button-send>
						<svg>
							<use xlink:href="img/icons/icons.svg#send"></use>
						</svg>
					</button>
				</div>
			</div>
		</div>
	`;
}

function renderUsersCommentWrapper(usersList) {
	return `
		<div
			class="tooltip-comment">
			<header class="tooltip-comment__header">
				<div class="tooltip-comment__title">Comments</div>
				<div class="tooltip-comment__header-actions">
					<button class="tooltip-comment__delete" data-button-delete>
						<img src="img/icons/delete.svg" alt="icon" />
					</button>
					<button class="tooltip-comment__close" data-button-close>
						<img src="img/icons/close.svg" alt="icon">
					</button>
				</div>
			</header>
			<ul class="tooltip-comment__comment-list">
				${usersList
					.map((user) => {
						return `
						<li class="tooltip-comment__comment-item comment-user">
							<div class="comment-user__top">
								<div class="comment-user__avatar">
									<img src="${user.userAvatarPath}" alt="avatar" />
								</div>
								<div class="comment-user__info">
									<div class="comment-user__name">${user.userName}</div>
									<div class="comment-user__date">${user.messageDate}</div>
								</div>
								<button class="comment-user__more">
									<img src="img/icons/more.svg" alt="icon" />
								</button>
							</div>
							<div class="comment-user__comment">${user.messageBody}</div>
						</li>
					`;
					})
					.join('')}
			</ul>
			<div class="tooltip-comment__action-send">
				<div class="tooltip-comment__input-wrapper input" onclick="this.querySelector('input').focus()">
					<input
						class="tooltip-comment__input"
						type="text"
						placeholder="Add a Comment"
						data-comment-input />
					<button class="tooltip-comment__send" data-button-send>
						<svg>
							<use xlink:href="img/icons/icons.svg#send"></use>
						</svg>
					</button>
				</div>
			</div>
		</div>
	`;
}

document.addEventListener('DOMContentLoaded', (event) => {
	setTimeout(() => {
		flsModules.tippy = tippy('[data-tippy-content]', {
			content: (reference) => {
				const itemBody = reference.closest('.managers-files-item');
				const itemBodyId = itemBody.dataset.fileItemId;
				return render(itemBodyId);
			},
			allowHTML: true,
			appendTo: (parent) => parent.closest('.new-project-drawer'),
			placement: 'auto',
			arrow: false,
			trigger: 'click',
			interactive: true,

			onCreate: (event) => {
				const popper = event.popper;
				const itemBody = event.reference.closest('.managers-files-item');
				const sendButton = popper.querySelector('[data-button-send]');
				const inputMessage = popper.querySelector('[data-comment-input]');

				const createTippyEvent = new CustomEvent('createTippy', { detail: { instance: popper } });
				setTimeout(() => {
					itemBody.dispatchEvent(createTippyEvent);
				}, 0);

				const sendMessageEvent = new CustomEvent('sendMessage', { detail: { message: null } });
				sendButton.addEventListener('click', (event) => {
					sendMessageEvent.detail.message = inputMessage.value;
					inputMessage.value = '';
					itemBody.dispatchEvent(sendMessageEvent);
				});
			},

			// onMount: (event) => {
			// 	if (window.innerWidth < 479.98) {
			// 		const popper = event.popper;
			// 		console.log(popper.style.transform);
			// 	}
			// },

			// onShow: (event) => {
			// 	if (window.innerWidth < 479.98) {
			// 		const popper = event.popper;
			// 		console.log(popper.style.transform = '');
			// 	}
			// },

			// onShown: (event) => {
			// 	if (window.innerWidth < 479.98) {
			// 		const popper = event.popper;
			// 		console.log(popper.style.transform = '');
			// 	}
			// },
		});

		document.querySelectorAll('[data-tippy-content]').forEach((item) => {
			const instance = item._tippy;
			// instance.setProps({
			// 	placement: 'left',
			// });
			const popper = instance.popper;
			const buttonClose = popper.querySelector('[data-button-close]');
			buttonClose?.addEventListener('click', (event) => instance.hide());
		});
	}, 0);
});
