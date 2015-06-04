# Installation guide

- Install Node.js
  * Windows and Macintosh: [Installer](https://nodejs.org/download/)
  * Other OS: [Follow this instruction](http://sailsjs.org/#!/getStarted)
- Install Sails

  `npm -g install sails`
- Download and extract the source code
- CD into the source code directory
- Install library

  `npm install`
  
- Download DB.sql
- Import Database (MySQL)
- Config MySQL connection
  * Open connections.js in Source code directory/config/connections.js
  * Update line 45-48
- Start server with the following command

  `sails lift`
  
- Navigate to this url: http://localhost:1337
- Login
  * Username: me@gmail.com
  * Password: 123
