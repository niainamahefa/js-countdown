// VARIABLES GLOBALES
const MINUTES = 60
const HOURS = 60 * MINUTES
const DAYS = 24 * HOURS

const elements = {
	days: document.querySelector('#days'),
	hours: document.querySelector('#hours'),
	minutes: document.querySelector('#minutes'),
	seconds: document.querySelector('#seconds')
 
}

let previousDiff = {}
const countdown = document.querySelector('#countdown')
const launchdate = Date.parse(countdown.dataset.time) / 1000

function refreshCountdown() {
	const difference = launchdate - Date.now() / 1000
	if (difference <= 0) {
		document.location.reload()
		return
	}
	const diff = {
		// Arrondissement
		days: Math.floor(difference / DAYS),
		hours: Math.floor(difference % DAYS / HOURS),
		minutes: Math.floor(difference % HOURS / MINUTES),
		seconds: Math.floor(difference % MINUTES),
	}
	updateDom(diff)
	window.setTimeout(() => {
		window.requestAnimationFrame(refreshCountdown)
	}, 1000)
}

function updateDom(diff) {
	Object.keys(diff).forEach((key) => {
		if (previousDiff[key] != diff[key]) {
			elements[key].innerText = diff[key]
		console.log(`Updating ${key}`)	
		}
	})
	previousDiff = diff

}

refreshCountdown()
