// const ul = document.querySelector('#players')

// ul.insertAdjacentHTML("beforeend", "<li>Luke</li>");
// ul.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

// const list = document.querySelector("#players");
// const element = list.querySelector(".red");

// console.log(element.innerText);

// const countryList = document.querySelector('#fifa-wins')
// countryList.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>')

// const hiddenElement = document.querySelector('.hide-this')
// hiddenElement.classList.toggle('red')

// hiddenElement.style.color = 'red'

// const input = document.querySelector('#email')

// input.value = 'test@test.com'
// console.log(input.value)

// const a = document.querySelector('#home')

// console.log(a.innerHTML)

// const boris = document.getElementById('user');
// console.log(boris.dataset.uid);
// console.log(boris.dataset.githubNickname);

// boris.insertAdjacentHTML('afterend', `<a href="https://github.com/${boris.dataset.githubNickname}"> Github </a>`)

// const btn = document.querySelector('#show-popup')

// btn.addEventListener('click', (event) => {
//   console.log(event)
//   alert('Gimme your email')
// })

// const romain = document.getElementById("romain");

// romain.addEventListener("click", (event) => {
//   // console.log(event);
//   // console.log(event.currentTarget);

//   event.currentTarget.classList.toggle('img-circle')
// })


document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    console.log(event.currentTarget)

    debugger

    event.currentTarget.classList.toggle("img-circle");
  });
});
