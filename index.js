document.addEventListener("DOMContentLoaded", () => {

	let projects_btn = document.getElementById("projects");
	let back_btn = document.getElementById("back");

	let projects_page = document.getElementById("projects_page")
	let main_page = document.getElementById("main_page")

	projects_btn.onclick = () =>{
		console.log("clicked")
		projects_page.style.display = "block"
		main_page.style.display = "none"
	}
	back_btn.onclick = () =>{
		console.log("clicked")
		projects_page.style.display = "none"
		main_page.style.display = "block"

	}
	


})
