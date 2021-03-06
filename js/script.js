// html elements 
var newElement = document.createElement('div');
var h1El_1 = document.createElement('h1');
var h1El_2 = document.createElement('h1');
var timer = document.createElement('h2');
var score = document.createElement('h2');
var newOl = document.createElement('ol');
var Li_1 = document.createElement('li');
var Li_2 = document.createElement('li');
var Li_3 = document.createElement('li');
var Li_4 = document.createElement('li');
var hr = document.createElement('hr');
var form = document.createElement('form');
var label = document.createElement('label');
var input = document.createElement('input');
var input2 = document.createElement('input');



// html classes and class values
var newBtn = document.createElement('button');

var btnClass = document.createAttribute('class');
btnClass.value = 'start-btn';

var h1Class = document.createAttribute('class');
h1Class.value = 'question';

var h1El_2_Class = document.createAttribute('class');
h1El_2_Class.value = 'validation';

var timerClass = document.createAttribute('class');
timerClass.value = 'countDown';

var scoreClass = document.createAttribute('class');
scoreClass.value = 'score-count';

// ---------------classes for question 1--------------------
var liClass1 = document.createAttribute('class');
liClass1.value = 'a1';

var liClass2 = document.createAttribute('class');
liClass2.value = 'a2';

var liClass3 = document.createAttribute('class');
liClass3.value = 'a3';

var liClass4 = document.createAttribute('class');
liClass4.value = 'a4';


// ----------------classes for question 2-------------------- 

var liClass2_1 = document.createAttribute('class');
liClass2_1.value = 'a2-1';

var liClass2_2 = document.createAttribute('class');
liClass2_2.value = 'a2-2';

var liClass2_3 = document.createAttribute('class');
liClass2_3.value = 'a2-3';

var liClass2_4 = document.createAttribute('class');
liClass2_4.value = 'a2-4';

// -----------------classes for question 3--------------------
var liClass3_1 = document.createAttribute('class');
liClass3_1.value = 'a3-1';

var liClass3_2 = document.createAttribute('class');
liClass3_2.value = 'a3-2';

var liClass3_3 = document.createAttribute('class');
liClass3_3.value = 'a3-3';

var liClass3_4 = document.createAttribute('class');
liClass3_4.value = 'a3-4';

// -----------------attributes for end function--------------------
var iTypeTXT = document.createAttribute('type');
iTypeTXT.value = 'text';

var iTypeSub = document.createAttribute('type');
iTypeSub.value = 'submit';

var iTXT  = document.createAttribute('class');
iTXT.value = 'initials';

var iLabel  = document.createAttribute('class');
iLabel.value = 'label';
// appends 
document.body.appendChild(newElement);

document.body.children[1].appendChild(h1El_1).innerHTML = "Coding Quiz";
document.body.children[1].appendChild(newOl);
document.body.children[1].appendChild(newBtn).innerHTML = "Start";

// attributes 
document.body.children[1].children[0].setAttributeNode(h1Class);
document.body.children[1].children[2].setAttributeNode(btnClass);

var count = 76;
var scoreCount = 0;

document.querySelector(".start-btn").addEventListener("click", function (){
    q1();
    var stop = setInterval(function (){
       
        count -= 1;
        document.querySelector(".countDown").textContent = count;

        if(count <= 0 ){
            document.querySelector(".countDown").textContent = " ";
            clearInterval(stop);
            end();
        }
    }, 1000);
});

function q1 (){
    document.body.children[1].appendChild(newBtn).remove();
    document.querySelector(".question").innerHTML = "What are data- attributes good for?";

    
    document.body.children[1].children[1].appendChild(Li_1).setAttributeNode(liClass1);
    document.body.children[1].children[1].appendChild(Li_2).setAttributeNode(liClass2);
    document.body.children[1].children[1].appendChild(Li_3).setAttributeNode(liClass3);
    document.body.children[1].children[1].appendChild(Li_4).setAttributeNode(liClass4);
    document.body.children[1].appendChild(timer).setAttributeNode(timerClass);
    document.body.children[1].appendChild(form);
    document.body.children[1].appendChild(hr);
    document.body.children[1].appendChild(h1El_2).setAttributeNode(h1El_2_Class);
    document.body.children[1].appendChild(score).setAttributeNode(scoreClass);

    document.querySelector(".a1").innerHTML = "They allow you to store extra information on a html element that can be accessed by javascript or css.";
    document.querySelector(".a2").innerHTML = "They allow you to store information on a html element.";
    document.querySelector(".a3").innerHTML = "They allow you to store information on a html element that can be accessed by javascript.";
    document.querySelector(".a4").innerHTML = "They allow you to store extra information on a html element that can be accessed by css.";
    


    document.querySelector(".a1").addEventListener("click", validate);
    document.querySelector(".a2").addEventListener("click", validate);
    document.querySelector(".a3").addEventListener("click", validate);
    document.querySelector(".a4").addEventListener("click", validate);
    
    function validate (event){
        if(event.target.className === "a1"){
            document.querySelector('.validation').innerHTML = "Correct";
            scoreCount += 33;
            q2();
        }else if(event.target.className === "a2" || event.target.className === "a3" || event.target.className === "a4"){
            document.querySelector('.validation').innerHTML = "Wrong";
            count -= 10;
            q2();
        };
    }
};

function q2 (){
    document.querySelector(".question").innerHTML = "Question 2";

    document.body.children[1].children[1].appendChild(Li_1).setAttributeNode(liClass2_1);
    document.body.children[1].children[1].appendChild(Li_2).setAttributeNode(liClass2_2);
    document.body.children[1].children[1].appendChild(Li_3).setAttributeNode(liClass2_3);
    document.body.children[1].children[1].appendChild(Li_4).setAttributeNode(liClass2_4); 

    document.querySelector(".a2-1").innerHTML = "Answer 2.1";
    document.querySelector(".a2-2").innerHTML = "Answer 2.2";
    document.querySelector(".a2-3").innerHTML = "Answer 2.3";
    document.querySelector(".a2-4").innerHTML = "Answer 2.4";

    document.querySelector(".a2-1").addEventListener("click", validate2);
    document.querySelector(".a2-2").addEventListener("click", validate2);
    document.querySelector(".a2-3").addEventListener("click", validate2);
    document.querySelector(".a2-4").addEventListener("click", validate2);
    

    function validate2 (event){
        if(event.target.className === "a2-3"){
            document.querySelector('.validation').innerHTML = "Correct";
            scoreCount += 33;
            q3();
        }else if(event.target.className === "a2-1" || event.target.className === "a2-2" || event.target.className === "a2-4"){
            document.querySelector('.validation').innerHTML = "Wrong";
            count -= 10;
            q3();
        };
    }
};

function q3 (){
    document.querySelector(".question").innerHTML = "Question 3";

    document.body.children[1].children[1].appendChild(Li_1).setAttributeNode(liClass3_1);
    document.body.children[1].children[1].appendChild(Li_2).setAttributeNode(liClass3_2);
    document.body.children[1].children[1].appendChild(Li_3).setAttributeNode(liClass3_3);
    document.body.children[1].children[1].appendChild(Li_4).setAttributeNode(liClass3_4); 

    document.querySelector(".a3-1").innerHTML = "Answer 3.1";
    document.querySelector(".a3-2").innerHTML = "Answer 3.2";
    document.querySelector(".a3-3").innerHTML = "Answer 3.3";
    document.querySelector(".a3-4").innerHTML = "Answer 3.4";

    document.querySelector(".a3-1").addEventListener("click", validate3);
    document.querySelector(".a3-2").addEventListener("click", validate3);
    document.querySelector(".a3-3").addEventListener("click", validate3);
    document.querySelector(".a3-4").addEventListener("click", validate3);

    function validate3 (event){
        if(event.target.className === "a3-4"){
            document.querySelector('.validation').innerHTML = "Correct";
            scoreCount += 33;
            end();
            
        }else if(event.target.className === "a3-1" || event.target.className === "a3-2" || event.target.className === "a3-3"){
            document.querySelector('.validation').innerHTML = "Wrong";
            count -= 10;
            end();
            
        };
        document.querySelector('.validation').remove();
        document.querySelector('.score-count').remove();
    }

};

function end(){
    count = 0;
    document.querySelector(".question").innerHTML = "All Done";
    
    

    document.body.children[1].children[1].appendChild(Li_1).setAttributeNode(liClass3_1);
    document.body.children[1].children[1].appendChild(Li_2).setAttributeNode(liClass3_2);
    document.body.children[1].children[1].appendChild(Li_3).setAttributeNode(liClass3_3);
    document.body.children[1].children[1].appendChild(Li_4).setAttributeNode(liClass3_4); 
    document.body.children[1].children[2].appendChild(input).setAttributeNode(iTypeTXT);
    document.body.children[1].children[2].appendChild(input2).setAttributeNode(iTypeSub);

    document.querySelector(".a3-1").remove();
    document.querySelector(".a3-2").remove();
    document.querySelector(".a3-3").remove();
    document.querySelector(".a3-4").remove();
    document.body.children[1].appendChild(newOl).remove();
//----------Sets Score to 0------------
    if(scoreCount <= 0){
        scoreCount = 0;
    }

    
    document.body.children[1].children[2].appendChild(label).setAttributeNode(iLabel);
    document.querySelector('.label').innerHTML = "Enter Initials: ";
    document.body.children[1].children[2].appendChild(input);
    //------Store Results and run results function----------- 
    document.body.children[1].children[2].appendChild(input2).addEventListener("click", function(e){
        e.preventDefault();

        localStorage.setItem("initials", document.body.children[1].children[2].appendChild(input).value);
        localStorage.setItem("score", scoreCount);
        document.querySelector(".label").remove();
        window.location.replace("results.html");
    });
    
    
}


