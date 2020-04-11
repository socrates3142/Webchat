/***
Notes:
- Not much error handling capabilities, when domain is down, the app appears non-responsive
***/

const {WebView, contentView} = require('tabris');

new WebView({
  left: 0, right: 0, top: 0, bottom: 0,
  url: 'http://dev.travelgowhere.com.sg/admin/modules/pusher/webchat-mobile'
}).appendTo(contentView);