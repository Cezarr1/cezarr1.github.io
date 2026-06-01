fetch('/menu/')
	.then(r => r.text())
	.then(html => {
		document.getElementById('menu-container').innerHTML = html;
});

fetch('/menu_mobile/')
	.then(r => r.text())
	.then(html => {
		document.getElementById('menu-mobile-container').innerHTML = html;
});
