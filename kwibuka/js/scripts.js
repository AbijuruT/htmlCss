const textField = document.getElementById('text')
const textMsg = `
Kwibuka kunshuro ya 28. Nifatanyije n'imiryango yabuze ababo knd mfashe uyu mwanya ngo nunamire abazize Jenoside yakorewe abatutsi mu 1994, Twibuke twiyubaka duharanire gushyira imbere ubumuntu, kubona umuntu kuruta kumubonamo ubwoko cq akarere runaka akomokamo.
Twese hamwe nkabanyarwanda dukomeze gushyira hamwe mukurwanya Jenoside ndetse n'ingengabitekerezo yayo.
Twibuke twiyubaka ~THoR                                  
`;

let textIndex = 0

function writeMsg() {
    textField.textContent = textMsg.slice(0, textIndex)
    textIndex++;

    if (textIndex > textMsg.length - 1) {
        textIndex = 0
    }
}
setInterval(writeMsg, 73)