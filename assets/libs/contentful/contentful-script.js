app = angular.module('myApp', ['contentful']);

app.factory('dataService', ['$http', function ($http) {
        var dataFactory = {};
        dataFactory.getContentBodyFromMarkdown = function(contentBody) {
          var contentHTML = '';
          var converter = new showdown.Converter();
          contentHTML = converter.makeHtml(contentBody);
          return contentHTML;
        }
        return dataFactory;
}]);
/*app = angular.module('myApp', ['contentful'])
    .directive('markdown', function () {
        var converter = new showdown.converter();
            return{
                restrict: 'E',
                link: function (scope,element,attrs){
                    var htmlText =converter.makeHtml(element.text());
                    element.html(htmlText)
                }
            }
    })


*/
