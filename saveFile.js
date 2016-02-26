function saveTextAsFile(html, css, js)
{
    var code = "<html><head><title>Web.Code</title><style>" + css + "</style></head><body>" + html +"<script>"+ js + "</script></body>";
    
    var textFileAsBlob = new Blob([code], {type:'text/plain'});
	var fileNameToSaveAs = "WebCode";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
    
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}


