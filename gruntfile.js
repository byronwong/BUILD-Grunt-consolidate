module.exports = function(grunt){

	// Project Configuration.
	grunt.initConfig({

		// Concat task
		// create task name e.g. concat
		concat : {
			options : {
				separator : '\n\n //--------------------------------------------------------------------------------\n',
				banner : '// JS \n'
			},
			// create a job for that task e.g. dist can call anything
			moes : {
				// Job options
				// NOTE: if you care about the order do this:
				// src : ['components/scripts/fileName.js', 'components/scripts/fileName2.js']
				// combines all js files in the scripts folder and output to scripts.js in destination
				src : ['components/scripts/*.js'],
				dest: 'builds/development/js/scripts.js'
			},
			// Can add additional tasks
			/*prod : {
				src : ['components/scripts/*.js'],
				dest: 'builds/production/js/scripts.js'
			}*/
		}, //END concat


		// SASS Compile
		sass :{
			// Job
			dist :{
				options:{
					style: 'compressed'
				},
				files:[{
					// only need to include main.scss, paritals will be automatically imported
					src: 'components/sass/main.scss',
					dest:'builds/development/css/main.css'
				}]
			}
		}, //END sass

		// GRUNT Connect
		// Task
		connect : {
			// Job
			server : {
				// NOTE: because we are running a server, we can run ajax without any problems
				options : {
					hostname : 'localhost',
					port : 8000,
					base: 'builds/development/',
					livereload: true
				}
			}
		},

		// GRUNT Watch
		watch: {
			options : {
				spawn : false, // Allows tasks to run faster
				livereload: true
			},
			// Job (can name anything)
			scripts: {
				files : ['builds/development/**/*.html', 
						'components/scripts/**/*.js', 
						'components/sass/**/*.scss'],
				// What tasks do you want to do on these files
				task : ['concat', 'sass'] 
			}
		},

		// Grunt Wire Dependancies
		// Automatically add uri to dependancies
		// See index.html
		wiredep : {
			task : {
				src: 'builds/development/**/*.html'
			}
		},

		// Task
		bower_concat: {
			// job
			all :{
				dest : 'builds/development/js/_bower.js',
				cssDest: 'builds/development/css/_bower.css'
			}
		}


	}); // Init config 

	// Grunt Plugins 
	// More info at: http://gruntjs.com/plugins
	// and also to see options for plugins
	grunt.loadNpmTasks('grunt-contrib-concat'); // combines multiple js files into one
	grunt.loadNpmTasks('grunt-contrib-sass');	// compiles sass to css
	grunt.loadNpmTasks('grunt-contrib-watch');	// watches for changes and re-runs grunt tasks
	grunt.loadNpmTasks('grunt-contrib-connect');// allows for automatic refreshing when changes are made by injecting script
	grunt.loadNpmTasks('grunt-wiredep'); // Allows resources to be injected into project e.g. script tags to jquey uri
	grunt.loadNpmTasks('grunt-bower-concat'); // Allows concat with bower script packages

	// NOTE: if you have not setup init default function you will need to manully invoke these functions.
	// 'grunt [name of task]'
	grunt.registerTask('default', ['wiredep','bower_concat', 'concat:moes', 'sass','connect', 'watch']); 
	// Now we can just call grunt from terminal and these tasks would run.

}; // wrapper function 