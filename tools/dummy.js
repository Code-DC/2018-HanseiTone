const models = require('../models');

module.exports = {
  insert: (req, res, next) => {
    let place = [
      { pId: '1', placeName: '본전돼지국밥', address: '부산광역시 동구 중앙대로214번길 3-8', imagePath: 'Images/돼지국밥.jpg' },
      { pId: '2', placeName: '광안대교', address: '부산광역시 수영구 광안동', imagePath: 'Images/광안대교.jpg' },
      { pId: '3', placeName: '부산타워', address: '부산광역시 중구 용두산길 37-30', imagePath: 'Images/부산타워.jpg' },
      { pId: '4', placeName: '부산국제시장', address: '부산광역시 중구 신창동4가', imagePath: 'Images/부산국제시장.jpg' },
      //
      { pId: '5', placeName: '착한생오리', address: '부산광역시 남구 이기대공원로12번길', imagePath: 'Images/착한생오리.jpg' },
      { pId: '6', placeName: '부산서핑스팟&나이트마켓', address: '부산광역시 수영구 광안로 64 지하1층', imagePath: 'Images/부산서핑스팟&나이트마켓.jpg' },
      { pId: '7', placeName: '168계단 전망대', address: '부산광역시 동구 초량동 994-873', imagePath: 'Images/168계단.jpg' },
      { pId: '8', placeName: '부산자갈치시장', address: '부산광역시 중구 자갈치해안로 52 자갈치시장', imagePath: 'Images/부산자갈치시장.jpg' },
      //
      { pId: '9', placeName: '이재모피자', address: '부산광역시 중구 광복중앙로 31', imagePath: 'Images/이재모피자.jpg' },
      { pId: '10', placeName: '광안리해수욕장', address: '부산광역시 수영구 광안해변로 219', imagePath: 'Images/광안리해수욕장.jpg' },
      { pId: '11', placeName: '황령산전망대', address: '부산광역시 남구 황령산로 391-39', imagePath: 'Images/황령산.jpg' },
      { pId: '12', placeName: '부평깡통시장', address: '부산광역시 중구 부평1길 48', imagePath: 'Images/깡통시장.jpg' },
      //
      { pId: '13', placeName: '신발원', address: '부산광역시 동구 대영로243번길 62', imagePath: 'Images/신발원.jpg' },
      { pId: '14', placeName: '아쿠아펠리스온천', address: '부산광역시 수영구 광안해변로 225', imagePath: 'Images/아쿠아펠리스온천.jpg' },
      { pId: '15', placeName: '청학배수지전망대', address: '부산광역시 영도구 청학동', imagePath: 'Images/청학배수지.jpg' },
      { pId: '16', placeName: '해운대시장', address: '부산광역시 해운대구 구남로41번길 22-1', imagePath: 'Images/해운대시장.jpg' },
      //
      { pId: '17', placeName: '초량밀면', address: '부산광역시 해운대구 구남로 20', imagePath: 'Images/초량밀면.jpg' },
      { pId: '18', placeName: '광안리해변공원', address: '부산광역시 수영구 민락동', imagePath: 'Images/광안리해변공원.jpg' },
      { pId: '19', placeName: '수영만요트경기장', address: '부산광역시 해운대구 해운대해변로 84', imagePath: 'Images/수영만요트경기장.jpg' },
      { pId: '20', placeName: '동래시장', address: '부산광역시 동래구 동래시장길 14 동래시장', imagePath: 'Images/동래시장.jpg' }
    ];
    let tag = [
      { pId: '1', tagName: '부산맛집' },
      { pId: '1', tagName: '국밥' },
      { pId: '2', tagName: '요트' },
      { pId: '2', tagName: '광안리' },
      { pId: '3', tagName: '경치' },
      { pId: '3', tagName: '아경' },
      { pId: '4', tagName: '시장' },
      { pId: '4', tagName: '분식' },
      //
      { pId: '5', tagName: '부산맛집' },
      { pId: '5', tagName: '오리' },
      { pId: '6', tagName: '서핑' },
      { pId: '6', tagName: '광안리' },
      { pId: '7', tagName: '경치' },
      { pId: '7', tagName: '야경' },
      { pId: '8', tagName: '시장' },
      { pId: '8', tagName: '해산물' },
      //
      { pId: '9', tagName: '부산맛집' },
      { pId: '9', tagName: '피자' },
      { pId: '10', tagName: '바다' },
      { pId: '10', tagName: '광안리' },
      { pId: '11', tagName: '경치' },
      { pId: '11', tagName: '야경' },
      { pId: '12', tagName: '시장' },
      { pId: '12', tagName: '먹거리' },
      //
      { pId: '13', tagName: '부산맛집' },
      { pId: '13', tagName: '만두' },
      { pId: '14', tagName: '온천' },
      { pId: '14', tagName: '광안리' },
      { pId: '15', tagName: '경치' },
      { pId: '15', tagName: '야경' },
      { pId: '16', tagName: '시장' },
      { pId: '16', tagName: '먹거리' },
      //
      { pId: '17', tagName: '부산맛집' },
      { pId: '17', tagName: '밀면' },
      { pId: '18', tagName: '공원' },
      { pId: '18', tagName: '광안리' },
      { pId: '19', tagName: '경치' },
      { pId: '19', tagName: '야경' },
      { pId: '20', tagName: '시장' },
      { pId: '20', tagName: '전통' },
    ];

    place.forEach(element => { models.Place.create(element); });
    tag.forEach(element => { models.Tag.create(element); });

  }
}