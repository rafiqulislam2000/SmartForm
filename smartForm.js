// Your jQuery goes here

var userData = {
	name : "",
	email : "",
	html: {likes : [], dislikes:[]},
	css: {likes : [], dislikes:[]},
	js: {likes : [], dislikes:[]},
	skills: {html:"",css:"",js:""}
};

//window.localStorage.userData = JSON.stringify(userData);
//console.log(localStorage.userData);
//var testData = JSON.parse(localStorage.userData);
//console.log(testData.name);

if(window.localStorage.userData){						//store the value in local storage
	userData = JSON.parse(window.localStorage.userData);
}

$("#startBtn").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").show();
	$("#nextBtn").hide();
});


$("#name").change(function(event){
	console.log($("#name").val());
	if($("#name").val()){						//store the value in local storage
		userData.name = $("#name").val();
		window.localStorage.userData = JSON.stringify(userData);
	}
	$("#email").change(function(event){
			
		//console.log($("#name").val());
		//console.log($("#email").val());
   		 //var x = document.input["email"]["email"].value;
   		 //var atpos = x.indexOf("@");
    	 //var dotpos = x.lastIndexOf(".");
    	 //if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        //	alert("Not a valid e-mail address");
		//}
		//var valid = true;
		//if(valid==true){
		if($("#email").val()){					//store the value in local storage
		userData.email = $("#email").val();
		window.localStorage.userData = JSON.stringify(userData);
	}
			$("#nextBtn").show();	
	//	}
});

	
	//if($("#name").val()){
		//userData.name =  $("#name").val();
	//}	
});



$("#nextBtn").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
});
//2a-----------------------------------------------
$("#htmlNxt").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2a").show();
	$("#2aNext").hide();

});

//HTML checkbox

$("#2a1").click(function(event){
	$("#2aNext").show();
});
$("#2a2").click(function(event){
	$("#2aNext").show();
});
$("#2a3").click(function(event){
	$("#2aNext").show();
});
$("#2a4").click(function(event){
	$("#2aNext").show();
});
$("#2a5").click(function(event){
	$("#2aNext").show();
});
$("#2a6").click(function(event){
	$("#2aNext").show();
});
$("#2a7").click(function(event){
	$("#2aNext").show();
});
$("#2a8").click(function(event){
	$("#2aNext").show();
});

$("#2aNext").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2a").hide();
	$("#q3").show();

});

$("#2aPrevious").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2a").hide();
	$("#q3").hide();

});

//2b---------------------------------------------------
$("#cssNxt").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2b").show();
	$("#2bNext").hide();
	
});
//css checkbox
$("#2b1").click(function(event){
	$("#2bNext").show();
});
$("#2b2").click(function(event){
	$("#2bNext").show();
});
$("#2b3").click(function(event){
	$("#2bNext").show();
});
$("#2b4").click(function(event){
	$("#2bNext").show();
});
$("#2b5").click(function(event){
	$("#2bNext").show();
});
$("#2b6").click(function(event){
	$("#2bNext").show();
});
$("#2b7").click(function(event){
	$("#2bNext").show();
});

$("#2bNext").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2b").hide();
	$("#q3").show();

});

$("#2bPrevious").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2b").hide();
	$("#q3").hide();

});

//2c----------------------------------------------------
$("#javaScriptNxt").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2c").show();
	$("#2cNext").hide();
	
});

//JavaScript checkbox
$("#2c1").click(function(event){
	$("#2cNext").show();
});
$("#2c2").click(function(event){
	$("#2cNext").show();
});
$("#2c3").click(function(event){
	$("#2cNext").show();
});
$("#2c4").click(function(event){
	$("#2cNext").show();
});
$("#2c5").click(function(event){
	$("#2cNext").show();
});
$("#2c6").click(function(event){
	$("#2cNext").show();
});
$("#2c7").click(function(event){
	$("#2cNext").show();
});

$("#2cNext").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2c").hide();
	$("#q3").show();

});

$("#2cPrevious").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2c").hide();
	$("#q3").hide();

});

//-----------------------------------

$("#q3Next").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").hide();
	$("#q2a").hide();
	$("#q3").hide();
	$("#thanks").show();

});

$("#q3Previous").click(function(event){
	//console.log("start clicked")
	$("#welcome").hide();
	$("#q1").hide();
	$("#nextBtn").hide();
	$("#q2").show();
	$("#q2a").hide();
	$("#q3").hide();


});

//ans

$("#answer").click(function(event){
	//console.log("start clicked")
	$("#welcome").show();
	$("#q1").show();
	$("#nextBtn").hide();
	$("#htmlNxt").hide();
	$("#2aNext").hide();
	$("#2bNext").hide();
	$("#2cNext").hide();
	$("#q3Next").hide();
	$("#cssNxt").hide();
	$("#javaScriptNxt").hide();
	$("#answer").hide();
	$("#deleteAnswer").hide();
	
	$("#2aPrevious").hide();
	$("#2bPrevious").hide();
	$("#2cPrevious").hide();
	$("#q3Previous").hide();
	$("#q2").show();
	$("#q2a").show();
	$("#q2b").show();
	$("#q2c").show();
	$("#q3").show();
	$("#thanks").show();

});

