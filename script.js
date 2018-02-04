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

	let itemHtml = addItemToShoppingList();
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);
	return false;

}

function addItemToShoppingList() {
	let itemName = document.getElementByID("item-name");
	let itemAmount = document.getElementByID("item-amount");
}

function creatListItemHtml() {
	return '<li>
	Item Name - Amount
	</li>
	';
}