

GRUNT WORKFLOWS


Setup
=====


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