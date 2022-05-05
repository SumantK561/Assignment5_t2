function genderTitle(){
	var x = document.getElementById('mgender').checked;
	var y = document.getElementById('fgender').checked;
	
	if(x==true)
	{
		document.getElementById('title').value = '1';
	}
	
	else
	{
		document.getElementById('title').value = '2';	
	}
}

