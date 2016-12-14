# Транзакции

## Поиск транзакций

`GET /v1/transaction/get-all` вернёт список транзакций.

### Запрос:

Параметры: 

Имя | Тип | Описание
--- | --- | ---
perPage | integer | кол-во записей в ответе
page | integer | № страницы (пропустить page * perPage записей)

### Ответ:

```json
{
  "items": [
    {
      "amount": {
        "amount": -50,
        "currency": {
          "id": "RUB",
          "name": "руб."
        }
      },
      "createdAtUtc": "2016-11-30T17:08:33",
      "completedAtUtc": "2016-11-30T17:08:33",
      "correspondentAccount": {
        "id": "b90ffede-7381-470f-ac9f-6ac9a43bad3b",
        "balance": {
          "amount": 13750,
          "currency": {
            "id": "RUB",
            "name": "руб."
          }
        }
      },
      "operation": {
        "id": "2fe9c653-7ad2-4f70-ada0-9bda7f59e8c6",
        "type": {
          "id": "Transfer",
          "name": "Перевод средств"
        },
        "description": "Списание за оказанние услуг связи",
        "createdAtUtc": "2016-11-30T17:08:33",
        "completedAtUtc": "2016-11-30T17:08:33"
      }
    }
  ],
  "count": 1,
  "totalCount": 34
}
```