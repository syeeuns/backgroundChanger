const color = document.querySelector("span");
const body = document.querySelector("body");
const btn = document.querySelector("button");

function color_name(){
  var arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var result = '#';
  
  for(var i=0; i<6; i++){
    var random_num = Math.floor(Math.random() * arr.length);
    result = result + arr[random_num];
  }
  return result;
}

function set_color(element, color){
  element.style.backgroundColor = color;
}

function handleClick(){
  resultColor = color_name();
  color.innerText = resultColor;
  set_color(body, resultColor);
}

function init(){
  color.innerText = '#FFFFFF';
  set_color(body, '#FFFFFF');
  btn.addEventListener("click", handleClick);
}

init();