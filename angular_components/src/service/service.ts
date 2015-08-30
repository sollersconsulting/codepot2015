module app.services {
  "use strict";

  // it's returned that's why export
  export interface IUser {
    id: string;
    name: string;
  }

  export interface IUserService {
    getById(id: string): ng.IPromise<IUser>;
  }

  class UserService implements IUserService {
    static $inject = ["http"];

    constructor(private $http) {
    };

    getById(id: string): ng.IPromise<IUser> {
      return this.$http.get("api/users/" + id)
        .then((response: ng.IHttpPromiseCallbackArg<IUser>)=> {
          return response.data;
        });
    }
  }

  angular.module("app.services")
    .service("UserService", UserService);
}