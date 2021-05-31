
var Links = {
  setcolor : function(color) {
    var alist = document.querySelectorAll('a');
    var i=0;
    while (i < alist.length){
      alist[i].style.color= color;
      i = i+1;
      }
  }
}

  var Body = {
    setcolor : function(color) {
      document.querySelector('body').style.color = color;
    },
    setbackgroundcolor : function(color) {
      document.querySelector('body').style.backgroundColor = color;
    }
  }


function nightdayhandler(self){
  var bodytag = document.querySelector('body');
  if(self.value === 'night') {
  self.value = 'day';
  Links.setcolor('#28b5b5');
  Body.setbackgroundcolor('#393e46');
  Body.setcolor('white');
  }

  else {
  self.value = 'night';
  Links.setcolor('#28b5b5');
  Body.setcolor('black');
  Body.setbackgroundcolor('white');
  }
}
