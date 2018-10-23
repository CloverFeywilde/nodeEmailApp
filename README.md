An app that utilizes nodeMailer, ExpressJS, and Jquery to send server emails and power a website's contact form.

How to use:
1) Make sure Node.JS is installed on your server.
2) Copy app.js & package.json to its own folder.
3) run "sudo npm install"
4) run "node app.js" or preferably use PM2
5) custom.js should be put with your website's javascript files & linked to your webpage's HTML.
6) app.js will need a reverse proxy so it can be accessed remotely. To learn how to do this with Nginx, visit: This website (will put here later)
6) On the sample HTML form provided, fill out your information, and hit send.
