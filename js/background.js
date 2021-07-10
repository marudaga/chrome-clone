const images = ["디오션펜션.jpg", "롯데호텔.jpg", "현대호텔.jpg"];
 
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage =document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

bgImage.width = 500;

/*appendChild(x)는 x를 appendChild앞에 적힌 주소로 위치를 이동한다.
 src=""으로 들어가니 안에 object를 넣을 때는 `${}`를 사용한다.
==는 다른 type이어도 변환하여 비교하고 ===는 type변환을 해주지 않아서 다른 type이면 바로false를 반환
js에서 html에 추가하고 싶으면  createElement로 html의 document에 만들고  src로 이미지를 불러오고 
html의 document에서 원하는 위치로 옮겨준다.*/