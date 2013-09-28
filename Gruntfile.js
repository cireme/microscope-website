module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// configuration
		config:{
			stylusFiles : {
				'public/styles/application.css' : 'app/assets/stylus/application.styl'
			},
			scriptsFiles : {
				'public/scripts/test.js': ['app/assets/scripts/test.js']
			}
		},

		stylus: {
			options:{
				compress : false
			},
			dev:{
				files : '<%= config.stylusFiles %>'
			},
			release:{
				options :{
					compress : true
				},
				files : '<%= config.stylusFiles %>'
			}
		},

		uglify: {
			options:{
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			release: {
				files : '<%= config.scriptsFiles %>'
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', []);

	grunt.registerTask('minify', ['uglify']);

	grunt.registerTask('build', ['stylus:dev']);
	grunt.registerTask('build:release', ['stylus:release', 'uglify:release']);

};