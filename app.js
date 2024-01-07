const memoryContainer = document.getElementById("container-memo")
let elements = ["PHP", "Javascript", "NodeJS", "MongoDB", "Laravel", "React"]
elements = [...elements, ...elements]
let checked = []
let allow = true
elements.sort(() => 0.5 - Math.random())
elements.map((a) => {
    const card = document.createElement("div")
    card.addEventListener("click", () => {
        if (card.classList.contains("active") || !allow) {
            return;
        }
        card.classList.add("active")
        checked.push(card)
        if (checked.length === 2) {
            console.log("2dedi")
            if (checked[0].textContent === checked[1].textContent) {
                console.log("beraberdi")
                checked.map((a) => a.classList.add("checked"))
            } else {
                setTimeout(() => {
                    [...document.querySelectorAll(".active:not(.checked)")].map((a) =>
                        a.classList.remove("active")
                    )
                }, 400);
            }
            checked.length = 0
        }
        let matches = document.querySelectorAll(".checked")
        if (matches.length === elements.length) {
            console.log("oyun bitdi")
            alert("Oyun bitdi")
        }
    });
    card.classList.add("card")
    const cardInner = document.createElement("div")
    cardInner.classList.add("card-inner")
    const front = document.createElement("div")
    front.classList.add("front")
    const back = document.createElement("div")
    back.textContent = a
    back.classList.add("back")
    cardInner.append(front, back)
    card.append(cardInner)
    memoryContainer.append(card)
})

document.addEventListener("transitionstart", () => { allow = false })
document.addEventListener("transitionend", () => { allow = true })
 