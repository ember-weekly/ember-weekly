// Generated on 2013-03-31 using generator-webapp 0.1.5
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    ////////////////////////////////////////////////////////////////////////

    var newsletterYaml = 'newsletter/content/ew-issue-69-[2014-08-10].yaml';

    ////////////////////////////////////////////////////////////////////////

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,webp}'
                ],
                tasks: ['livereload']
            },
            news: {
                files: ['newsletter/**/*.{yaml,handlebars}'],
                tasks: ['news']
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            dist: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: '.tmp/spec',
                    src: '*.coffee',
                    dest: 'test/spec'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: 'app/components',
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: 'app/scripts',
                    optimize: 'none',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'CNAME'
                    ]
                }]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        },

        shell: {
            options:{
                stdout: true,
                stderr: true,
                failOnError: true
            },
            pushDist: {
                command: 'git add dist && git commit -m "update dist" && git push'
            },
            deployPages: {
                command: 'git subtree push --prefix dist origin gh-pages'
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'coffee:dist',
            'compass:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'coffee',
        'compass',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'coffee',
        'compass:dist',
        'useminPrepare',
        // 'requirejs',
        'imagemin',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'shell:pushDist',
        'shell:deployPages'
    ]);


    grunt.registerTask('news', function (arg1) {
        var Handlebars = require('handlebars');
        var Showdown = require('showdown');
        var URL = require('url');
        var validator = require('validator');
        var httpcheck = require('httpcheck')
        var RSVP = require('rsvp');

        var markdownConverter = new Showdown.converter();

        var templatePath = arg1 === 'text' ? 'newsletter/text-template.handlebars' : 'newsletter/template.handlebars';
        var outputPath = 'newsletter/issues/';
        var content = {};
        var template = '';

        if (!newsletterYaml && !grunt.file.exists(newsletterYaml)) {
            grunt.log.error('error - no yaml file at ' + newsletterYaml);
            return;
        }

        content = grunt.file.readYAML(newsletterYaml);

        grunt.log.write('yaml - ', content);

        if (templatePath && grunt.file.exists(templatePath)){
            template = grunt.file.read(templatePath);
        }else{
            grunt.log.error('error - no template at ' + templatePath);
        }

        if (!template){
            grunt.log.error('no template found');
            return;
        }

        var convertToHTML = function(description){
            if (description){
                var desc = markdownConverter.makeHtml(description);
                //very naive way to remove paragragh tag added by showdown
                if (desc){
                    desc = desc.substring(3, desc.length);
                    desc = desc.substring(0, desc.length - 4);
                    return new Handlebars.SafeString(desc);
                }
            }
            return '';
        };

        content.content.forEach(function(section){
            section.descriptionHTML = convertToHTML(section.description);
            if (section.headlines){
                section.headlines.forEach(function(headline){
                    headline.descriptionHTML = convertToHTML(headline.description);

                    try{
                        validator.check(headline.link).isUrl();
                    }catch(e){
                        if (headline.link.indexOf('mailto:') !== -1){
                            grunt.log.warn('Double check that the following mailto is vailid', headline.link);
                        }else {
                            grunt.log.error('\nInvalid url for "' + headline.link + '" in headline', headline);
                            throw e;
                        }
                    }

                    headline.domain = URL.parse(headline.link).hostname.replace('www.', '');
                });
            }
        });

        var done = this.async();

        var allPromise = [];
        var validateURL = true;

        //Check for URL 404
        if (validateURL){
            content.content.forEach(function(section){
                if (section.headlines){
                    section.headlines.forEach(function(headline){
                        var promise = new RSVP.Promise(function(resolve, reject) {
                            httpcheck({
                                url: headline.link,
                                log: grunt.log.debug,
                                checkTries:3,
                                check: function(res) {
                                    if (res && res.statusCode !== 404) {
                                        return true;
                                    }
                                    grunt.log.warn('HTTP check Failed ' + res.statusCode + ' for url "' + headline.link + '"');
                                    return false;
                                }
                            }, function(err) {
                                if (err) {
                                    reject(err);
                                }
                                resolve(headline.link);
                            });
                        });

                        promise.then(function(link) {
                            grunt.log.debug('HTTP check for "' + link + '" passed!');
                        }, function(link) {
                            grunt.log.error('HTTP check for "' + link + '" failed!');
                        });
                        allPromise.push(promise);
                    });
                }
            });
        }

        RSVP.all(allPromise).then(function() {
            done();
            var html = Handlebars.compile(template)(content);

            var extension = arg1 === 'text' ? '.txt' : '.html';

            var outputFileName = 'ew-issue-' + content.issue + extension;
            grunt.log.write('\nwriting ' + outputFileName + '...\n');
            grunt.file.write(outputPath + outputFileName, html);
        });
    });


};
