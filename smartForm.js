// Your jQuery goes here

var userData = {
	name : "rafiqul",
	email : "1520616@iub.edu.bd",
	html: {likes : [], dislikes:[]},
	css: {likes : [], dislikes:[]},
	js: {likes : [], dislikes:[]},
	skills: {html:"",css:"",js:""}
};

$("#startBtn").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").show();
});

$("#name").change(function(event){
	console.log($("#name").val());
	if($("#name").val()){
		userData.name =  $("#name").val();
	}	
});


$("#email").change(function(event){
	//console.log("start clicked")
	
});


//$("#name").click(function(event){
	//console.log("start clicked")
//	$("#welcome").hide();
	//$("#q1").hide();
	//$("#q2").show();
//});

