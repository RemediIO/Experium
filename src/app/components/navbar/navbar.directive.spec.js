"use strict";
describe('directive navbar', function () {
    var element;
    var navbarController;
    var timeInMs;
    beforeEach(angular.mock.module('Experium'));
    beforeEach(inject(function ($compile, $rootScope) {
        var currentDate = new Date();
        timeInMs = currentDate.setHours(currentDate.getHours() - 24);
        element = angular.element("\n      <experium-navbar creation-date=\"" + timeInMs + "\"></experium-navbar>\n    ");
        $compile(element)($rootScope.$new());
        $rootScope.$digest();
        navbarController = element.isolateScope().vm;
    }));
    it('should be compiled', function () {
        expect(element.html()).not.toEqual(null);
    });
    it('should have isolate scope object with instanciate members', function () {
        expect(navbarController).not.toBeNull();
        expect(navbarController.creationDate).toEqual(timeInMs);
        expect(navbarController.relativeDate).toEqual('a day ago');
    });
});
