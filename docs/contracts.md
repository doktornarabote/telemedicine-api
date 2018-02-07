# Контракты

## Doctor

Имя | Тип | Описание
--- | --- | ---
id | integer | идентификатор
lastName | string | фамилия
firstName | string | имя
middleName | string | отчество
avatarUrl | string | url фотографии
birthDate | string | дата рождения
region | [Region](./contracts.md#region) | регион
degree | [Degree](./contracts.md#degree) | учёная степень
position | [Position](./contracts.md#position) | должность
summary | [Doctor Summary](./contracts.md#doctor-summary) | статистическая информация
account | [Doctor Settings](./contracts.md#doctor-settings) | учётная запись
specialties | array<[Specialty](./contracts.md#specialty)> | медицинские специальности
consultationTypes | array<[Consultation Type](./contracts.md#consultation-type)> | доступные виды консультаций

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

## Doctor Rating

Имя | Тип | Описание
--- | --- | ---
doctorId | integer | уникальный идентификатор врача
rating | float | общий рейтинг
partnerRating | float | рейтинг в рамках текущего партнера
consultationFeedbackList | array<[Doctor Feedback](./contracts.md#doctor-feedback)> | рейтинг в рамках текущего партнера

```json
{
    "doctorId": 1233,
    "rating": "2018-05-04T00:00:00",
    "partnerRating": 5.0,
    "consultationFeedbackList": [
        //..
    ]
}
```

## Consultation Type

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип консультации
cost | [Money](./contracts.md#money) | стоимость
timeSchedules | array<[Time interval](./contracts.md#time-interval)> | график доступности
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

## Time interval

Имя | Тип | Описание
--- | --- | ---
beginAtUtc | datetime | дата начала
endAtUtc | datetime | дата окончания

```json
{
    "beginAtUtc": "2017-05-04T00:00:00",
    "endAtUtc": "2018-05-04T00:00:00"
}
```

## Doctor Summary

Имя | Тип | Описание
--- | --- | ---
proRating | float | рейтинг
consultationCount | integer | кол-во проведённых консультаций
feedbackCount | integer | кол-во отзывов

```json
{
    "proRating": 5,
    "consultationCount": 56,
    "feedbackCount": 1
}
```

## Doctor Settings

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

## Consultation Request

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип консультации
status | object | статус
createdAtUtc | datetime | дата создания консультации
beginAtUtc | datetime | дата начала консультации
doctorFullName | string | имя доктора
patientFullName | string | имя пациента
medicalReport | [Medical Report](./contracts.md#medical-report) | заключение врача
doctor | [Doctor](./contracts.md#doctor) | врач, с которым проводится консультация
patient | [Patient](./contracts.md#patient) | информация о пациенте
statuses | array<[Status History](./contracts.md#status-history)> | история статусов консультации
transactions | array<[Transaction](./contracts.md#transaction)> | список проведённых транзакций
timeline | array<[Timeline Event](./contracts.md#timeline-event)> | список возникавших событий
feedbacks | array<[Feedback](./contracts.md#feedback)> | список отзывов
isComplaintSent | boolean | идентификатор того, была ли послана жалоба текущим пациентом по данной консультации
attachments | array<[Media](./contracts.md#media)> | список вложенных файлов

```json
{
  "id": "273d9b37-dbb1-4c8c-9931-a76f00ea4669",
  "type": {
	"id": "Writing",
	"name": "Текстовая консультация"
  },
  "status": {
	"id": "PreProcessing",
	"name": "Обрабатывается"
  },
  "createdAtUtc": "2017-05-10T14:12:58",
  "beginAtUtc": "2016-12-13T12:11:46",
  "doctorFullName": "Петров Пётр Петрович",
  "patientFullName": "Иванов Иван Иванович",
  "medicalReport": {
    //..
  },
  "doctor": {
	//..
  },
  "patient": {
	//..
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
  ],
  "isComplaintSent": false,
  "attachments": [
	//..
  ]
}
```

## Writing

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип консультации
costPerRequest | [Money](./contracts.md#Money) | стоимость
status | object | статус
correspondence | [Correspondence](./contracts.md#correspondence) | информация о сообщениях
createdAtUtc | datetime | дата создания консультации
beginAtUtc | datetime | дата начала консультации
doctorFullName | string | имя доктора
patientFullName | string | имя пациента
medicalReport | [Medical Report](./contracts.md#medical-report) | заключение врача
doctor | [Doctor](./contracts.md#doctor) | врач, с которым проводится консультация
patient | [Patient](./contracts.md#patient) | информация о пациенте
statuses | array<[Status History](./contracts.md#status-history)> | история статусов консультации
transactions | array<[Transaction](./contracts.md#transaction)> | список проведённых транзакций
timeline | array<[Timeline Event](./contracts.md#timeline-event)> | список возникавших событий
feedbacks | array<[Feedback](./contracts.md#feedback)> | список отзывов
isComplaintSent | boolean | идентификатор того, была ли послана жалоба текущим пациентом по данной консультации
attachments | array<[Media](./contracts.md#media)> | список вложенных файлов

```json
{
  "id": "273d9b37-dbb1-4c8c-9931-a76f00ea4669",
  "type": {
	"id": "Writing",
	"name": "Текстовая консультация"
  },
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
  "beginAtUtc": "2016-12-13T12:11:46",
  "doctorFullName": "Петров Пётр Петрович",
  "patientFullName": "Иванов Иван Иванович",
  "medicalReport": {
    //..
  },
  "doctor": {
	//..
  },
  "patient": {
	//..
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
  ],
  "isComplaintSent": false,
  "attachments": [
	//..
  ]
}
```

## Callback

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип консультации
patientPhone | [Phone](./contracts.md#phone) | телефон, на который поступит звонок для консультации
doctorFullName | string | фио врача
patientFullName | string | фио пациента
costPerMinute | [Money](./contracts.md#money) | стоимость
calls | array<[Call](./contracts.md#call)> | список осуществлённых звонков
status | object | статус
createdAtUtc | datetime | дата создания консультации
beginAtUtc | datetime | дата начала консультации
doctorFullName | string | имя доктора
patientFullName | string | имя пациента
medicalReport | [Medical Report](./contracts.md#medical-report) | заключение врача
doctor | [Doctor](./contracts.md#doctor) | врач, с которым проводится консультация
patient | [Patient](./contracts.md#patient) | информация о пациенте
statuses | array<[Status History](./contracts.md#status-history)> | история статусов консультации
transactions | array<[Transaction](./contracts.md#transaction)> | список проведённых транзакций
timeline | array<[Timeline-Event](./contracts.md#timeline-event)> | список возникавших событий
feedbacks | array<[Feedback](./contracts.md#feedback)> | список отзывов
isComplaintSent | boolean | идентификатор того, была ли послана жалоба текущим пациентом по данной консультации
attachments | array<[Media](./contracts.md#media)> | список вложенных файлов

```json
{
    "id": "92606f49-9185-407e-b844-7734f0ffb170",
    "type": {
        "id": "Callback",
        "name": "обратный звонок"
    },
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
    "beginAtUtc": "2016-12-13T12:11:46",
    "doctorFullName": "Петров Пётр Петрович",
    "patientFullName": "Иванов Иван Иванович",
    "medicalReport": {
        //..
    },
    "doctor": {
        //..
    },
    "patient": {
        //..
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
    ],
    "isComplaintSent": false,
    "attachments": [
        //..
    ]
}
```

## Voip

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип консультации
status | object | статус
costPerMinute | [Money](./contracts.md#money) | стоимость за минуту
createdAtUtc | datetime | дата создания консультации
beginAtUtc | datetime | дата начала консультации
doctorFullName | string | имя доктора
patientFullName | string | имя пациента
medicalReport | [Medical Report](./contracts.md#medical-report) | заключение врача
doctor | [Doctor](./contracts.md#doctor) | врач, с которым проводится консультация
patient | [Patient](./contracts.md#Patient) | информация о пациенте
statuses | array<[Status History](./contracts.md#status-history)> | история статусов консультации
transactions | array<[Transaction](./contracts.md#transaction)> | список проведённых транзакций
timeline | array<[Timeline Event](./contracts.md#timeline-event)> | список возникавших событий
feedbacks | array<[Feedback](./contracts.md#feedback)> | список отзывов
attachments | array<[Media](./contracts.md#media)> | список вложенных файлов
calls | array<[Call](./contracts.md#call)> | индикатор наличия видеосвязи
isComplaintSent | boolean | идентификатор того, была ли послана жалоба текущим пациентом по данной консультации
videoSupport | boolean | индикатор наличия видеосвязи

```json
{
  "id": "273d9b37-dbb1-4c8c-9931-a76f00ea4669",
  "type": {
	"id": "Voip",
	"name": "Интернет-звонок"
  },
  "status": {
	"id": "PreProcessing",
	"name": "Обрабатывается"
  },
  "costPerMinute": {
	//..
  },
  "createdAtUtc": "2017-05-10T14:12:58",
  "beginAtUtc": "2016-12-13T12:11:46",
  "doctorFullName": "Петров Пётр Петрович",
  "patientFullName": "Иванов Иван Иванович",
  "medicalReport": {
    //..
  },
  "doctor": {
	//..
  },
  "patient": {
	//..
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
  ],
  "attachments": [
	//..
  ],
  "calls": [
    //..
  ],
  "isComplaintSent": false,
  "videoSupport": true
}
```

## Correspondence

Имя | Тип | Описание
--- | --- | ---
unreadCount | integer | кол-во непрочитанных сообщений
totalCount | integer | кол-во всего сообщений
message | [Message](./contracts.md#message) | последнее сообщение

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

## Message

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
requestId | string | идентификатор консультации
sender | object | отправитель (участник)
text | string | текстовое содержимое сообщения
attachment | [Media](./contracts.md#media) | приложение
createdAtUtc | datetime | дата создания
readAtUtc | datetime | дата прочтения адресатом

```json
{
    "id": "af84c649-802f-42e6-abff-a74a00abc271",
    "requestId": "273d9b37-dbb1-4c8c-9931-a76f00ea4669",
    "sender": {
        "id": "Patient",
        "name": "Пациент"
    },
    "text": "oh, i'm really sick. have you got anythyng to help me?",
    "attachment": null,
    "createdAtUtc": "2017-04-03T10:25:21",
    "readAtUtc": null
}
```

## Medical Report

Имя | Тип | Описание
--- | --- | ---
doctor | [Doctor](./contracts.md#doctor) | врач, который написал заключение
text | string | текстовое содержимое заключения (свободная форма)
createdAtUtc | datetime | дата создания
attachments | array<[Media](./contracts.md#media)> | массив приложений

```json
{
    "doctor": {
        //..
    },
    "text": "Ola!",
    "createdAtUtc": "2017-06-05T16:13:27",
    "attachments": [
        //..
    ]
}
```

## Patient

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
firstName | string | имя
lastName | string | фамилия
patronimycName | string | отчество
bornOn | string | дата рождения
weight | number | вес
sex | object | пол
photo | [Media](./contracts.md#media) | фотография

```json
{
    "id": "2fbee309-b324-4f72-8e35-ee8a0907a9c6",
    "firstName": "Иван",
    "lastName": "Алексеев",
    "patronimycName": "Сергеевич",
    "bornOn": "1980-05-25T00:00:00",
    "weight": 95.3,
    "sex": {
        "id": "M",
        "name": "Муж."
    },
    "photo": {
        //
    }
}
```

## Medical Card

Имя | Тип | Описание
--- | --- | ---
patient | [Patient](./contracts.md#patient) | информация о пациенте
medicalReports | array<[Medical report](./contracts.md#medical-report)> | массив заключений

## Phone

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

## Call

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
actor | object | участник (владелец телефонного номера)
duration | integer | продолжительность
startedAtUtc | datetime | дата начала
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

## Status History

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
status | object | статус
actor | object | участник (инициатор действия)
createdAtUtc | datetime | дата создания

## Transaction

Имя | Тип | Описание
--- | --- | ---
amount | object | сумма
createdAtUtc | datetime | дата создания
completedAtUtc | datetime | дата завершения
correspondentAccountId | string | идентификатор корреспондентского счёта
operation | [Operation](./contracts.md#operation) | операция, в рамках которой проводилась транзакция

## Operation

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип операции
description | string | описание
createdAtUtc | datetime | дата создания
completedAtUtc | datetime | дата завершения

## Timeline Event

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип события
createdAtUtc | datetime | дата возникновения
data | object | специфичные событию данные

## Feedback

Имя | Тип | Описание
--- | --- | ---
rate | number | оценка
comment | string | текстовый комментарий
createdAtUtc | datetime | дата добавления
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

## Doctor Feedback

Имя | Тип | Описание
--- | --- | ---
rate | float | оценка
consultationType | integer | тип консультации в численном виде [Request Type](./contracts.md#request-type)
comment | string | текстовый комментарий
createdAtUtc | datetime | дата добавления
patientName | string | имя пациента

```json
{
    "rate": 5.0,
    "consultationType": 1,
    "comment": "Елена Сергеевна чудесный специалист и просто волшебница...",
    "createdAtUtc": "2017-05-10T10:55:04",
    "patientName": "Иванов Иван Иванович"
}
```

## Partner

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
title | string | наименование
correspondentAccounts | array<[Correspondent Account](./contracts.md#correspondent-account)> | массив счетов

```json
{
    "id": "5e0ce22f-8959-474d-b11d-d0e3cd09ff9b",
    "title": "Партнёр «Спроси Врача»",
    "isDeleted": false,
    "correspondentAccounts": [
        //..
    ]
}
```

## Correspondent Account

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
balance | [Money](./contracts.md#money) | баланс

```json
{
    "id": "b90ffede-7381-470f-ac9f-6ac9a43bad3b",
    "balance": {
        //..
    }    
}
```

## Money

Имя | Тип | Описание
--- | --- | ---
amount | numeric | Сумма
currency | [Currency](./contracts.md#currency) | валюта

```json
{
    "amount": 13850,
    "currency": {
        //..
    }
}
```

## Currency

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

## Region

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

## Degree

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

## Position

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

## Specialty

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

## Media

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
url | string | url медиа
name | string | наименование
mime | string | mime-type
size | integer | размер byte
image | object | информация об изображении

```json
{
    "id": "6bde2fff-0dd1-4669-9f31-a78477b232c9",
    "url": "https://devapidoctortm.doktornarabote.ru/api/v1/media/get/6bde2fff-0dd1-4669-9f31-a78477b232c9",
    "name": "artifact-image.jpg",
    "mime": "image/jpeg",
    "size": 6222,
    "image": {
        "width": 246,
        "height": 163
    }
}
```

## File

Имя | Тип | Описание
--- | --- | ---
fileName | string | название файла
mediaType | string | mime-type файла
buffer | array<byte> | содержимое файла

## Request Status

Значения, в скобках указано численное соответствие:
  * `Registered`;
  * `PreProcessing`;
  * `Delayed`;
  * `Processing`;
  * `PostProcessing`;
  * `Processed`;
  * `Unsuccessful`.

## Request Type

Значения:
  * `Callback` (`1`);
  * `Writing` (`2`);
  * `Voip` (`3`);
  * `Video` (`4`).
