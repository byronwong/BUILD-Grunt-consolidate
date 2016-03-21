module.exports = function(grunt){
	grunt.initConfig({


		// Concat task
		concat : {
			dist : {
				// NOTE: if you care about the order do this:
				// src : ['components/scripts/fileName.js', 'components/scripts/fileName2.js']
				// combines all js files in the scripts folder and output to scripts.js in destination
				src : ['components/scripts/*.js'],
				dest: 'builds/development/js/scripts.js'
			}
		}


	}); // Init config 

	// Grunt modules
	grunt.loadNpmTasks('grunt-contrib-concat'); // combines multiple files together

}; // wrapper function 