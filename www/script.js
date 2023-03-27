async function getCat() {
	try {
		const res = await fetch('https://api.sefinek.net/api/v2/random/animal/cat');
		const data = await res.json();

		if (!data.success) {
			console.error(data);
			return null;
		}

		return data.message;
	} catch (err) {
		console.error(err);
		return null;
	}
}

window.addEventListener('load', async () => {
	const cat = await getCat();
	if (!cat) return;

	document.body.style.backgroundImage = `url(${cat})`;
});