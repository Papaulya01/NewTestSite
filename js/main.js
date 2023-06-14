document.addEventListener('DOMContentLoaded', function() {
	const versionItem = document.querySelectorAll('.version-btn');

	versionItem.forEach(function (item) {
		item.addEventListener("click", function () {
			item.classList.toggle("active");
		});
	});
});