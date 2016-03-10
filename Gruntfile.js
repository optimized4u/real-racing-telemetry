module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-loopback-sdk-angular');
  grunt.loadNpmTasks('grunt-docular');

  grunt.initConfig({
    loopback_sdk_angular: {
      services: {
        options: {
          input: 'server/server.js',
          output: 'client/js/services/lb-services.js'
        }
      }
    },
    docular: {
      groups: [
        {
          groupTitle: 'LoopBack',
          groupId: 'loopback',
          sections: [
            {
              id: 'lbServices',
              title: 'LoopBack Services',
              scripts: ['client/js/services/lb-services.js']
            }
          ]
        }
      ]
    },
    docularserver: {
      targetDir: "docular_generated"
    }
    // config of other tasks

  });
  // register tasks
  grunt.registerTask('default', ['loopback_sdk_angular', 'docular']);
  grunt.registerTask('services', ['loopback_sdk_angular']);
  grunt.registerTask('docs', ['docularserver']);
}
