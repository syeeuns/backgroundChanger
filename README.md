# backgroundChanger

버튼 클릭하면 Hex color code가 랜덤하게 생성되고 해당 색상으로 배경색이 바뀌고, 해당 색상 Hex color code 나오는 페이지 만들어보기
<br>

### 📌 CSS : 글씨, 버튼 페이지 가운데 위치
세로 가운데 정렬
```css
.box{
  width: 400px; 
  position: absolute;
  top: 30%;
  left: 37%;
  text-align: center;
}
```
`position: absolute;` 하면 body 기준으로 위치함
위치봐가면서 top, left 퍼센트 조절


<br>

### 📌 JS : 색상이름 랜덤 추출
```js
function color_name(){
  var arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var result = '#';
  
  for(var i=0; i<6; i++){
    var random_num = Math.floor(Math.random() * arr.length);
    result = result + arr[random_num];
  }
  return result;
}
```
0~9, A~F 들어있는 배열 선언하고 배열 요소 6개 랜덤추출해서 합치기
랜덤 추출은 `Math.floor`, `Math.random` 함수 이용
인덱스 0~15 까지니까 내림해주기

<br>

### 📌 JS : 색상이름 텍스트 띄우기
```js
const color = document.querySelector("span");
resultColor = color_name();

color.innerText = resultColor;
```
`innerText` 이용

<br>

### 📌 JS : 랜덤추출된 색상으로 배경색 바꾸기
```js
const body = document.querySelector("body");

function set_color(element, color){
  element.style.backgroundColor = color;
}

set_color(body, resultColor);
```
`element.style.backgroundColor` 이용하여 JS로 배경색 바꿀 수 있음

<br>

### 📌 JS : 초기에 흰색 화면, 버튼 누르면 변하기
```js
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
```
초기에 흰색 화면으로 시작하고, `addEventListener` 로 클릭 시 handleClick 함수 호출하도록 함
