var Monaco = this.Monaco = (this.Monaco || {});
var self = this;

/* -- UTILITIES -------------------------------------------------------- */
Monaco.utils = Monaco.utils || {};

Monaco.utils.setCookie = function( key, value, days, baseDomain ) {
  days = ( days && _.isNumber(days) ) ? days : 365;

  var date = new Date();
  date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
  var expires = '; expires=' + date.toGMTString();

  value = escape( value );
  var cookieString = key + '=' + value + expires + '; path=/;';
  if ( baseDomain ) {
    var domain = self.document.domain.split('.');
    domain = '.' + domain[ domain.length - 2 ] + '.' + domain[ domain.length - 1 ];
    cookieString += ' domain=' + domain + ';';
  }
  self.document.cookie = cookieString;
};

Monaco.utils.getCookie = function( key ) {
  var result = null;
  return ( result = new RegExp( '(?:^|; )' + encodeURIComponent( key ) + '=([^;]*)' ).exec( self.document.cookie ) ) ? result[1] : null;
};
