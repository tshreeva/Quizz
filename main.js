window.onload=function(){
	getQuizQuestion();
}
function getQuizQuestion(){
var xhttp=new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(this.readyState===4 && this.status===200){
				var response=JSON.parse(this.responseText).results;
				onRenderQuiz(response);
			}else if(this.readyState===4){
				//error
			}
		};
	xhttp.open('get','https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple',true);
	xhttp.send();
}

function onRenderQuiz(data){
	var quiz='';
	data.forEach(function(value,key){
		quiz=quiz+'<div><div id="question">'+
		value.question+
'</div>'+
'<div id="answer">'+
	getAnswerList(value,key)+
'</div></div>'
	});
	document.getElementById('quizList').innerHTML=quiz;
}
function checkCorrectAnswer(answer,correct_answer,aId,qId){
	var selectedAnswer=document.getElementById(aId+'-answer-'+qId);
if(answer==correct_answer){
	selectedAnswer.className='correct';
}else{
	selectedAnswer.className='incorrect';
}
}
function getAnswerList(qList,index){
	var answer=qList.incorrect_answers;
	answer.push(qList.correct_answer);
	var answers='';
shuffle(answer).forEach(function(value,key){
answers=answers+
'<div id="'+key+'-answer-'+index+'"onclick="checkCorrectAnswer(\''+value+'\',\''+qList.correct_answer+'\',\''+key+'\',\''+index+'\')">'+value+'</div>';
});
return answers;
}
function shuffle(arra1){
	var ctr=arra1,length,temp,index;

	while(ctr>0){
		index=Math.floor(Math.random()*ctr);
		ctr--;
		temp=arra1[ctr];
		arra1[ctr]=arra1[index];
		arra1[index]=temp;
	}
	return arra1;
}