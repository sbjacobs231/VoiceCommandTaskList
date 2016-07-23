var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star ' + text + '"' + '></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};
var templateRemove = function(thing) {
  $('.'+thing).parent().remove();
};
var templateStar = function(twinkle) {
  $('.'+twinkle).toggleClass('active');
};

var main = function() {
  $('form').submit(function() {
      var text = $('#todo').val();
    	var html = template(text);
    	$('.list').append(html);
    	$('#todo').val('');
    return false;  
  });
  $(document).on("click",'.glyphicon-star',function(){
    $(this).toggleClass('active');
  });
  $(document).on("click",'.glyphicon-remove',function(){
    $(this).parent().remove();
  });
  
  //ANNYANG
  var add = function(item) {
    item=item.toLowerCase();
  	var html = template(item);
  	$('.list').append(html);
  };
  var remove = function(rItem) {
    rItem=rItem.toLowerCase();
    templateRemove(rItem);
  };
  //Star Glyphicon using voice here
  var star = function(twinkle) {
    twinkle=twinkle.toLowerCase();
    templateStar(twinkle);
  };
  var commands = {
	// annyang will capture anything after a splat (*) and pass it to the function.
  	'add *item': add,
    'remove *rItem': remove,
    'star *twinkle': star,
  };
  // Add our commands to annyang
  annyang.addCommands(commands);
  // Start listening
  annyang.start();

};

$(document).ready(main);