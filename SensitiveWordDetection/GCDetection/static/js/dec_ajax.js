$("#btn_check").click(function(){
	alert($("#inputInfo").val())
	
   $.ajax({
	   url:"/handle_Ajax",
	   type:"POST",
	   data:{title: $("#inputInfo").val()},
	   contentType:'application/x-www-form-urlencoded',
	   success:function(data){
		   console.log(data);
		   console.log('dddd');
		   $("#lbl_Show").html(data);
	   },
 　　　　　　
	   error: function (jqXHR, textStatus, err) {
				console.log(arguments);
			},

	   complete: function (jqXHR, textStatus) {
				console.log(textStatus);
		},

	   statusCode: {
			'403': function (jqXHR, textStatus, err) {
				  console.log(arguments);
			 },

			'400': function (jqXHR, textStatus, err) {
				console.log(arguments);
			}
		}
   })
})