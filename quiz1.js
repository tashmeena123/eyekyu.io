var score=0;
var total=5;
var point=2;
var highest=total*point;
var pas=0.6*highest;

function init(){
	//set correct answers
	sessionStorage.setItem('a1','c');
	sessionStorage.setItem('a2','a');
	sessionStorage.setItem('a3','b');
	sessionStorage.setItem('a4','a');
	sessionStorage.setItem('a5','a');
}

$(document).ready(function()
{
	$('.questionForm').hide();   
	$('#q1').show();

	$('.questionForm #submit').click(function()
	{
		current= $(this).parents('form:first').data('question');
		next= $(this).parents('form:first').data('question')+1;
		$('.questionForm').hide();   //to hide question
		$('#q'+next+'').fadeIn(300);   //to display next question
		process(''+current+'');
		return false;
	});
});

//funtion for checking answers
function process(n)
{
	var submitted = $('input[name=q'+n+']:checked').val();
	if(submitted==sessionStorage.getItem('a'+n+''))
	{
		score=score+point;
	}
	if(n==total)
	{
		$('#result').html('<h2>Your score is '+score+' out of '+highest+'</h2> <a href="subject.html">Take Quiz again</a><br><br><a href="certificate.jpg">Take certificate</a>');
	}
	
	return false;
}

window.addEventListener('load',init,false)
