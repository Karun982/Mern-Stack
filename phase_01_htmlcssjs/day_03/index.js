var button = document.getElementById("submit")

button.addEventListener("click",handleClick)

function handleClick(){
    // alert("Button is triggered")
    var inputUrl=document.getElementById("url").value
    console.log(inputUrl)
    var title = document.getElementById("title").value
    var rating = document.getElementById("rating").value

    var movieCard = document.getElementById("movieCardDiv")

    movieCard.innerHTML+=`
        <div class="card">
                <img src="${inputUrl}" alt="">
                <p>Movie: ${title}</p>
                <h3>Rating: ${rating}</h3>
            </div>
    `
}

// ${} template literal
// document.querySelector("")