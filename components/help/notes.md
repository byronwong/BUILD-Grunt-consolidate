

GRUNT WORKFLOWS
===============


Setup Grunt
-----------

1. Setup npm - use: 'npm init' in your project folder

2. install grunt 'npm install -g grunt-cli'
	// may need to do sudo on Mac if you need permissions prefix code with 'sudo'
	// NOTE: this is global and installed on to your user profile
	// To check: 'grunt --version'

3.Using Grunt
	1. create gruntfile (configuration file) 'gruntfile.js' see --> gruntfile.js
	2. Install grunt plugin 'npm install grunt --save-dev'
		// '--save-dev' - tells the system that this is not a dependancy needed for the program to run
	3. Install other modules: 'npm install grunt-contrib-concat --save-dev'
	4. If no default function is setup you can run grunt by calling the function:
		'grunt concat'


Setup Bower
-----------
1. Setup using npm: 
	
	npm install -g bower

2. Go to project directory

	bower -v
		// returns version

	bower init	
		// may have an error with interactive shell, can use command prompt instead
		// Answer questions:

	"name": "wfgrunt",
	"description": "Project for grunt workflows",
	"main": "", // leave blank
	"authors": [
	    "Byron Wong"
	  ],
	"license": "MIT",
	"moduleType": [], // leave blank
	"homepage": "", // leave blank
	"private": true,
	"ignore": [
		"**/.*",
		"node_modules",
		"bower_components",
		"test",
		"tests"
	]

3. Install Packages
	
	bower install --save bootstrap
