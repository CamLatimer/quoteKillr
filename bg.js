
    // user pastes data into textarea
    // on paste, get the clipboard data and swap quotes
    // set the updated data back into clipboard data for the user
    //  automate copying of the pasted data with a manually triggered event
    // close the window

     var textInput = document.querySelector('textarea');
     var progressDisplay = document.querySelector('.progressDisplay');
     var swapprEl = document.querySelector('.swappr');

     // change curly quotes to straight quotes
     function swapText(){
       var textInputStr = textInput.value;
       var goodQuotes = textInputStr.replace(/[\u2018\u2019]/g, '\u0027').replace(/[\u201C\u201D]/g, '\u0022');
       return goodQuotes;
     }

     // set the updated data back into clipboard data for the user
     function setClipboardData(e){
       e.clipboardData.setData('text/plain', swapText());
       e.preventDefault();
     }

     function fadeOut(){
       textInput.classList.add('fadeToBlack');
       progressDisplay.classList.add('showProgress');
       setTimeout(function(){
         window.close();
       }, 1000)
     }

     // on paste, get the clipboard data and swap quotes
     textInput.addEventListener('paste', function(e){
       // wait a sec for cleanedText to be set, then run copy event
       fadeOut();
       setTimeout(function(){
         document.execCommand('copy');
       }, 1000);
     });

     textInput.addEventListener('copy', setClipboardData);

     // textInput.focus();
     // document.execCommand('paste');
     window.onload = function(){
       textInput.focus();
       document.execCommand('paste');
     }
