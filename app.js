QuestionArray = [
    {
        id: "1",
        Question: "Who is Current President of Pakistan?",
        Options: ["Mr Mamno Hussain", "Mr Aftab Hussain", "Mr Arif Alvi", "Mr Abrar ul Hassan"],
        answer: "Mr Arif Alvi"
    },
    {
        id: "2",
        Question: "Who is Current Priminster of Pakistan?",
        Options: ["Mr Mamno Hussain", "Mr Shahbaz Sharif", "Mr Arif Alvi", "Mr Abrar ul Hassan"],
        answer: "Mr Shahbaz Sharif"
    },
    {
        id: "3",
        Question: "Who is Current Minister of Sindh?",
        Options: ["Mr Syed Murad Ali Shah", "Mr Syed Qaim Ali Shah", "Mr Bilal Bhutto Zardari", "Mr Qasim Ali Bukhari"],
        answer: "Mr Syed Murad Ali Shah"

    },
    {
        id: "4",
        Question: "How many Provinces of Pakistan?",
        Options: ["Four", "Eight", "Four", "Five"],
        answer: "Four"
    },
    {
        id: "5",
        Question: "In which Province Kararchi is located?",
        Options: ["Punjab", "Sindh", "Balochistan", "Khabir Pakhtoon Khuwa"],
        answer: "Sindh"
    },
]


var lengthofQuiz=QuestionArray.length;
var millisecond = 0;
var second = 0;
var mint = 0;
var secondHtml = document.getElementById("second");
var mintHtml = document.getElementById("mint");

var interval = setInterval(() => {
    millisecond++;
    if (millisecond >= 3) {
        secondHtml.innerHTML = second;
        second++;
        millisecond = 0;
    }
    else if (second >= 60) {
        mint++;
        mintHtml.innerHTML = mint;
        second = 0;

    }
    else if (mint == 2 && second >= 1) {
        console.log(mint)
        console.log(second)
        clearInterval(interval);
    }

}, 300);

var btnText = document.getElementById("nextbtn");
var anchortage = document.getElementById("anchorTage")
var hquestion = document.getElementById("questions");
var totalQuestion = document.getElementById("FixNumber");
var incremntQuestion = document.getElementById("incrementNumber");
var hoption = document.getElementsByClassName("opti");
var lengthQuestion = QuestionArray.length;
function dataLoadFunction(e) {
    hquestion.innerHTML = QuestionArray[e].Question;
    for (var i = 0; i < QuestionArray[e].Options.length; i++) {
        hoption[i].innerHTML = QuestionArray[e].Options[i];
        totalQuestion.innerHTML = lengthQuestion;
        incremntQuestion.innerHTML = e + 1 + " ";
    }
    if(e+1==lengthQuestion){
        btnText.remove();
    }
}

var score = 0;
var nextQuestCount = 0;
function NextQuestion() {
    removeActiveClass()
    nextQuestCount++;
    dataLoadFunction(nextQuestCount)
    
}

function getActive(e) {
    removeActiveClass()
    e.classList.add("active");

}

function removeActiveClass() {
    var activeClass = document.getElementsByClassName("active");
    for (var i = 0; i < activeClass.length; i++) {
        activeClass[i].classList.remove("active");
    }
}



