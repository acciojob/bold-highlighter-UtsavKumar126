function highlight() {
    //Write your code here
	const high=document.getElementsByTagName("STRONG");
	for(let i=0;i<high.length;i++){
		high[i].style.color="green";
	}
}


function return_normal() {
    //Write your code here
    const high=document.getElementsByTagName("STRONG");
	for(let i=0;i<high.length;i++){
		high[i].style.color="black";
	}
    
}
