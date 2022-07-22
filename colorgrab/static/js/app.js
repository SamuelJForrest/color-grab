// variables
const submitBtnWrap = document.querySelector(".submit-button-wrap");
const submitBtn = document.querySelector(".submit-button-wrap > .button");
const btnModifiers = ["__red", "__blue", "__yellow", "__green", "__pink"];
let removeColors;

// functions
const removeAllColors = () => {
	btnModifiers.forEach((color) => {
		submitBtn.classList.remove(`${color}`);
	});
};

// event listeners
submitBtnWrap.addEventListener("mouseenter", () => {
	clearTimeout(removeColors);
	let randomNum = Math.floor(Math.random() * btnModifiers.length);
	submitBtn.classList.add(`${btnModifiers[randomNum]}`);
});

submitBtnWrap.addEventListener("mouseleave", () => {
	removeColors = setTimeout(removeAllColors, 500);
});
