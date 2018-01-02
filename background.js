
var baseURL = 'https://api.github.com/';

function saveLink() {
    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      console.log('abc' + tab.url);

      var token = '89b575e0e76fd8486e9071f9fdbc9d236016ceee'

      setLink(token, tab.url, tab.title);

    //   xhr.setRequestHeader("Authorization", "Basic " + btoa("user:pwd")); 
    //   xhr.onreadystatechange = function() { 
    //     // If the request completed
    //     if (xhr.readyState == 4) {
    //         alert(xhr.statusText)

    //         // if (xhr.status == 200) {
    //         //     // If it was a success, close the popup after a short delay
    //         //     statusDisplay.innerHTML = 'Saved!';
    //         //     window.setTimeout(window.close, 1000);
    //         // } else {
    //         //     // Show what went wrong
    //         //     statusDisplay.innerHTML = 'Error saving: ' + xhr.statusText;
    //         // }
    //     }
    // };

    // // Send the request and set status
    // xhr.send('{"scopes":["public_repo"],"note":"new2"}');







   //    $.ajax({ 
   //  url: 'https://api.github.com/authorizations',
   //  type: 'POST',
   //  beforeSend: function(xhr) { 
        
   //  },
   //  data: '{"scopes":["repo"],"note":"create repo with ajax"}'
   // }).done(function(response) {
   //         alert(response);
   //  });

      // var f = d.createElement('form');
      // f.action = 'http://gtmetrix.com/analyze.html?bm';
      // f.method = 'post';
      // var i = d.createElement('input');
      // i.type = 'hidden';
      // i.name = 'url';
      // i.value = tab.url;
      // f.appendChild(i);
      // d.body.appendChild(f);
      // f.submit();
    });
}


function setLink(token, url, title) {

// Create repo

/* $.ajax({ 
    url: 'https://api.github.com/user/repos',
    type: 'POST',
    beforeSend: function(xhr) { 
        xhr.setRequestHeader("Authorization", "token 68d6aca5b8b2f7d96728b3cdc818a7f5eb955d00"); 
    },
    data: '{"name": "gitapitest","description":"repo create from ajax test","homepage": "https://sample.com","auto_init":true}'
}).done(function(response) {
    console.log(response);
});
 */
var contents_url =  baseURL + 'repos/testlinky/saveit/contents/';
var filename = "SaveIt.md";
var filemessage = title;
var filecontent = "[" + title + "](" + url + ")"
var basecontent = btoa(filecontent);
var apiurl = contents_url + filename;
var filedata = '{"message":"'+filemessage+'","content":"'+basecontent+'"}';

          // Set up an asynchronous AJAX POST request
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', apiurl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "token " + token); 
      xhr.onreadystatechange = function() { 
        // If the request completed
        if (xhr.readyState == 4) {
            alert(xhr.statusText)

            // if (xhr.status == 200) {
            //     // If it was a success, close the popup after a short delay
            //     statusDisplay.innerHTML = 'Saved!';
            //     window.setTimeout(window.close, 1000);
            // } else {
            //     // Show what went wrong
            //     statusDisplay.innerHTML = 'Error saving: ' + xhr.statusText;
            // }
        }
    };

    // Send the request and set status
    xhr.send(filedata);


// $.ajax({ 
//     url: apiurl,
//     type: 'PUT',
//     beforeSend: function(xhr) { 
//         xhr.setRequestHeader("Authorization", "token 68d6aca5b8b2f7d96728b3cdc818a7f5eb955d00"); 
//     },
//     data: filedata
// }).done(function(response) {
//     console.log(response);
// });

 
}
// POST the data to the server using XMLHttpRequest
function addBookmark() {
    // Cancel the form submit
    event.preventDefault();

    // The URL to POST our data to
    var postUrl = 'http://post-test.local.com';

    // Set up an asynchronous AJAX POST request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', postUrl, true);

    // Prepare the data to be POSTed by URLEncoding each field's contents
    var title = encodeURIComponent(document.getElementById('title').value);
    var url = encodeURIComponent(document.getElementById('url').value);
    var summary = encodeURIComponent(document.getElementById('summary').value);
    var tags = encodeURIComponent(document.getElementById('tags').value);

    var params = 'title=' + title + 
                 '&url=' + url + 
                 '&summary=' + summary +
                 '&tags=' + tags;

    // Replace any instances of the URLEncoded space char with +
    params = params.replace(/%20/g, '+');

    // Set correct header for form data 
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // Handle request state change events
    xhr.onreadystatechange = function() { 
        // If the request completed
        if (xhr.readyState == 4) {
            statusDisplay.innerHTML = '';
            if (xhr.status == 200) {
                // If it was a success, close the popup after a short delay
                statusDisplay.innerHTML = 'Saved!';
                window.setTimeout(window.close, 1000);
            } else {
                // Show what went wrong
                statusDisplay.innerHTML = 'Error saving: ' + xhr.statusText;
            }
        }
    };

    // Send the request and set status
    xhr.send(params);
    statusDisplay.innerHTML = 'Saving...';
}



chrome.browserAction.onClicked.addListener(saveLink);
