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
lastOnlineDate | string | дата последнего онлайна
isOnline | boolean | признак онлайна
region | object | регион (справочник регионов)
degree | object | учёная степень (справочник учёных степеней)
position | object | должность (справочник должностей)
specialties | array | специальности (справочник медицинских специальностей)
consultationTypes | array | доступные виды консультаций (объект вид консультации)

```json
{
    "id": 85717,
    "lastName": "Иванова",
    "firstName": "Елена",
    "middleName": "Петровна",
    "avatarUrl": "http://testimg1.doktornarabote.ru/avatars/636165454388001495/018056038069148088143208027233254133190214205136/0",
    "birthDate": "1964-03-10T00:00:00",
    "academicRating": 0,
    "lastOnlineDate": "2012-01-07T23:29:56",
    "isOnline": false,
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
            //..
        }
    ]
}
```

## Вид консультации

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
type | object | тип консультации
cost | object | стоимость (объект денежные средства)
isAvailable | boolean | признак доступности консультации

```json
{
    "id": "8eb862ea-8a08-44e7-a161-0000db37a997",
    "type": {
        "id": "Callback",
        "name": "Обратный звонок"
    },
    "cost": {
        //..
    },
    "isAvailable": true
}
```

## Обратный звонок
Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор
status | object | статус
patientPhone | object | телефон, на который поступит звонок для консультации (объект телефон)
doctorFullName | string | фио врача
patientFullName | string | фио пациента
costPerMinute | object | стоимость (объект денежные средства)
createdAtUtc | string | дата создания
doctor | object | врач, с которым проводится консультация (объект врач)
patient | object | информация о пациенте
calls | array | список осуществлённых в рамках консультации звонков (объект телефонный звонок)

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
    ]
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
cost | object | стоимость
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
    "cost": {
        //..
    },
    "duration": 17,
    "startedAtUtc": "2016-11-30T17:07:47",
    "successful": true
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
