(function () {
    'use strict';

    var app = {

        routes: {

            any: {

                rendered: function () {

                  document.querySelector('body').scrollTop = 0;
                  app.routeElem.querySelector('h1').setAttribute('tabindex', '-1');
                  app.routeElem.querySelector('h1').focus();

                }

            },

            settings: {

                rendered: function () {

                    console.log('this view is the "Settings View"');
                    //console.log(app.routeElem);
                    
                    app.routeElem.innerHTML = '<h1 class="page-header">Dynamic Settings Content</h1>';
                }

            },

            overview: {

                rendered: function () {

                    console.log('this view is the "Overview View"');
                    //app.routeElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';
                }

            },

            dashboard: {

                rendered: function () {

                    console.log('this view is the "Dashboard View"');
                    //app.routeElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';
                }

            },

            reports: {

                rendered: function () {

                    console.log('this view is the "Overview View"');
                    //app.routeElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';

                }

            },

            analytics: {

                rendered: function () {

                    console.log('this view is the "Overview View"');
                    //app.routeElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';

                }

            },

            'export': {

                rendered: function () {

                    console.log('this view is the "Overview View"');
                    //app.routeElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';

                }

            }

        },

        /* 
         * Future progression of code
         * 
         * 1. Add specific routing upon authentication integration to determine
         * whether or not a user is logged in and route them to the correct page
         * base on their authentication status. Incorporate a function that tests 
         * authentication in an if else statement and link the specific page title 
         * string to pass in to hae rendered in the browser.
         *
         */
        'default': 'dashboard',

        routeChange: function () {

            app.routeID = location.hash.slice(1);
            app.route = app.routes[app.routeID];
            app.routeElem = document.getElementById(app.routeID);
            app.routes['any'].rendered();

            if (app.route) {
                app.route.rendered();
            }

        },

        init: function () {

            window.addEventListener('hashchange', function () {
                console.log('this view\'s id is %s', location.hash.substr(1));
                var viewID = location.hash.slice(1);
                var viewElem = document.getElementById(viewID);

                //viewElem.innerHTML = '<h1>View loaded!</h1>';
                app.routeChange();

            });

            if (!window.location.hash) {

                window.location.hash = app.default;

            } else {

                app.routeChange();

            }

        }

    };

    window.app = app;

})();

app.init();