# Контракты

## Врач

Имя | Тип | Описание
--- | --- | ---
id | integer | идентификатор
lastName | string | фамилия
firstName | string | имя
middleName | string | отчество
avatarUrl | string | url фотографии
birthDate | string | дата рождения
region | object | регион (справочник регионов)
degree | object | учёная степень (справочник учёных степеней)
position | object | должность (справочник должностей)
specialties | array | специальности (справочник медицинских специальностей)
consultationTypes | array | доступные виды консультаций (объект вид консультации)
summary | object | статистическая информация (объект статистика врача)
account | object | учётная запись (объект учётная запись врача)

```json
{
  "id": 113824,
  "lastName": "Серикова",
  "firstName": "Светлана",
  "middleName": "Николаевна",
  "avatarUrl": "https://testimg1.doktornarabote.ru/avatars/636174313217149988/123027248161174173111217198116156100001031056199/2",
  "birthDate": "1958-07-13T00:00:00",
  "region": {
    "id": 3001,
    "name": "Россия, Москва"
  },
  "degree": {
    "id": 2,
    "name": "Доктор медицинских наук"
  },
  "position": {
    "id": 16,
    "name": "Другая (введите вручную)"
  },
  "specialties": [
    {
      "id": 60,
      "name": "Терапия"
    },
    {
      "id": 21,
      "name": "Кардиология"
    }
  ],
  "consultationTypes": [
    {
      //..
    }
  ],
  "summary": {
    //..
  },
  "account": {
    //..
  }
}
```

## Вид консультации

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип консультации
cost | object | стоимость (объект денежные средства)
timeSchedules | array | график доступности (объект временной интервал)
isAvailable | boolean | признак доступности консультации
isDisabled | boolean | признак запрета на проведение консультации

```json
{
    "id": "03e56f3d-1d43-4824-b9dd-cb29c0036973",
    "type": {
        "id": "Callback",
        "name": "Обратный звонок"
    },
    "cost": {
        //..
    },
    "timeSchedules": [
        {
            //..
        }
    ],
    "isAvailable": true,
    "isDisabled": false
}
```

## Временной интервал

Имя | Тип | Описание
--- | --- | ---
beginAtUtc | string | дата начала
endAtUtc | string | дата окончания

```json
{
    "beginAtUtc": "2017-05-04T00:00:00",
    "endAtUtc": "2018-05-04T00:00:00"
}
```

## Статистика врача

Имя | Тип | Описание
--- | --- | ---
proRating | number | рейтинг
consultationCount | integer | кол-во проведённых консультаций
feedbackCount | integer | кол-во отзывов

```json
{
    "proRating": 5,
    "consultationCount": 56,
    "feedbackCount": 1
}
```

## Учетная запись врача

Имя | Тип | Описание
--- | --- | ---
isAvailable | boolean | доступен для проведения консультаций
isAllowed | boolean | допущен для проведения консультаций

```json
{
    "isAvailable": true,
    "isAllowed": true
}
```

## Обратный звонок

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
patientPhone | object | телефон, на который поступит звонок для консультации (объект телефон)
doctorFullName | string | фио врача
patientFullName | string | фио пациента
costPerMinute | object | стоимость (объект денежные средства)
calls | array | список осуществлённых звонков (объект телефонный звонок)
status | object | статус
createdAtUtc | string | дата создания
doctor | object | врач, с которым проводится консультация (объект врач)
patient | object | информация о пациенте
statuses | array | история статусов консультации (объект история статуса консультации)
transactions | array | список проведённых транзакций (объект транзакция)
timeline | array | список возникавших событий (объект событие консультации)
feedbacks | array | список отзывов (объет отзыв о консультации)

```json
{
    "id": "92606f49-9185-407e-b844-7734f0ffb170",
    "status": {
        "id": "Processed",
        "name": "Завершено"
    },
    "patientPhone": {
        //..
    },
    "doctorFullName": "Задорожняя1 Екатерина1 Яковлевич1",
    "patientFullName": "Иванов Пётр Сергеевич",
    "costPerMinuite": {
        //..
    },
    "createdAtUtc": "2016-12-12T14:10:12",
    "doctor": {
        //..
    },
    "patient": {
        "partnerPatientId": "3c8af9f8-3603-46b8-a3cc-a6c000b46fcf"
    },
    "calls": [
        //..
    ],
    "transactions": [
        //..
    ],
    "statuses": [
        //..
    ],
    "timeline": [
        //..
    ],
    "feedbacks": [
        //..
    ]
}
```

## Текстовая консультация

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
costPerRequest | object | стоимость (объект денежные средства)
status | object | статус
correspondence | object | информация о сообщениях (объект переписка)
createdAtUtc | string | дата создания
doctor | object | врач, с которым проводится консультация (объект врач)
patient | object | информация о пациенте
statuses | array | история статусов консультации (объект история статуса консультации)
transactions | array | список проведённых транзакций (объект транзакция)
timeline | array | список возникавших событий (объект событие консультации)
feedbacks | array | список отзывов (объет отзыв о консультации)

```json
{
  "id": "273d9b37-dbb1-4c8c-9931-a76f00ea4669",
  "status": {
	"id": "PreProcessing",
	"name": "Обрабатывается"
  },
  "costPerRequest": {
	//..
  },
  "correspondence": {
	//..
  },
  "createdAtUtc": "2017-05-10T14:12:58",
  "doctor": {
	//..
  },
  "patient": {
	"partnerPatientId": "11 какой-то ИД паци$ента_00"
  },
  "statuses": [
	//..
  ],
  "transactions": [
	//..
  ],
  "timeline": [
	//..
  ],
  "feedbacks": [
	//..
  ]
}
```

## Переписка

Имя | Тип | Описание
--- | --- | ---
unreadCount | integer | кол-во непрочитанных сообщений
totalCount | integer | кол-во всего сообщений
message | object | последнее сообщение (объект сообщение)

```json
{
  "unreadCount": 0,
  "totalCount": 1,
  "message": {
    "id": "4cfaa854-a184-4856-ae5f-a76f00ea4672",
    "requestId": "273d9b37-dbb1-4c8c-9931-a76f00ea4669",
    "sender": {
  	  "id": "Patient",
  	  "name": "Пациент"
    },
    "text": "hi, i've got a problem 2...",
    "attachment": null,
    "createdAtUtc": "2017-05-10T14:12:58",
    "readAtUtc": null
  }
}
```

## Телефон

Имя | Тип | Описание
--- | --- | ---
code | string | код
number | string | номер

```json
{
    "code": "7",
    "number": "9255075359"
}
```

## Телефонный звонок

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
actor | object | участник (владелец телефонного номера)
duration | integer | продолжительность
startedAtUtc | string | дата начала
successful | boolean | признак успешно состоявшего звонка

```json
{
    "id": "eb70612a-c05c-42da-a533-a6ce014bf055",
    "actor": {
        "id": "Patient",
        "name": "Пациент"
    },
    "duration": 17,
    "startedAtUtc": "2016-11-30T17:07:47",
    "successful": true
}
```

## История статуса

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
status | object | статус
actor | object | участник (инициатор действия)
createdAtUtc | string | дата создания

## Транзакция

Имя | Тип | Описание
--- | --- | ---
amount | object | сумма
createdAtUtc | string | дата создания
completedAtUtc | string | дата завершения
correspondentAccountId | string | идентификатор корреспондентского счёта
operation | object | операция, в рамках которой проводилась транзакция

## Операция

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип операции
description | string | описание
createdAtUtc | string | дата создания
completedAtUtc | string | дата завершения

## Событие консультации

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип события
createdAtUtc | string | дата возникновения
data | object | специфичные событию данные

## Отзыв о консультации

Имя | Тип | Описание
--- | --- | ---
rate | number | оценка
comment | string | текстовый комментарий
createdAtUtc | string | дата добавления
actor | object | участник (инициатор действия)

```json
{
    "rate": 5,
    "comment": "Елена Сергеевна чудесный специалист и просто волшебница...",
    "createdAtUtc": "2017-05-10T10:55:04",
    "actor": {
        "id": "Patient",
        "name": "Пациент"
    }
}
```

## Партнёр

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
title | string | наименование
correspondentAccounts | array | массив счетов (объект корреспондентский счет)

```json
{
    "id": "5e0ce22f-8959-474d-b11d-d0e3cd09ff9b",
    "title": "Партнёр «СпросиВрача»",
    "isDeleted": false,
    "correspondentAccounts": [
        //..
    ]
}
```

## Корреспондентский счёт

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
balance | object | баланс (объект денежные средства)

```json
{
    "id": "b90ffede-7381-470f-ac9f-6ac9a43bad3b",
    "balance": {
        //..
    }    
}
```

## Денежные средства

Имя | Тип | Описание
--- | --- | ---
amount | numeric | Сумма
currency | object | валюта (объект валюта)

```json
{
    "amount": 13850,
    "currency": {
        //..
    }
}
```

## Валюта

Имя | Тип | Описание
--- | --- | ---
id | string | Код
name | string | Наименование

```json
{
    "id": "RUB",
    "name": "руб."
}
```

## Регион

Имя | Тип | Описание
--- | --- | ---
id | integer | уникальный идентификатор
name | string | Наименование

```json
{
    "id": 3001,
    "name": "Россия, Москва"
}
```

## Учёная степень

Имя | Тип | Описание
--- | --- | ---
id | integer | уникальный идентификатор
name | string | Наименование

```json
{
    "id": 1,
    "name": "Кандидат медицинских наук"
}
```

## Должность

Имя | Тип | Описание
--- | --- | ---
id | integer | уникальный идентификатор
name | string | Наименование

```json
{
    "id": 1,
    "name": "Ассистент кафедры"
}
```
## Специальность

Имя | Тип | Описание
--- | --- | ---
id | integer | уникальный идентификатор
name | string | Наименование

```json
{
    "id": 1,
    "name": "Авиационная и космическая медицина"
}
```
