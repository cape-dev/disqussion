# Disqussion
### A tiny wrapper around the DISQUS API.

### Demo:

Just run the following command in the root of this repo
`npm run demo`

Now open the browser and go to http://localhost:8080/

### Usage:

When loading this script the lib exposes the global variable `disqussion`.

*Disqussion* has to be configured before you can use it properly. To do this you have to at least pass in the *shortname* of the DISQUS site you refer to. There are several optional attributes which can be passed in.

#### shortname
Tells the Disqus service your forum's shortname, which is the unique identifier for your website as registered on Disqus.

#### url
Tells the Disqus service the URL of the current page. 
If undefined, Disqus will take the `window.location.href`. This URL is used to look 
up or create a thread if identifier is undefined. In addition, this URL 
is always saved when a thread is being created so that Disqus knows what page a thread belongs to.

#### title
Tells the Disqus service the title of the current page. 
This is used when creating the thread on Disqus for the first time. 
If undefined, Disqus will use the `<title>` attribute of the page. If that attribute could not be used, 
Disqus will use the URL of the page.

#### identifier
Tells the Disqus service how to identify the current page. 
When the Disqus embed is loaded, the identifier is used to look up the correct thread. 
If identifier is undefined, the page's URL (or the passed in url) will be used. The URL can be unreliable, 
such as when renaming an article slug or changing domains, so we recommend using your own unique way of identifying a thread.

#### category
Tells the Disqus service the category to be used for the current page. This is used when creating the thread on Disqus for the first time.
Categories are primarily used with our API for results filtering; categories are not used for moderation 
(e.g., to filter comments by category in the moderation panel).


*disqussion* gets configured as follows in a `<script>` tag:
`var disqus = disqussion({shortname: 'foobars'});`


### createDisqusWidget

This function is available on the disqus variable after configuring *disqussion*.

`disqus.createDisqusWidget()`

The function creates a new discussion if loaded for the first time with the given configuration or loads the corresponding disqus history
if one with the given `identifier` or `url` or `pages url determined by window.location.href`.

The DISQUS widget gets loaded in a container with the id `disqus_thread`. This means that the html *must* contain such a container in order to load the widget properly.

For a proper example see the html files in the "demo" directory.


### initCommentCounts

This function is available on the disqus variable after configuring *disqussion*.

`disqus.initCommentCounts()`

The function inserts the comment count for the referenced DISQUS discussions.

The function looks for elements on the site which have the class `disqus-comment-count`.
The element also has to have a an attribute which references a DISQUS discussion. Here you have 2 possibilities in referencing one:

***data-disqus-identifier*** where its value is an unique identifier for a DISQUS discussion

or

***data-disqus-url*** where its value is an unique absolute url for a DISQUS discussion

The replacement executed by this function can be configured in the administration section of your DISQUS website under `Settings` > `Community`.
The following image shows this administration:
![https://disqus-cloudfront.s3.amazonaws.com/docs/comment-count-link-customization.png](https://disqus-cloudfront.s3.amazonaws.com/docs/comment-count-link-customization.png "Comment Count Customization")

For a proper example see the html files in the "demo" directory.
