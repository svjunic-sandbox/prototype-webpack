function base() {
  console.log( 'constructer' );
}

base.prototype = {
  echo : function( str ){
    console.log( str + ' module!' );
  }
};

module.exports = base;
