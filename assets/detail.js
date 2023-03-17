let id=new URLSearchParams(location.search).get("id") 
let row=document.querySelector("row")
fetch=`https://rickandmortyapi.com/api/character/${id}`

.then((response) => response.json())
.then((data)=>{

    row.innerHTML=`<div class="col-6 mt-5" >
    <img src="${data.results.image} " alt="">
    <h5 class="card-title" style="margin-bottom: 10px; margin-top: 20px;">Name:${data.results.name}</h5>
<p class="card-text"><b>Status:</b><span>${data.results.status}</span></p>
<p class="card-text"><b>Species:</b><span>${data.results.species}</span></p>
<p class="card-text"><b>Gender:</b><span>${data.results.gender}</span></p>
</div>`
    
})