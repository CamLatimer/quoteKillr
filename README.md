quoteKillr is a chrome extension that turns curly quotes in your browser clipboard into straight quotes.  

It's super simple.  The file bg.js has some vanilla, browser js that replaces smart quotes with curly quotes in the browser's ClipboardData object.  The extension pops up an input box when its icon is clicked. You paste the text with smart quotes into it, and the box disappears.  The clipboard data's text now has straight quotes in place of the smart ones.

I made it for some non-tech folks I work with. They use MS Word a lot, and the url's they'd paste into a web app they use would break because of the curly/smart quotes added by the word processor.  I thought an in-browser tool would save them some time over cleaning things with their desktop plain-text editor or tweaking MS Word settings every time they get a new doc.

To use:

1.) Download/clone the repo and unzip the folder if it isn't already.

2.) In chrome, go the extensions page.

3.) Click 'load unpacked' at the top of the page.

4.) Find the folder for quoteKillr and choose to upload it.

5.) A button with a 'q' on it should appear in the extensions toolbar section of the browser. Click that, and an input box opens. paste the content with smart quotes into it.  Then go about your business and paste again into whatever area you want. The content now has straight quotes in place of the smart ones.
