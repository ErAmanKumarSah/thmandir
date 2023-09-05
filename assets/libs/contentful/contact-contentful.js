/*var client = contentful.createClient({
    space: 'xwsgy63x1tam',
    accessToken: '13aecdd588797137cb2f9b382f0dc5de3d201ed13980476fe354838fa17ebe58'
  })
  client.getEntries({
  'content_type': 'page',
})
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
//	  console.log(entry.fields.pageTitle);

    if(entry.fields.pageTitle == 'Contact') {
		$('#contactPageInner').html(entry.fields.pageLongDescription)
      //console.log()
    }
    if(entry.fields.pageTitle == 'Footer' && entry.fields.language == 'EN') {
      $('#footer-content').html(entry.fields.pageLongDescription);
    }
  })
  
})*/
var client = contentful.createClient({
    space: 'xwsgy63x1tam',
    accessToken: '13aecdd588797137cb2f9b382f0dc5de3d201ed13980476fe354838fa17ebe58'
  })
  client.getEntries({
  'content_type': 'page',
})
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
//	  console.log(entry.fields.pageTitle);
    if(entry.fields.pageTitle == 'Contact' && entry.fields.language == 'EN') {
		  $('#contactPage').html(entry.fields.pageLongDescription)
      //console.log()
    }
    if(entry.fields.pageTitle == 'Footer' && entry.fields.language == 'EN') {
      $('#footer-content').html(entry.fields.pageLongDescription)
      
    }
  })
  
})