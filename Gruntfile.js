
module.exports = function (grunt) {
    'use strict';

    // load extern tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    // tasks
    grunt.initConfig({

// ---------------------------------------------

// ---------------------------------------------
//                          build and dist tasks
// ---------------------------------------------

        typescript: {
            build: {
                src: [
                    'scripts/**/*.ts'
                ],
                dest: 'build/js/Core.js'
            },
            test: {
                src: [
                    'tests/**/*.ts'
                ],
                dest: 'build/tests/Test.js'
            }
        },
// ---------------------------------------------

// ---------------------------------------------
//                                 doc tasks
// ---------------------------------------------
        yuidoc: {
            compile: {
                name: 'The 6th Screen - Core',
                description: 'Core module for The 6th Screen products.',
                version: '0.0.1',
                url: 'http://www.the6thscreen.fr',
                options: {
                    extension: '.ts, .js',
                    paths: ['scripts/'],
                    outdir: 'doc/'
                }
            }
        },
// ---------------------------------------------

// ---------------------------------------------
//                                 test tasks
// ---------------------------------------------
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    colors: true,
                    captureFile: 'build/tests/result.txt'
                },
                src: ['build/tests/Test.js']
            },
            jenkins: {
                options: {
                    reporter: 'mocha-jenkins-reporter',
                    quiet: true,
                    reporterOptions: {
                        "junit_report_name": "Tests",
                        "junit_report_path": "build/tests/report.xml",
                        "junit_report_stack": 1
                    }
                },
                src: ['build/tests/Test.js']
            }
        },

        mocha_istanbul: {
            coverage: {
                src: 'build/tests/', // a folder works nicely
                options: {
                    mask: '*.js',
                    root: 'build/tests/',
                    reportFormats: ['cobertura', 'html'],
                    coverageFolder: 'build/coverage'
                }
            },
        },
// ---------------------------------------------

// ---------------------------------------------
//                                    clean task
// ---------------------------------------------
        clean: {
            build: ['build/'],
            doc: ['doc'],
            test: ['build/tests/', 'build/coverage/']
        }
// ---------------------------------------------
    });

    grunt.registerTask('default', ['test']);

    grunt.registerTask('doc', ['clean:doc', 'yuidoc']);

    grunt.registerTask('initTest', function() {
        grunt.task.run(['clean:build']);
        grunt.task.run(['typescript:build','typescript:test']);
    });

    grunt.registerTask('coverage', ['initTest', 'mocha_istanbul:coverage']);
    grunt.registerTask('test', ['initTest', 'mochaTest:test']);

    grunt.registerTask('jenkins', ['initTest', 'mochaTest:jenkins', 'mocha_istanbul:coverage', 'clean:package']);

}

