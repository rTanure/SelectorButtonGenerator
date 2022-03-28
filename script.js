const selectorContainer = document.getElementById("selectorContainer")
const selectorState = []

function clickCreateSelectors() {
	createSelectors()
	setSelectorColor()
}

function createSelectors() {
	const numberOfSelectorsInput = Number(document.getElementById("numberOfSelectorsInput").value)
	let html = ``
	for (let n = 0; n < numberOfSelectorsInput; n++) {
		html += `
	<div class="selector" id="selector`+n+`" onclick="selectorClick(`+n+`)">
		<div class="selectorSphere" id="selectorSphere`+n+`">

		</div>
	</div>
	`
	selectorState.push(false)
	}
	selectorContainer.innerHTML = html
	setSelectorsPosition()
	setSelectedHUD()
}

function setSelectorsPosition() {
	const numberOfSelectorsInput = Number(document.getElementById("numberOfSelectorsInput").value)
	for (let n = 0; n < numberOfSelectorsInput; n++) {
		let selectorSphere = document.getElementById("selectorSphere"+n)
		if (selectorState[n] === true) {
			selectorSphere.style.float = "right"
		} else{
			selectorSphere.style.float = "left"
		}
	}
}

function setSelectorColor() {
	const numberOfSelectorsInput = Number(document.getElementById("numberOfSelectorsInput").value)
	for (let n = 0; n < numberOfSelectorsInput; n++) {
		let selector = document.getElementById("selector"+n)
		if (selectorState[n] === true) {
			selector.style.background = "#0d6b09"
		} else {
			selector.style.background = "#c10a0a"
		}
	}
}

function selectorClick(selector) {
	resetSelectors()
	selectorState[selector] = true
	setSelectorsPosition()
	setSelectorColor()
	setSelectedHUD()
}

function resetSelectors() {
	const numberOfSelectorsInput = Number(document.getElementById("numberOfSelectorsInput").value)
	for (let n = 0; n < numberOfSelectorsInput; n++) {
		selectorState[n] = false
	}
}

function setSelectedHUD() {
	const numberOfSelectorsInput = Number(document.getElementById("numberOfSelectorsInput").value)
	let selectedMenu = document.getElementById("selectedSelectorNumber")
	for (let n = 0; n < numberOfSelectorsInput; n++) {
		if (selectorState[n] === true) {
			selectedMenu.innerHTML = `Selected: ${n + 1}`
		} else {

		}
	}
}