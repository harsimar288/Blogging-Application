document.querySelector("#button").addEventListener("click",() =>
{
    const xhr=new XMLHttpRequest()
    const value=document.querySelector("#search").value

    
    
    //let url=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCgAdwuoVqjcIiVoZrqGpaKf7SYK3FXt7g&part=snippet&q=${value}&maxResults=100`;
    let url=`https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11`;
    xhr.open('GET',url)
console.log(`ReadyState - ${xhr.readyState}`)


//execute the function when ready state change
xhr.onreadystatechange=()=>{
	console.log(`readystate - ${xhr.readyState}`)
	if(xhr.readyState==4 && xhr.status==200){
	var objectResponse = JSON.parse(xhr.responseText)
	console.log(objectResponse)
	var output=''
	for(i=0;i<50;i++)
	{
	output+=`
    
    <div class="card" style="width: 18rem;">
  <div class="card-body ">
    <h5 class="card-title">${objectResponse[i].title}</h5>
    <p class="card-text">${objectResponse[i].body}</p>
   
  </div>
</div>
<br><br><br>
    `
    }
	document.querySelector("#content").innerHTML=output;
	
	
    }
}
	
//send the request
xhr.send();

})
document.querySelector("#su").addEventListener('click',theCloak);
function theCloak() {
	document.getElementById("signme").style.display="block";
} 
