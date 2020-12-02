require('./style.css');

window.onload = function() {
    
    let CardType = () => {
        let cardTypeList = ["clubs", "diamantes", "hearts", "spades"];
        let randomType = Math.floor(Math.random() * cardTypeList.length);
        
        return cardTypeList[randomType];
    }

    let CardNum = () => {
        let cardNumList = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
        let randomNum = Math.floor(Math.random() * cardNumList.length);
    
        return cardNumList[randomNum];
    }

    let card = document.querySelector(".card");
    let content = document.createElement("span");
    card.appendChild(content);

    content.innerHTML = CardNum();
    
    card.classList.add(CardType())
}