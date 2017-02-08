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
  "createdAtUtc": "2016-12-14T14:58:26.3557531Z",
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
  "calls": null
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
      "id": "3b198a0c-c329-4f89-8eb1-91256390ab1e",
      "status": {
        "id": "Processed",
        "name": "Завершено"
      },
      "patientPhone": {
        "code": "7",
        "number": "4957440491"
      },
      "doctorFullName": "Задорожняя1 Екатерина1 Яковлевич1",
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
      "calls": [
        {
          "id": "57c9876d-9457-46bf-9a17-a6dc0128ec88",
          "actor": {
            "id": "Patient",
            "name": "Пациент"
          },
          "cost": {
            "amount": 50,
            "currency": {
              "id": "RUB",
              "name": "руб."
            }
          },
          "duration": 31,
          "startedAtUtc": "2016-12-14T14:59:32",
          "successful": true
        },
        {
          "id": "da701009-adf0-4819-bc7f-a6dc0128ec88",
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
          "duration": 16,
          "startedAtUtc": "2016-12-14T14:59:06",
          "successful": true
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
  "id": "3b198a0c-c329-4f89-8eb1-91256390ab1e",
  "status": {
    "id": "Processed",
    "name": "Завершено"
  },
  "patientPhone": {
    "code": "7",
    "number": "4957440491"
  },
  "doctorFullName": "Задорожняя1 Екатерина1 Яковлевич1",
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
  "calls": [
    {
      "id": "57c9876d-9457-46bf-9a17-a6dc0128ec88",
      "actor": {
        "id": "Patient",
        "name": "Пациент"
      },
      "cost": {
        "amount": 50,
        "currency": {
          "id": "RUB",
          "name": "руб."
        }
      },
      "duration": 31,
      "startedAtUtc": "2016-12-14T14:59:32",
      "successful": true
    },
    {
      "id": "da701009-adf0-4819-bc7f-a6dc0128ec88",
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
      "duration": 16,
      "startedAtUtc": "2016-12-14T14:59:06",
      "successful": true
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