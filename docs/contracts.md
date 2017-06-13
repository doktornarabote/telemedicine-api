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
medicalReport | object | заключение врача (объект медицинское заключение)
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
medicalReport | object | заключение врача (объект медицинское заключение)
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

## Сообщение

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
requestId | string | идентификатор консультации
sender | object | отправитель (участник)
text | string | текстовое содержимое сообщения
attachment | object | приложение (объект медиа)
createdAtUtc | string | дата создания
readAtUtc | string | дата прочтения адресатом

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

## Медиа (Файл)

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

## Медицинское заключение

Имя | Тип | Описание
--- | --- | ---
doctor | object | врач, который написал заключение (объект врач)
text | string | текстовое содержимое заключения (свободная форма)
createdAtUtc | string | дата создания
attachments | array | массив приложений (объектов медиа)

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

## Пациент

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
firstName | string | имя
lastName | string | фамилия
patronimycName | string | отчество
bornOn | string | дата рождения
weight | number | вес
sex | object | пол
photo | object | фотография (объект медиа)

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

## Медицинская карта

Имя | Тип | Описание
--- | --- | ---
patient | object | информация о пациенте (объект пациент)
medicalReports | array | массив заключений (объектов медицинское заключение)

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
