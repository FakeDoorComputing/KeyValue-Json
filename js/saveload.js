function save(){
var kval=[], ret=[];
var x = $("form").serializeArray();
$.each(x, function(i, field){
  kval[i]=field.value;
});
  for(n=0, o=1;n<9;n+=2, o+=2){
    window.localStorage.setItem(kval[n],kval[o]);
  }
  for(n=0;n<9;n+=2){
    ret[n]=window.localStorage.getItem(kval[n]);
  };
  for(m=1, n=0, o=1; m<11; m++, n+=2, o+=2){
  $("#kv"+m).text(kval[n]+" : "+kval[o]);
  };

  $("#login").fadeOut("slow",function(){$(".savedData").fadeIn();});
  window.localStorage.clear();
}
