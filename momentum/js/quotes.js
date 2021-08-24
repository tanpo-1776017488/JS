const quotes=[
    {
        quote:'자신감은 전염된다. 자신감의 부족도 마찬가지다',
        author:'빈스 롬바르디',
    },
    {
        quote:'얕은 사람은 행운을 믿으며, 강한 사람은 원인과 결과를 믿는다',
        author:'랄프 왈도 에머슨',
    },
    {
        quote:'하지 말아야 할 것을 효울적으로 하는 것보다 더 비생산적인 것은 없다.',
        author:'피터 드러커',
    },
    {
        quote:'아무리 뛰어난 이론이라 해도 어린아이가 이해할 수 있는 수준으로 설명하지 못한다면 아무 짝에도 쓸모없다.',
        author:'알버트 아인슈타인',
    },
    {
        quote:'수학은 논리적인 생각을 표현하는 한편의 시이다.',
        author:'알버트 아인슈타인',
    },
    {
        quote:'신은 주사위 놀이를 하지 않는다.',
        author:'알버트 아인슈타인',
    },
    {
        quote:'우리는 신학자가 아니라 물리학자이다.',
        author:'닐스 보어',
    },
    {
        quote:'양자역학을 접하고서도 놀라지 않는 사람은 그것을 제대로 이해하지 못한 사람이다.',
        author:'닐스 보어',
    },
    {
        quote:'다른건 몰라도 양자역학을 제대로 이해하는 사람이 이 세상에 단 한명도 없다는 것만은 자신있게 말할 수 있다.',
        author:'리처드 파인만',
    },
    {
        quote:'내가 다른 사람들보다 더 멀리 볼 수 잇었던 것은 거인의 어깨에 서 있을 수 있었기 때문입니다.',
        author:'아이작 뉴턴',
    },
]

const quote=document.querySelector('#quote span:first-child');
const author=document.querySelector('#quote span:last-child');

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;