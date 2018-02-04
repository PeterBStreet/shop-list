window.onload = function () {
	initShoppingList()
};

function initShoppingList() {
	let form = document.getElementByID("item-form")

	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

function handleItemForm (event, formRef) {
	if(event.preventDefault) {
		event.preventDefault();
	}

	return false;

}
