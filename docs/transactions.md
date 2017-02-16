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
        "amount": 0,
        "currency": {
          "id": "RUB",
          "name": "руб."
        }
      },
      "createdAtUtc": "2017-02-16T11:13:31",
      "completedAtUtc": "2017-02-16T11:13:31",
      "correspondentAccountId": "b90ffede-7381-470f-ac9f-6ac9a43bad3b",
      "operation": {
        "id": "80b22b73-8bf3-4370-9d9d-cd69f266bd0c",
        "type": {
          "id": "Transfer",
          "name": "Перевод средств"
        },
        "description": "Списание за оказанние услуг связи",
        "createdAtUtc": "2017-02-16T11:13:31",
        "completedAtUtc": "2017-02-16T11:13:31"
      }
    }
  ],
  "count": 1,
  "totalCount": 34
}
```