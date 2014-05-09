$('.checks').click(function(){
	if($(this).prop('checked')==true){
		$(this).parent().parent().find("textarea").prop("disabled", true);
	}else{
		$(this).parent().parent().find("textarea").prop("disabled", false);
	}
});

function changeRows()
{
	if($("#memberInfoTab tbody").find("tr").length>1)
	{
		$("#memberInfoTab tbody tr:not(:eq(0))").remove();
	}
	for(var i=1;i<$('#memberCount').val();i++)
	{
		$("#memberInfoTab tbody tr:first-child").clone(true).appendTo( "#memberInfoTab" );
		$("#memberInfoTab tbody tr:last-child #name0").val('');
		$("#memberInfoTab tbody tr:last-child #gender0").val('0');
		$("#memberInfoTab tbody tr:last-child #school0").val('');
		$("#memberInfoTab tbody tr:last-child #major0").val('');
		$("#memberInfoTab tbody tr:last-child #email0").val('');
		$("#memberInfoTab tbody tr:last-child #qq0").val('');
		$("#memberInfoTab tbody tr:last-child #mobile0").val('');
	}
}

function register()
{
	if(!checkInput())
	{
		return;
	}
	
	var projects = { 
		"name0" : $('#memberInfoTab tbody tr:first-child #name0').val(),
		"gender0" : $('#memberInfoTab tbody tr:first-child #gender0').val()==0 ? false:true,
		"school0" : $('#memberInfoTab tbody tr:first-child #school0').val(),
		"major0" : $('#memberInfoTab tbody tr:first-child #major0').val(),
		"email0" : $('#memberInfoTab tbody tr:first-child #email0').val(),
		"qq0" : $('#memberInfoTab tbody tr:first-child #qq0').val(),
		"mobile0" : $('#memberInfoTab tbody tr:first-child #mobile0').val(),
		"name1" : $('#memberInfoTab tbody tr:nth-child(2) #name0').val(),
		"gender1" : $('#memberInfoTab tbody tr:nth-child(2) #gender0').val()==0 ? false:true,
		"school1" : $('#memberInfoTab tbody tr:nth-child(2) #school0').val(),
		"major1" : $('#memberInfoTab tbody tr:nth-child(2) #major0').val(),
		"email1" : $('#memberInfoTab tbody tr:nth-child(2) #email0').val(),
		"qq1" : $('#memberInfoTab tbody tr:nth-child(2) #qq0').val(),
		"mobile1" : $('#memberInfoTab tbody tr:nth-child(2) #mobile0').val(),
		"name2" : $('#memberInfoTab tbody tr:nth-child(3) #name0').val(),
		"gender2" : $('#memberInfoTab tbody tr:nth-child(3) #gender0').val()==0 ? false:true,
		"school2" : $('#memberInfoTab tbody tr:nth-child(3) #school0').val(),
		"major2" : $('#memberInfoTab tbody tr:nth-child(3) #major0').val(),
		"email2" : $('#memberInfoTab tbody tr:nth-child(3) #email0').val(),
		"qq2" : $('#memberInfoTab tbody tr:nth-child(3) #qq0').val(),
		"mobile2" : $('#memberInfoTab tbody tr:nth-child(3) #mobile0').val(),
		"project_name" : $('#project_name').val(),
		"is_tech" : $('#is_tech').val()==0 ? false:true,
		"project_target" : $('#project_target').val(),
		"project_meaning" : $('#project_meaning').val(),
		"project_schedule" : $('#project_schedule').val(),
		"project_category" : $('#project_category').find("option:selected").text(), 
		"project_abstract" : $('#project_abstract').val(),
		"project_details" : $('#project_details').val()
	};
	
	$.ajax ({
		url:		"/projects.json",
		type:		"POST",
		dataType:	"json",
		data:		{
			project :   	projects,
			captcha:		$('#captcha').val(),
			captcha_key:	$('#captcha_key').val()
		}
	}).done (function (resp) {
		alert ("注册成功！");
		location.href ='/home';
		
	}).fail(function() {
		alert ("Request failed");
	});
}

function checkInput()
{	
	var num = $('#memberCount').val();
	for (var i = 1; i <= num; i++){
		if ($('#memberInfoTab tbody tr:nth-child('+i+') #name0').val().length == 0) {
			alert ("请输入组员"+i+"的姓名");
			return false;
		 } else if ($('#memberInfoTab tbody tr:nth-child('+i+') #school0').val().length == 0) {
			alert ("请输入组员"+i+"的学校名称");
			return false;
		 }else if ($('#memberInfoTab tbody tr:nth-child('+i+') #major0').val().length == 0) {
			alert ("请输入组员"+i+"的学院专业");
			return false;
		 }else if ($('#memberInfoTab tbody tr:nth-child('+i+') #email0').val().length == 0) {
			alert ("请输入组员"+i+"的邮箱");
			return false;
		 }else if ($('#memberInfoTab tbody tr:nth-child('+i+') #qq0').val().length == 0) {
			alert ("请输入组员"+i+"的QQ");
			return false;
		 }else if ($('#memberInfoTab tbody tr:nth-child('+i+') #mobile0').val().length == 0) {
			alert ("请输入组员"+i+"的手机号码");
			return false;
		 }
	 }
	return true;
}

function clearForm()
{
	$('#registerForm')[0].reset();
}