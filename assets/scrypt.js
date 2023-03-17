let row=document.querySelector("#row1")
fetch("https://rickandmortyapi.com/api/character")
.then((response) => response.json())
.then((data) => {
    for (let index = 0; index < data.results.length; index++) {
      row.innerHTML+=`<div class="col-lg-3 col-sm-12">
      <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${data.results[index].image}" alt="Card image cap" >
          <div class="card-body">
            <h5 class="card-title">Name:<a href="detail.html?id=${data.results[index].id}" target="_blank">${data.results[index].name}</a></h5>
            <p class="card-text"><b>Status:</b><span>${data.results[index].status}</span></p>
            <p class="card-text"><b>Species:</b><span>${data.results[index].species}</span></p>
            <p class="card-text"><b>Gender:</b><span>${data.results[index].gender}</span></p>
          </div>`
    }
});
let input=document.querySelector("input")
input.addEventListener("keyup",function(){

    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
   
    .then((data)=>{
        row.innerHTML=" "
         for (let index = 0; index < data.results.length; index++) {
           if(data.results[index].name.trim().toLowerCase().includes(input.value.trim().toLowerCase())){
            row.innerHTML+=`<div class="col-3">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${data.results[index].image}" alt="Card image cap" >
                <div class="card-body">
                  <h5 class="card-title">Name:<a href="detail.html?id=${data.results[index].id}" target="_blank">${data.results[index].name}</a></h5>
                  <p class="card-text"><b>Status:</b><span>${data.results[index].status}</span></p>
                  <p class="card-text"><b>Species:</b><span>${data.results[index].species}</span></p>
                  <p class="card-text"><b>Gender:</b><span>${data.results[index].gender}</span></p>
                </div>`
           } 
         }
     }) 
})
