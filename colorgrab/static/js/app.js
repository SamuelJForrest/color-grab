// variables
const btn = document.querySelector(".button-wrap > .button");
const btnWrap = document.querySelector(".button-wrap");
const submitBtn = document.querySelector(".submit-button-wrap > .button");
const submitBtnWrap = document.querySelector(".submit-button-wrap");
const btnModifiers = ["__red", "__blue", "__yellow", "__green", "__pink"];
let removeColors;

// functions
const removeAllColors = (elem) => {
	btnModifiers.forEach((color) => {
		if (btn !== null) {
			btn.classList.remove(`${color}`);
		}

		if (submitBtn !== null) {
			submitBtn.classList.remove(`${color}`);
		}
	});
};

const addColor = (elem) => {
	clearTimeout(removeColors);
	let randomNum = Math.floor(Math.random() * btnModifiers.length);
	elem.classList.add(`${btnModifiers[randomNum]}`);
};

// event listeners
if (submitBtnWrap !== null) {
	submitBtnWrap.addEventListener("mouseenter", () => {
		addColor(submitBtn);
	});
}

if (submitBtnWrap !== null) {
	submitBtnWrap.addEventListener("mouseleave", () => {
		removeColors = setTimeout(removeAllColors, 500);
	});
}

if (btnWrap !== null) {
	btnWrap.addEventListener("mouseenter", () => {
		addColor(btn);
	});
}

if (btnWrap !== null) {
	btnWrap.addEventListener("mouseleave", () => {
		removeColors = setTimeout(removeAllColors, 500);
	});
}
