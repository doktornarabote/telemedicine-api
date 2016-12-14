# Партнёр

## Получение информации о партнёре

`GET /v1/partner/get` вернёт информацию о партнёре.

### Запрос:

Параметры: отсутствуют.

### Ответ:

```json
{
  "id": "5e0ce22f-8959-474d-b11d-d0e3cd09ff9b",
  "title": "Партнёр «СпросиВрача»",
  "correspondentAccounts": [
    {
      "id": "b90ffede-7381-470f-ac9f-6ac9a43bad3b",
      "balance": {
        "amount": 13850,
        "currency": {
          "id": "RUB",
          "name": "руб."
        }
      }
    }
  ]
}
```