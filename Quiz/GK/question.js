var a;
function show_hide()
{
	if(a==1)
	    {
	    	document.getElementById("txt").style.display="inline";
	    	return a=0;
	    }

    else
        {
        	document.getElementById("txt").style.display="none";
        	return a=1;
        }
}