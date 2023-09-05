app.config(function(contentfulProvider) {
  contentfulProvider.setOptions({
      space: '8g5m1gx15sfe',
      accessToken: '814225bbd6376f7391ac4e03f316e5ae26cb696784c2df9e9fdfe64885b90d3b',
  });
});
/*app.controller(function(contentful, $rootScope, dataService, $sce) {
  $rootScope = function(page) {
      $rootScope.contactPage = false;
      var pageTitle = '', container = '';
      switch(page) {
          case 'contactPage':   container = 'contactPage';
                          break;
          
      }
      contentful
          .entries("pageType=page&select=fields.pageBody&fields.pageTitle=" + pageTitle)
          .then(function(response) {
              if(response.data.items.length > 0 && response.data.items[0] !== undefined && response.data.items[0].fields !== undefined && response.data.items[0].fields.pageBody !== undefined) {
                  $rootScope[container] = $sce.trustAsHtml(dataService.getContentBodyFromMarkdown(response.data.items[0].fields.pageBody));
              } else {
                  console.log('Content not fetched');
              }
          }, function() {
              alert("Contentful is down");
          });
  };
});*/
/*app.controller('footerController', function(contentful, $rootScope, dataService, $sce) {
  $rootScope.fetchFromContentful = function(page) {
      $rootScope.termsContent = $rootScope.privacyContent = $rootScope.rulesContent = $rootScope.cookieContent = false;
      var pageTitle = '', container = '';
      switch(page) {
          case 'terms':   pageTitle = 'TERMS AND CONDITIONS';
                          container = 'termsContent';
                          break;
          case 'privacy': pageTitle = 'PRIVACY POLICY';
                          container = 'privacyContent';
                          break;
          case 'rules':   pageTitle = 'RULES OF MEMBERSHIP';
                          container = 'rulesContent';
                          break;
          case 'cookies': pageTitle = 'COOKIE POLICY';
                          container = 'cookiesContent';
                          break;
      }
      contentful
          .entries("content_type=contentPages&select=fields.pageBody&fields.pageTitle=" + pageTitle)
          .then(function(response) {
              if(response.data.items.length > 0 && response.data.items[0] !== undefined && response.data.items[0].fields !== undefined && response.data.items[0].fields.pageBody !== undefined) {
                  $rootScope[container] = $sce.trustAsHtml(dataService.getContentBodyFromMarkdown(response.data.items[0].fields.pageBody));
              } else {
                  console.log('Content not fetched');
              }
          }, function() {
              alert("Contentful is down");
          });
  };
});
*/