# Врачи

## Поиск по врачам

`GET /v1/doctor/get-all` вернёт список врачей.

### Запрос:

Параметры: 

Имя | Тип | Описание
--- | --- | ---
firstName | string | имя
lastName | string | фамилия
middleName | string | отчество
hasAvatar | boolean | признак наличия фотографии
ageFrom | integer | мин. возраст
ageTo | integer | макс. возраст
isOnline | boolean | признак онлайна
regionIds | array | идентификаторы регионов
specialtyIds | array | идентификаторы специальностей
degreeIds | array | идентификаторы учёных степеней
positionIds | array | идентификаторы должностей
perPage | integer | кол-во записей в ответе
page | integer | № страницы (пропустить page * perPage записей)

### Ответ:

```json
{
  "items": [
    {
      "id": 85717,
      "lastName": "Иванова",
      "firstName": "Елена",
      "middleName": "Петровна",
      "avatarUrl": "https://testimg1.doktornarabote.ru/avatars/636165454388001495/018056038069148088143208027233254133190214205136/0",
      "birthDate": "1964-03-10T00:00:00",
      "lastOnlineDate": "2012-01-07T23:29:56",
      "isOnline": true,
      "region": {
        "id": 4003,
        "name": "Казахстан"
      },
      "degree": {
        "id": 1,
        "name": "Кандидат медицинских наук"
      },
      "position": {
        "id": 13,
        "name": "Старший лаборант"
      },
      "specialties": [
        {
          "id": 89,
          "name": "Акушерство, гинекология"
        }
      ],
      "consultationTypes": [
        {
          "id": "8eb862ea-8a08-44e7-a161-0000db37a997",
          "type": {
            "id": "Callback",
            "name": "Обратный звонок"
          },
          "cost": {
            "amount": 50,
            "currency": {
              "id": "RUB",
              "name": "руб."
            }
          },
          "isAvailable": true
        }
      ]
    }
  ],
  "count": 1,
  "totalCount": 150000
}
```

## Получение информации о враче

`GET /v1/doctor/get/{id}` вернёт информацию о враче.

### Запрос:

Параметры: 

Имя | Тип | Описание
--- | --- | ---
id | integer | уникальный идентификатор врача

### Ответ:

```json
{
  "id": 85717,
  "lastName": "Иванова",
  "firstName": "Елена",
  "middleName": "Петровна",
  "avatarUrl": "https://testimg1.doktornarabote.ru/avatars/636165454388001495/018056038069148088143208027233254133190214205136/0",
  "birthDate": "1964-03-10T00:00:00",
  "lastOnlineDate": "2012-01-07T23:29:56",
  "isOnline": true,
  "region": {
    "id": 4003,
    "name": "Казахстан"
  },
  "degree": {
    "id": 1,
    "name": "Кандидат медицинских наук"
  },
  "position": {
    "id": 13,
    "name": "Старший лаборант"
  },
  "specialties": [
    {
      "id": 89,
      "name": "Акушерство, гинекология"
    }
  ],
  "consultationTypes": [
    {
      "id": "8eb862ea-8a08-44e7-a161-0000db37a997",
      "type": {
        "id": "Callback",
        "name": "Обратный звонок"
      },
      "cost": {
        "amount": 50,
        "currency": {
          "id": "RUB",
          "name": "руб."
        }
      },
      "isAvailable": true
    }
  ]
}
```