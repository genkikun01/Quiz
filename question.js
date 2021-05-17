const quiz = [
    {
        question: "一番普及率が高いOSはどれ?",
        answers: [
            "Macintosh",
            "Linux(Ubuntu)",
            "Android",
            "Windows"
        ],
        correct: "Windows",
    },{
        question: "一番普及率が高いBrowserはどれ?",
        answers: [
            "Chrome",
            "Edge(Chromium)",
            "Firefox",
            "Opera"
        ],
        correct: "Chrome",
    },{
        question: "一番普及率が高いArtificialIntelligenceはどれ?",
        answers: [
            "Wasimo",
            "AIdog",
            "AIbo",
            "Pepper_Kun"
        ],
        correct: "Pepper_Kun",
    }
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
const setupQuiz = () =>{
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;

    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++
    }
}
setupQuiz();


const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        alert("正解!!おめでとう(^^)")
        score++;
    }
    else{
        alert("不正解です。もう一度トライ!!(´・ω・｀)")
    }

    quizIndex++

    if(quizIndex < quizLength){
        setupQuiz();
    }
    else{
        alert("お疲れい!!!(・∀・)");
        num = prompt("名前を入力してください");
        alert( num + "さんの正解数は" + score + "/" + quizLength + "です!!!!!");
    }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++
}
