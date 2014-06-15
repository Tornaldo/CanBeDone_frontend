# CanBeDone Front end
==================
The front end of the social network for ideas.
==================

## Dependencies
- [Node.js (npm)](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [Bower](https://github.com/bower/bower)
- [Compass (SASS)](http://compass-style.org/install/) 

## Install guide
1. Install node.js on your computer (node.js contains the npm package manager). After installing node.js you will be able to use the npm package manager and run commands like “npm install”.

windows
From the node.js homepage, download node.js and install using the install wizard.

Ubuntu
From Ubuntu 12.04 to 13.04, an old version (0.6.x) of Node is in the standard repository. For Ubuntu 13.10 and 14.04, 0.10.X versions are present. To install, just run:
	
	```
	sudo apt-get install nodejs
	```
To install npm on Ubuntu 13.10 and 14.04, run:

	```
	sudo apt-get install npm
	```

2. (Restart your shell and) Install the grunt client by entering the command:

	```
	npm install -g grunt-cli
	```

You probably have to run windows powershell as administrator, or use the sudo command for OSX and linux. By doing this you should now be able to use the grunt command from any directory.

http://gruntjs.com/getting-started


3. navigate your shell to the git repository folder to install project dependencies. Run this command:

	```
	npm install
	```

Since the repository already contains a package.json and a grunt-file, this command should do the trick. take a look in package.json to see the dependencies that just got installed.


4.  Install bower by running the command:

	```
	npm install -g bower
	```

5. Then in the git repository folder run the command:

bower install

This command will download all front end dependecies like bootstrap, angular etc. Downloaded components can be found in canBeDone_frontend/bower_components.

NOTE: If you get an ENOGIT error your shell does not have access to git.
Use git bash or a git shell running the same command 


6. To access canBeDone locally, start the grunt server task by writing:

	```	
	grunt serve
	```
