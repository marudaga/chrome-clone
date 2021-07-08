const quotes = [
    {
      quote: "걱정 없는 인생을 바라지 말고 걱정에 물들지 않는 연습을 하라",
      author: "알랭",
    },
    {
      quote: "반성은 하되 자학하지 마세요",
      author: "장국영",
    },
    {
      quote:
        "힘들어 죽을거 같아도 다 지나간다.",
      author: "나",
    },
    {
      quote: "누군가를 설득ㅎ기 전에 자신부터 설득하라",
      author: "존 헨리 패터슨",
    },
    {
      quote: "인생을 살아가는 데는 오직 두가지 방법밖에 없다. 하나는 아무것도 기적이 아닌 것처럼, 다른 하나는 모든 것이 기적인 것처럼",
      author: "아인슈타인",
    },
    {
      quote: "미친 짓이란 매번 똑같은 행동을 반복하면서 다른 결과를 기대하는 것이다",
      author: "아인슈타인",
    },
    {
      quote: "나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다",
      author: "아인슈타인",
    },
    {
      quote: "지혜는  학교에서 배우는 것이 아니라 평생 노력해 얻는 것이다.",
      author: "아인슈타인",
    },
    {
      quote: "가장 중요한 것은 질문을 멈추지 않는 것이다",
      author: "아인슈타인",
    },
    {
      quote: "구체적이고 시각적으로 생각하자",
      author: "나",
    },
  ];
  const quote=document.querySelector("#quote span:first-child");
  const author =document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
  //array[0-9]으로 몇번부터 몇번까지 표현할지 나타낼수있다.
  //math.round(x)x를 반올림 math.ceil(1.1) 올림result=2 math.floor(1.1)내림result=1 
  //math.random()*x 0부터x까지 랜덤 호출
  