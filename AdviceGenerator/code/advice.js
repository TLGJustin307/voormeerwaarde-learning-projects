//Element variables
const dice = document.getElementById('dice')
const adviceNumber = document.getElementById('advice-number')
const adviceText = document.getElementById('advice-text')


//Set advice function
const setAdvice = _ => {
    let data = dataFromUrl("https://api.adviceslip.com/advice")
    setTextAdvice(data)
}

//Grab data from url function
const dataFromUrl = url => {
    return fetch(url, {
        cache: "no-cache"
    })
}

//Set the HTML text for advice
const setTextAdvice = data => {
    data.then(response => response.json()).then(data => {
        let id = data["slip"]["id"]
        adviceNumber.innerHTML = `Advice #${id}`

        let advice = data["slip"]["advice"]
        adviceText.innerHTML = advice
    })
}


//Click event listener
dice.addEventListener('click', setAdvice)

//On first load
setAdvice()