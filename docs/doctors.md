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
regionIds | array | идентификаторы регионов
specialtyIds | array | идентификаторы специальностей
degreeIds | array | идентификаторы учёных степеней
positionIds | array | идентификаторы должностей
consultationTypes | array | идентификаторы видов консультаций
availableAtUtc | string | планируемое дата и время консультации
order | string | сортировать по полю (Rating, Requests, Feedbacks)
asc | boolean | сортировать по возрастанию
perPage | integer | кол-во записей в ответе
page | integer | № страницы (пропустить page * perPage записей)

### Ответ:

```json
{
  "items": [
    {
      //.. объект врач
    }
  ],
  "count": 10,
  "totalCount": 10
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
  //.. объект врач
}
```
