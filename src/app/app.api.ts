namespace app {
  'use strict';

  angular
    .module('skeleton')
    .factory('api', apiService);


  /** @ngInject */
  function apiService($resource)
  {
    const config:any = {
      env: 'dev'
    };

    const baseUrls: any = {
      dev: {
        base: '/api/',
      },
      prod: {
        base: 'bcp/api/'
      }
    };

    interface IAPI {
      currentEnvironment: string;
      baseUrl(): string;
      app: any;
    }

    var api:IAPI = {
      currentEnvironment: config.env,
      baseUrl: () => {
        return baseUrls[this.currentEnvironment].base;
      },
      app: {}
    };

    api.app.sample = {
      list     : $resource(this.baseUrl() + 'sample'),
      getById  : $resource(this.baseUrl() + 'sample', {id: '@id'}),
      getByDate: $resource(this.baseUrl() + 'sample', {date: '@date'})
    };

    return api;
  }
}
