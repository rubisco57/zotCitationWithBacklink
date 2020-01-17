{
"translatorID":"9ba2b6d7-09b2-4c3a-aa21-ea93a9618a8f",
"translatorType":2,
"label":"Zotero Citation with Backlink v.1",
"creator":"rubisco",
"target":"html",
"minVersion":"2.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"displayOptions":{"exportCharset":"UTF-8"},
"lastUpdated":"2020-01-16 22:00:00"
}
// Based on Nathan Schneider's translator available at https://gist.github.com/nschneid/3134386
function doExport() {
	var item;
	while(item = Zotero.nextItem()) {
		var urlS;
		// Error: isRegularItem() is not a function
		if (item.isRegularItem()) { // not an attachment already
	    let attachmentIDs = item.getAttachments();
	    for (let id of attachmentIDs) {
	        let attachment = Zotero.Items.get(id);
	        if (attachment.attachmentContentType == 'application/pdf') {
							var library_id = attachment.libraryID ? attachment.libraryID : 0;
	            // Write zotero://open-pdf/library/items/[itemKey]?page=[page]
							urlS = '<a href="zotero://open-pdf/library/items/'+library_id+'_'+attachment.key+'?page=1">';
							break;
	        }
	    }
		}
		if (urlS.isEmpty()) {
			var library_id = item.libraryID ? item.libraryID : 0;
			urlS =  '<a href="zotero://select/items/'+library_id+'_'+item.key+'">';
		}
		Zotero.write(urlS);
		// Zotero.write('<a href="zotero://select/items/');
		// var library_id = item.libraryID ? item.libraryID : 0;

		var titleS = (item.title) ? item.title.replace(/&/g,'&amp;').replace(/"/g,'&quot;') : "(no title)";
		// var pubTitleS = (item.publicationTitle) ? item.publicationTitle.replace(/&/g,'&amp;').replace(/"/g,'&quot;') : "";
		// if (!pubTitleS && item.type)
		// 	pubTitleS = '['+item.type+']';
		// Zotero.write(library_id+'_'+item.key+'" title="'+titleS+'&#13;'+((item.conferenceName) ? item.conferenceName : pubTitleS)+'">');

		var creatorsS = "";
		if (item.creators.length != 0) {
			creatorsS = item.creators[0].lastName
			if (item.creators.length>2)
				creatorsS += " et al.";
			else if (item.creators.length==2)
				creatorsS += " &amp; " + item.creators[1].lastName;
		} else if (item.itemType == "webpage" ) {
			creatorsS = item.websiteTitle
		}

		var date = Zotero.Utilities.strToDate(item.date);
		var dateS = (date.year) ? date.year : item.date;

		Zotero.write(creatorsS + '. ' + titleS + '. ' + dateS + '. ' + '</a><br/>');
	}
}
