var Metalsmith    = require('metalsmith'),
    branch        = require('metalsmith-branch'),
    markdown      = require('metalsmith-markdown'),
    templates     = require('metalsmith-templates'),
    collections   = require('metalsmith-collections'),
    permalinks    = require('metalsmith-permalinks'),
    drafts        = require('metalsmith-drafts'),
    Handlebars    = require('handlebars'),
    fs            = require('fs'),
    sass          = require('metalsmith-sass');
    autoprefixer  = require('metalsmith-autoprefixer'),
    metallic      = require('metalsmith-metallic'),
    cleanCSS      = require('metalsmith-clean-css'),
    uglify        = require('metalsmith-uglify'),
    htmlescape    = require('metalsmith-htmlescape'),
    headingsidentifier = require('metalsmith-headings-identifier'),
    watch         = require('metalsmith-watch'),
    serve         = require('metalsmith-serve');


Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

Metalsmith(__dirname)
    .use(sass({
      outputStyle: 'expanded',
      outputDir: 'css/'
    }))
    .use(metallic())
    .use(autoprefixer())
    .use(drafts())
    .use(collections({
        blog: {
            pattern: 'content/blog/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(markdown())
    .use(templates('handlebars'))
      .use(permalinks({
          pattern: ':collection/:title',
          relative: false
      }))
//    .use(cleanCSS())
//    .use(uglify())
    .use(htmlescape())
    .use(headingsidentifier())
    .use(watch({
      pattern: '**/*',
      livereload: true
    }))
    .use(serve())
    .destination('./build')
    .build(function(err, files) {
        if (err) { throw err; }
    });
