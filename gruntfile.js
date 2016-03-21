module.exports = function(grunt){
	grunt.initConfig({


		// Concat task
		// create task name e.g. concat
		concat : {
			options : {
				separator : '\n\n //--------------------------------------------------------------------------------\n',
				banner : '// JS \n'
			},
			// create a job for that task e.g. dist can call anything
			dist : {
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


		sass :{
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
		} //END sass


	}); // Init config 

	// Grunt Plugins 
	// More info at: http://gruntjs.com/plugins
	// and also to see options for plugins
	grunt.loadNpmTasks('grunt-contrib-concat'); // combines multiple files together
	grunt.loadNpmTasks('grunt-contrib-sass');


	// NOTE: if you have not setup init default function you will need to manully invoke these functions.
	// 'grunt [name of task]'
	grunt.registerTask('default', ['concat:dist', 'sass']); 
	// Now we can just call grunt from terminal and these tasks would run.

}; // wrapper function 