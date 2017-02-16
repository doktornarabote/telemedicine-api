# Обратный звонок

## Запуск консультации

`POST /v1/callbackrequest/start-callback` вернёт информацию о запущенной консультации.

### Запрос:

Имя | Тип | Описание
--- | --- | ---
doctorId | integer | уникальный идентификатор врача
patientPhone | object | телефонный номер пациента (объект телефон)
patientFullName | string | фио пациента

### Ответ:

```json
{
  "id": "3b198a0c-c329-4f89-8eb1-91256390ab1e",
  "status": {
    "id": "Registered",
    "name": "Зарегистрирована"
  },
  "patientPhone": {
    "code": "7",
    "number": "4957440491"
  },
  "doctorFullName": "Иванова Елена Петровна",
  "patientFullName": "Иванов Пётр Сергеевич",
  "costPerMinuite": {
    "amount": 50,
    "currency": {
      "id": "RUB",
      "name": "руб."
    }
  },
  "createdAtUtc": "2016-12-14T14:58:26",
  "doctor": {
    "id": 85717,
    "lastName": "Иванова",
    "firstName": "Елена",
    "middleName": "Петровна",
    "avatarUrl": "https://testimg1.doktornarabote.ru/avatars/636165454388001495/018056038069148088143208027233254133190214205136/0",
    "birthDate": "1964-03-10T00:00:00",
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
        "id": "8eb862ea-8a08-44e7-a161-0000db37a997",
        "type": {
          "id": "Callback",
          "name": "Обратный звонок"
        },
        "cost": {
          "amount": 50,
          "currency": {
            "id": "RUB",
            "name": "руб."
          }
        },
        "isAvailable": true
      }
    ]
  },
  "patient": {
    "partnerPatientId": "ИдентификаторПациента"
  },
  "calls": null,
  "transactions": null
}
```

## Поиск по консультациям

`GET /v1/callbackrequest/get-all` вернёт список консультаций.

### Запрос

Имя | Тип | Описание
--- | --- | ---
ids | array | уникальные идентификаторы консультации вида обратный звонок
statuses | array | статусы консультации
perPage | integer | кол-во записей в ответе
page | integer | № страницы (пропустить page * perPage записей)

### Ответ

```json
{
  "items": [
    {
      "id": "368452cd-9308-4505-8a4d-a71c00a4dde1",
      "status": {
        "id": "Processed",
        "name": "Завершено"
      },
      "patientPhone": {
        "code": "7",
        "number": "4957440491"
      },
      "doctorFullName": "Маврикиш Алевтина Петровна",
      "patientFullName": null,
      "costPerMinuite": {
        "amount": 50,
        "currency": {
          "id": "RUB",
          "name": "руб."
        }
      },
      "createdAtUtc": "2017-02-16T10:00:15",
      "doctor": {
        "id": 113828,
        "lastName": "Маврикиш",
        "firstName": "Алевтина",
        "middleName": "Петровна",
        "avatarUrl": "https://testimg1.doktornarabote.ru/avatars/636174311185567884/012218182006159082206021234140155094189214115146/2",
        "birthDate": "1965-09-07T00:00:00",
        "region": {
          "id": 5029,
          "name": "Россия, Новосибирская область"
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
            "id": 12,
            "name": "Дерматовенерология"
          }
        ],
        "consultationTypes": [
          {
            "id": "838c08a1-fbb2-4fe5-8ba0-35c94003414c",
            "type": {
              "id": "Callback",
              "name": "Обратный звонок"
            },
            "cost": {
              "amount": 50,
              "currency": {
                "id": "Bonus",
                "name": "бон."
              }
            },
            "isAvailable": true
          }
        ]
      },
      "patient": {
        "partnerPatientId": "ИдентификаторПациента"
      },
      "calls": [
        {
          "id": "1bfcc3dc-b891-4017-a437-a71c00a5d435",
          "actor": {
            "id": "Doctor",
            "name": "Врач"
          },
          "cost": {
            "amount": 0,
            "currency": {
              "id": "RUB",
              "name": "руб."
            }
          },
          "duration": 3,
          "startedAtUtc": "2017-02-16T10:00:31",
          "successful": true
        }
      ],
      "transactions": [
        {
          "amount": {
            "amount": 0,
            "currency": {
              "id": "RUB",
              "name": "руб."
            }
          },
          "createdAtUtc": "2017-02-16T10:03:45",
          "completedAtUtc": "2017-02-16T10:03:45",
          "correspondentAccountId": "b90ffede-7381-470f-ac9f-6ac9a43bad3b",
          "operation": {
            "id": "d72c24ad-23ae-4144-a895-e28f75d30722",
            "type": {
              "id": "Transfer",
              "name": "Перевод средств"
            },
            "description": "Списание за оказанние услуг связи",
            "createdAtUtc": "2017-02-16T10:03:45",
            "completedAtUtc": "2017-02-16T10:03:45"
          }
        }
      ]
    }
  ],
  "count": 1,
  "totalCount": 45
}
```

## Получение информации о консультации

`GET /v1/callbackrequest/get/{id}` вернёт информацию о консультации.

### Запрос

Имя | Тип | Описание
--- | --- | ---
id | string | уникальный идентификатор консультации вида обратный звонок

### Ответ

```json
{
  "id": "368452cd-9308-4505-8a4d-a71c00a4dde1",
  "status": {
    "id": "Processed",
    "name": "Завершено"
  },
  "patientPhone": {
    "code": "7",
    "number": "4957440491"
  },
  "doctorFullName": "Маврикиш Алевтина Петровна",
  "patientFullName": null,
  "costPerMinuite": {
    "amount": 50,
    "currency": {
      "id": "RUB",
      "name": "руб."
    }
  },
  "createdAtUtc": "2017-02-16T10:00:15",
  "doctor": {
    "id": 113828,
    "lastName": "Маврикиш",
    "firstName": "Алевтина",
    "middleName": "Петровна",
    "avatarUrl": "https://testimg1.doktornarabote.ru/avatars/636174311185567884/012218182006159082206021234140155094189214115146/2",
    "birthDate": "1965-09-07T00:00:00",
    "region": {
      "id": 5029,
      "name": "Россия, Новосибирская область"
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
        "id": 12,
        "name": "Дерматовенерология"
      }
    ],
    "consultationTypes": [
      {
        "id": "838c08a1-fbb2-4fe5-8ba0-35c94003414c",
        "type": {
          "id": "Callback",
          "name": "Обратный звонок"
        },
        "cost": {
          "amount": 50,
          "currency": {
            "id": "Bonus",
            "name": "бон."
          }
        },
        "isAvailable": true
      }
    ]
  },
  "patient": {
    "partnerPatientId": "ИдентификаторПациента"
  },
  "calls": [
    {
      "id": "1bfcc3dc-b891-4017-a437-a71c00a5d435",
      "actor": {
        "id": "Doctor",
        "name": "Врач"
      },
      "cost": {
        "amount": 0,
        "currency": {
          "id": "RUB",
          "name": "руб."
        }
      },
      "duration": 3,
      "startedAtUtc": "2017-02-16T10:00:31",
      "successful": true
    }
  ],
  "transactions": [
    {
      "amount": {
        "amount": 0,
        "currency": {
          "id": "RUB",
          "name": "руб."
        }
      },
      "createdAtUtc": "2017-02-16T10:03:45",
      "completedAtUtc": "2017-02-16T10:03:45",
      "correspondentAccountId": "b90ffede-7381-470f-ac9f-6ac9a43bad3b",
      "operation": {
        "id": "d72c24ad-23ae-4144-a895-e28f75d30722",
        "type": {
          "id": "Transfer",
          "name": "Перевод средств"
        },
        "description": "Списание за оказанние услуг связи",
        "createdAtUtc": "2017-02-16T10:03:45",
        "completedAtUtc": "2017-02-16T10:03:45"
      }
    }
  ]
}
```

## Прерывание консультации

`POST /v1/callbackrequest/terminate-callback` вернёт информацию о результате прерывания.

### Запрос

Имя | Тип | Описание
--- | --- | ---
requestId | string | уникальный идентификатор консультации вида обратный звонок

### Ответ

```json
{
  "success": true
}
```