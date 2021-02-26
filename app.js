const quiz = [
{
    question: "楽天会員で最も高いランクは？",
    answers:["シルバー",
    "ゴールド",
    "ダイヤモンド",
    "プラチナ"],
    correct: "ダイヤモンド"
},{question: "最も高いランクになるための条件として間違っているものは？",
    answers:["楽天カード所有",
    "一回で500ポイント以上獲得したことがある",
    "過去半年で4000ポイント以上獲得",
    "過去半年で獲得ポイント回数30回以上"],
    correct: "一回で500ポイント以上獲得したことがある"
},{question: "楽天カード所有で楽天会員の時楽天でんき支払いはポイント何倍か",
    answers:["2",
    "2.5",
    "3",
    "3.5"],
    correct: "3.5",
},{question: "最高ランクの時誕生日にもらえるポイント数は？",
    answers:["500",
    "700",
    "900",
    "1000"],
    correct: "700"
},{question: "楽天会員でない人が会員になるべきなのはいつ？",
answers:["今",
"今",
"今",
"今"],
correct: "今"
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
        window.alert(`終了！あなたの正解数は100点中${score*20}点です`);
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


