const tabs=document.querySelectorAll('[data-tab-target]')
const tabContents=document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>{
	tab.addEventListener('click',() =>{
	const target=document.querySelector(tab.dataset.tabTarget)
	tabContents.forEach(tabContent =>{
		tabContent.classList.remove('active')
	})
	tabs.forEach(tab=> {
		tab.classList.remove('active')
	})
	tab.classList.add('active')
	
	
	
	
	target.classList.add('active')
	})
})


         const email=document.getElementById("email")
		const sub=document.getElementById("validate")
		sub.addEventListener('click',myfunction)
		function myfunction(){
			const email=document.getElementById("email")
			
			var p=document.getElementById("email").value.indexOf("vaniercollege");
			var regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if(document.getElementById("email").value===regx || p > -1){
			alert("correct email");
		

		   }
			 else{
			 
			 alert("Sorry ! incorrect id. Please enter id of vanier college");
			 }
		}

		