# Врачи

## Поиск по врачам

`GET /api/v1/doctor/get-all` вернёт список врачей.

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
regionIds | array<number> | идентификаторы регионов
specialtyIds | array<number> | идентификаторы специальностей
degreeIds | array<number> | идентификаторы учёных степеней
positionIds | array<number> | идентификаторы должностей
consultationTypes | array<string> | идентификаторы видов консультаций
availableAtUtc | datetime | планируемое дата и время консультации
availableFromUtc | datetime | дата и время, начиная с которых доступны консультации врачей
availableToUtc | datetime | дата и время, по которые доступны консультации врачей
order | string | сортировать по полю (Rating, Requests, Feedbacks)
asc | boolean | сортировать по возрастанию
limit | integer | кол-во (записей в ответе)
offset | integer | смещение (сколько записей пропустить)

### Ответ:

[Объект врач](./contracts.md#doctor)

```json
{
  "items": [
    {
      //.. объект врач
    }
  ],
  "count": 10,
  "totalCount": 15
}
```

## Получение информации о враче

`GET /api/v1/doctor/get/{id}` вернёт информацию о враче.

### Запрос:

Параметры: 

Имя | Тип | Описание
--- | --- | ---
id | integer | уникальный идентификатор врача

### Ответ:

[Объект врач](./contracts.md#doctor)

```json
{
  //.. объект врач
}
```

## Получение отзывов о враче

`GET /api/v1/doctor/feedbacks` вернёт информацию о враче.

### Запрос:

Параметры: 

Имя | Тип | Описание
--- | --- | ---
doctorId | integer | уникальный идентификатор врача
currentPartnerOnly | boolean | уникальный идентификатор врача
limit | integer | уникальный идентификатор врача (по умолчанию 10)
offset | integer | уникальный идентификатор врача (по умолчанию 0)

### Ответ:

[Объект Рейтинг врача](./contracts.md#doctor-rating)

```json
{
  //.. объект рейтинг врача
}
```
