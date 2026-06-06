//your JS code here. If required.
const form=document.getElementById("loginForm");
const username=document.getElementById("username");
const password=document.getElementById("password");
const checkbox=document.getElementById("checkbox");
const btn=document.getElementById("submit");
const existingBtn=document.getElementById("existing");

if (
    localStorage.getItem("username") &&
    localStorage.getItem("password")
) {
    existingBtn.style.display = "block";
}

form.addEventListener("submit", function(e){
	e.preventDefault();
	const user=username.value;
	const pass=password.value;
	alert(`Logged in as ${user}`);
	if(checkbox.checked){
		localStorage.setItem("username",user);
		localStorage.setItem("password",pass);
	}
	else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
	  if (
        localStorage.getItem("username") &&
        localStorage.getItem("password")
    ) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
});
existingBtn.addEventListener("click",function(){
	let savedUser=localStorage.getItem("username");

	if(savedUser){
		alert(`Logged in as ${savedUser}`);
	}
})
