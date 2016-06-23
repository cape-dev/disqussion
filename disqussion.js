window.disqussion = function(options) {
  'use strict';

  options = options || {};
  if (!options.shortname) {
    throw 'no disqus shortname has been given as an option!';
  }

  var config = {
    shortname: options.shortname,
    url: options.url,  //your page's canonical URL
    title: options.title,
    identifier: options.identifier, // your page's unique identifier
    category: options.category // the discussions category
  };

  function createDisqusWidget() {
    window.disqus_config = function() {
      if (config.url) {
        this.page.url = url;
      }
      if (config.title) {
        this.page.title = config.title;
      }

      if (config.identifier) {
        this.page.identifier = config.identifier.toString();
      }
      if (config.category) {
        this.page.category_id = config.category.toString();
      }
    };

    addEmbedScript();

    function addEmbedScript() {
      var script = document.createElement('script');

      script.src = '//' + config.shortname + '.disqus.com/embed.js';

      script.setAttribute('async', '');
      script.setAttribute('data-timestamp', +new Date());
      (document.head || document.body).appendChild(script);
    }
  }

  function initCommentCounts() {
    var script = document.createElement('script');

    script.src = '//' + config.shortname + '.disqus.com/count.js';

    script.setAttribute('async', '');
    script.setAttribute('id', 'dsq-count-scr');
    (document.head || document.body).appendChild(script);
  }

  return {
    createDisqusWidget: createDisqusWidget,
    initCommentCounts: initCommentCounts
  }
};
