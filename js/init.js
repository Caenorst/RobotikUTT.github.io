$(function() {
	// Parallax
	$('#banner').parallax({
		imageSrc: document.location.origin + '/images/groupe.jpg',
		position: 'center center',
		naturalWidth: 1395,
		naturalHeight: 610,
		position: 'center -30px'
	});

	// Highlight js
	hljs.initHighlightingOnLoad();
});
