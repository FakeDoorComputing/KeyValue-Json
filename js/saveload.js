var chocolates={"item":[
  {"name":"Mars Bar","weight":"51g","kcal":"228","fat":"8.5g","carbohydrate":"35.3g","sugar":"30.5g","salt":"0.21g"},
  {"name":"Galaxy Honeycomb","weight":"22.8g","kcal":"125","fat":"7.3g","carbohydrate":"13.2g","sugar":"13.0g","salt":"0.06g"},
  {"name":"Maltesers","weight":"37g","kcal":"186","fat":"9.1g","carbohydrate":"22.8g","sugar":"19.1g","salt":"0.17g"}
]};

var chocNo=0;

var chocString=JSON.stringify(chocolates);
window.localStorage.setItem("chocData",chocString);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

    $("#mars").click(function(){
      chocNo=0;
      displayNV();
    });

    $("#galaxy").click(function(){
      chocNo=1;
      displayNV();
    });

    $("#maltesers").click(function(){
      chocNo=2;
      displayNV();
    });
}

function displayNV(){
  var name=[],weight=[],cal=[],fat=[],carb=[],sugar=[],salt=[];
  var getChoc=window.localStorage.getItem("chocData");
  var chocParse=JSON.parse(getChoc);
  for(i=0;i<chocParse.item.length;i++){
    var counter=chocParse.item[i];
    name[i]=counter.name;
    weight[i]=counter.weight;
    cal[i]=counter.kcal;
    fat[i]=counter.fat;
    carb[i]=counter.carbohydrate;
    sugar[i]=counter.sugar;
    salt[i]=counter.salt;
  };

//  window.localStorage.clear();

$("#choc").text(name[chocNo]);
$("#chocWeight").text(weight[chocNo]);
$("#chocCalFat").text("Each bar contains "+cal[chocNo]+" calories and "+fat[chocNo]+" of fat,");
$("#chocCarbSug").text(carb[chocNo]+" of carbohydrates (of which "+sugar[chocNo]+" is sugar),");
$("#chocSalt").text("and "+salt[chocNo]+" of salt.");

$("#displayValues").fadeIn();
};
