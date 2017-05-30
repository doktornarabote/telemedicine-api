# Медиа (Файлы)

## Добавление медиа

`POST /v1/media/add` вернёт информацию о добавленном медиа объекте.

### Запрос:

Имя | Тип | Описание
--- | --- | ---
binary | string | multipart/form-data содержимое

### Ответ:

```json
{
  //.. объект медиа
}
```

## Получение информации о медиа

`GET /v1/media/get/{id}` вернёт информацию о медиа объекте.

### Запрос

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор медиа объекта

### Ответ

Бинарное содержимое объекта (файла)