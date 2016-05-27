namespace app {
  'use strict';

  angular.module('skeleton')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig(
    $stateProvider      : ng.ui.IStateProvider,
    $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/sample');

    // Default layout
    var layoutStyle = 'verticalNavigation';

    var layouts = {
      verticalNavigation  : {
        main      : 'app/core/layouts/vertical-navigation.html',
        navigation: 'app/navigation/layouts/vertical-navigation/navigation.html'
      },
      horizontalNavigation: {
        main      : 'app/core/layouts/horizontal-navigation.html',
        navigation: 'app/navigation/layouts/horizontal-navigation/navigation.html'
      },
      contentOnly         : {
        main      : 'app/core/layouts/content-only.html',
        navigation: ''
      },
      contentWithToolbar  : {
        main      : 'app/core/layouts/content-with-toolbar.html',
        navigation: ''
      }
    };

    $stateProvider
      .state('app', {
        abstract: true,
        views   : {
          'main@'         : {
            templateUrl: layouts[layoutStyle].main,
            controller : 'MainController as vm'
          },
          'navigation@app': {
            templateUrl: layouts[layoutStyle].navigation,
            controller : 'NavigationController as vm'
          }
        }
      });
  }
}
