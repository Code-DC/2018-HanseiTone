# Hanseithon API-Server

제 1회 한세톤 team.곧출근합니다. 의 Owntrip어플리케이션 API-Server입니다.

> 모든 성공 statusCode는 200

> 실패는 400입니다. 

> 그외 에러코드는 서버의 에러입니다.

## POST: /users
```
request body data
    email: Test@gmail.com
    username: TESTNAME
    password: Test123!@#
```
response:
```
{
  "message": "You have successfully signed up."
}
```

## POST: /login
```
request body data
    email: Test@gmail.com
    password: Test123!@#
```
response:
```
{
	"message": "Login succeeded.",
	"token": {  "data": "eyJhbG..." },
	"user": {
		"uId": 1,
		"email": "test@gmail.com",
		"username": "Test",
		"password": "jxNwikb...",
		"created_at": "2018-09-01T06:20:17.000Z",
		"updated_at": "2018-09-01T06:20:17.000Z"
	}
}
```

## POST: /search
```
request body data
    tagName: 광안리

```
response:
```
{
	"message": "Ok",
	"result": [
		{
			"pId": 2,
			"placeName": "광안대교",
			"address": "부산광역시 수영구 광안동",
			"imagePath": null,
			"created_at": "2018-09-01T06:14:21.000Z",
			"updated_at": "2018-09-01T06:14:21.000Z",
			"Tags": [
				{
					"tId": 4,
					"pId": 2,
					"tagName": "광안리",
					"created_at": "2018-09-01T06:14:21.000Z",
					"updated_at": "2018-09-01T06:14:21.000Z"
				}
			]
		},
		{
			"pId": 6,
			"placeName": "부산서핑스팟&나이트마켓",
			"address": "부산광역시 수영구 광안로 64 지하1층",
			"imagePath": null,
			"created_at": "2018-09-01T06:14:21.000Z",
			"updated_at": "2018-09-01T06:14:21.000Z",
			"Tags": [
				{
					"tId": 12,
					"pId": 6,
					"tagName": "광안리",
					"created_at": "2018-09-01T06:14:21.000Z",
					"updated_at": "2018-09-01T06:14:21.000Z"
				}
			]
		},
		{
			"pId": 10,
			"placeName": "광안리해수욕장",
			"address": "부산광역시 수영구 광안해변로 219",
			"imagePath": null,
			"created_at": "2018-09-01T06:14:21.000Z",
			"updated_at": "2018-09-01T06:14:21.000Z",
			"Tags": [
				{
					"tId": 20,
					"pId": 10,
					"tagName": "광안리",
					"created_at": "2018-09-01T06:14:21.000Z",
					"updated_at": "2018-09-01T06:14:21.000Z"
				}
			]
		},
		{
			"pId": 14,
			"placeName": "아쿠아펠리스온천",
			"address": "부산광역시 수영구 광안해변로 225",
			"imagePath": null,
			"created_at": "2018-09-01T06:14:21.000Z",
			"updated_at": "2018-09-01T06:14:21.000Z",
			"Tags": [
				{
					"tId": 28,
					"pId": 14,
					"tagName": "광안리",
					"created_at": "2018-09-01T06:14:21.000Z",
					"updated_at": "2018-09-01T06:14:21.000Z"
				}
			]
		},
		{
			"pId": 18,
			"placeName": "광안리해변공원",
			"address": "부산광역시 수영구 민락동",
			"imagePath": null,
			"created_at": "2018-09-01T06:14:21.000Z",
			"updated_at": "2018-09-01T06:14:21.000Z",
			"Tags": [
				{
					"tId": 36,
					"pId": 18,
					"tagName": "광안리",
					"created_at": "2018-09-01T06:14:21.000Z",
					"updated_at": "2018-09-01T06:14:21.000Z"
				}
			]
		}
	]
}
```

## POST: /travel
```
request body data
    travelName: 부산여행
    course: ["본전돼지국밥", "광안대교", "부산타워", "부산국제시장"]
```
response:
```
{
	"message": "Ok",
	"result": {
		"like": 0,
		"tId": 1,
		"uId": 1,
		"travelName": "부산여행",
		"updated_at": "2018-09-01T05:18:50.345Z",
		"created_at": "2018-09-01T05:18:50.345Z"
	}
}
```

## GET: /travel (여행코스 목록 불러오기)
response:
```
{
	"message": "Ok",
	"result": [
		{
			"tId": 1,
			"uId": 1,
			"travelName": "부산여행",
			"like": 0,
			"created_at": "2018-09-01T06:43:43.000Z",
			"updated_at": "2018-09-01T06:43:43.000Z"
		}
	]
}
```

## GET: /travel/{tId}
response:
```
{
	"message": "Ok",
	"result": [
		{
			"tId": 1,
			"uId": 1,
			"travelName": "부산여행",
			"like": 0,
			"created_at": "2018-09-01T06:43:43.000Z",
			"updated_at": "2018-09-01T06:43:43.000Z",
			"Courses": [
				{
					"cId": 1,
					"tId": 1,
					"courselName": "Hello",
					"created_at": "2018-09-01T06:43:43.000Z",
					"updated_at": "2018-09-01T06:43:43.000Z"
				},
				{
					"cId": 2,
					"tId": 1,
					"courselName": "World",
					"created_at": "2018-09-01T06:43:43.000Z",
					"updated_at": "2018-09-01T06:43:43.000Z"
				},
				{
					"cId": 3,
					"tId": 1,
					"courselName": "!",
					"created_at": "2018-09-01T06:43:43.000Z",
					"updated_at": "2018-09-01T06:43:43.000Z"
				}
			]
		}
	]
}
```