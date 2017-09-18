module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'sass/style.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'build/'
  			}]
  		}
  	},
  	watch: {
	    scripts: {
	        files: ['sass/style.sass'],
	        tasks: ['sass'],
	        options: {
	            spawn: false,
	        },
	    }
	},
	browserSync: {
	    bsFiles: {
	        src : ['html/index.html', 'sass/style.sass']
	    },
	    options: {
	        server: {
	            baseDir: ["sass/", "html/", "css/", "js/"]
	        },
	        watchTask: true
	    }
	}
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};