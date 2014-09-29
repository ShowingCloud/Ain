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
		"project_name" : $('#project_name').val(),
		"project_target" : $('#project_target').val(),
		"project_meaning" : $('#project_meaning').val(),
		"project_schedule" : $('#project_schedule').val(),
		"project_category" : $('#project_category').find("option:selected").text(), 
		"project_abstract" : $('#project_abstract').val(),
		"project_details" : $('#project_details').val(),
		"name0" : $('#memberInfoTab tbody tr:first-child #name0').val(),
		"gender0" : $('#memberInfoTab tbody tr:first-child #gender0').val()==0 ? false:true,
		"school0" : $('#memberInfoTab tbody tr:first-child #school0').val(),
		"major0" : $('#memberInfoTab tbody tr:first-child #major0').val(),
		"email0" : $('#memberInfoTab tbody tr:first-child #email0').val(),
		"qq0" : $('#memberInfoTab tbody tr:first-child #qq0').val(),
		"mobile0" : $('#memberInfoTab tbody tr:first-child #mobile0').val()
	};
	for(var i=1;i<$('#memberCount').val();i++)
	{
		j=i+1;
		projects['name'+i] = $('#memberInfoTab tbody tr:nth-child('+j+') #name0').val();
		projects['gender'+i] = $('#memberInfoTab tbody tr:nth-child('+j+') #gender0').val() == 0 ? false:true;
		projects['school'+i] = $('#memberInfoTab tbody tr:nth-child('+j+') #school0').val();
		projects['major'+i] = $('#memberInfoTab tbody tr:nth-child('+j+') #major0').val();
		projects['email'+i] = $('#memberInfoTab tbody tr:nth-child('+j+') #email0').val();
		projects['qq'+i] = $('#memberInfoTab tbody tr:nth-child('+j+') #qq0').val();
		projects['mobile'+i] = $('#memberInfoTab tbody tr:nth-child('+j+') #mobile0').val();			
	}
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
		//location.href ='/home';
		
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
