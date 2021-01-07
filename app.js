const quiz = [
{
    question: "さいとう先生の名前は？",
    answers:["齋藤　典央",
    "齋藤　典生",
    "齋藤　典男",
    "齋藤　典夫"],
    correct: "齋藤　典生"
},{question: "M1の三浦暢の愛称は？",
    answers:["アニキ",
    "マジシャン",
    "師匠",
    "あほ"],
    correct: "師匠"
},{question: "来年からB4は何人残る？",
    answers:["3",
    "5",
    "7",
    "9"],
    correct: "9",
},{question: "この中で来年存在しないのは？",
    answers:["田村",
    "金澤",
    "林",
    "神渡"],
    correct: "林"
}
];

const quizLength = quiz.length;
let  quizIndex = 0;
let score = 0;

const $button =document.getElementsByTagName("button")
let buttonLength = $button.length;

//クイズの問題文選択肢を定義
const setupQuiz = ()=> {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength ) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e)=> {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        //問題数があればまだこちらを実行
        setupQuiz();
    }else {
        //問題数がなければこちらを実行
        window.alert(`終了！あなたの正解数は100点中${score*20}です`);
    }
};

//ボタンをクリックしたら製誤判定
let handleIndex = 0;
while (handleIndex < buttonLength){
    $button[handleIndex].addEventListener("click",(e)=> {
        clickHandler(e);
    });
    handleIndex++;
};


