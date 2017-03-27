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
  "patientPhone": {
    "code": "7",
    "number": "9099708593"
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
  "calls": [
    {
      "id": "9b2bdcfc-b5a6-4d68-84ce-a73e00f206de",
      "actor": {
        "id": "Patient",
        "name": "Пациент"
      },
      "duration": 11,
      "startedAtUtc": "2017-03-22T14:39:59",
      "successful": true
    },
    {
      "id": "2235fa99-4167-4f3e-90de-a73e00f206de",
      "actor": {
        "id": "Doctor",
        "name": "Врач"
      },
      "duration": 32,
      "startedAtUtc": "2017-03-22T14:39:39",
      "successful": true
    }
  ],
  "id": "6cff747a-e615-416f-9c26-a73e00f17582",
  "status": {
    "id": "Processed",
    "name": "Завершено"
  },
  "createdAtUtc": "2017-03-22T14:39:07",
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
    "partnerPatientId": "11 какой-то ИД паци$ента_00"
  },
  "statuses": [
    {
      "id": "df544818-c208-4ac3-9621-a73e00f1758c",
      "status": {
        "id": "Registered",
        "name": "Зарегистрирована"
      },
      "actor": {
        "id": "Patient",
        "name": "Пациент"
      },
      "createdAtUtc": "2017-03-22T14:39:07"
    },
    {
      "id": "3e3c73ac-be5f-40ed-a0a5-a73e00f17b9f",
      "status": {
        "id": "PreProcessing",
        "name": "Обрабатывается"
      },
      "actor": {
        "id": "System",
        "name": "Система"
      },
      "createdAtUtc": "2017-03-22T14:39:12"
    },
    {
      "id": "8e28379e-d44d-4faf-bf53-a73e00f18b30",
      "status": {
        "id": "Processing",
        "name": "В работе"
      },
      "actor": {
        "id": "Doctor",
        "name": "Врач"
      },
      "createdAtUtc": "2017-03-22T14:39:26"
    },
    {
      "id": "f109a39c-6e2d-41bf-9a97-a73e00f1f426",
      "status": {
        "id": "PostProcessing",
        "name": "Завершается"
      },
      "actor": {
        "id": "System",
        "name": "Система"
      },
      "createdAtUtc": "2017-03-22T14:40:55"
    },
    {
      "id": "c298e0ae-2d7d-40be-9163-a73e00f20746",
      "status": {
        "id": "Processed",
        "name": "Завершено"
      },
      "actor": {
        "id": "System",
        "name": "Система"
      },
      "createdAtUtc": "2017-03-22T14:41:11"
    }
  ],
  "transactions": [
    {
      "amount": {
        "amount": -50,
        "currency": {
          "id": "RUB",
          "name": "руб."
        }
      },
      "createdAtUtc": "2017-03-22T14:41:11",
      "completedAtUtc": "2017-03-22T14:41:11",
      "correspondentAccountId": "b90ffede-7381-470f-ac9f-6ac9a43bad3b",
      "operation": {
        "id": "fe9640be-2f66-4917-9f1f-b461a50030d8",
        "type": {
          "id": "Transfer",
          "name": "Перевод средств"
        },
        "description": "Списание за оказанние услуг связи",
        "createdAtUtc": "2017-03-22T14:41:11",
        "completedAtUtc": "2017-03-22T14:41:11"
      }
    }
  ],
  "timeline": [
    {
      "id": "3e3fb852-6388-4035-baa9-a73e00f18b30",
      "type": {
        "id": "Accepted",
        "name": "Консультация одобрена"
      },
      "createdAtUtc": "2017-03-22T14:39:26",
      "data": {
        "actor": {
          "id": "Doctor",
          "name": "Врач"
        },
        "note": null
      }
    },
    {
      "id": "e810912d-7572-4009-b4b3-a73e00f1f426",
      "type": {
        "id": "Ended",
        "name": "Консультация завершена успешно"
      },
      "createdAtUtc": "2017-03-22T14:40:55",
      "data": {
        "actor": {
          "id": "System",
          "name": "Система"
        },
        "note": null
      }
    }
  ]
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
      "patientPhone": {
        "code": "7",
        "number": "9099708593"
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
      "calls": [
        {
          "id": "9b2bdcfc-b5a6-4d68-84ce-a73e00f206de",
          "actor": {
            "id": "Patient",
            "name": "Пациент"
          },
          "duration": 11,
          "startedAtUtc": "2017-03-22T14:39:59",
          "successful": true
        },
        {
          "id": "2235fa99-4167-4f3e-90de-a73e00f206de",
          "actor": {
            "id": "Doctor",
            "name": "Врач"
          },
          "duration": 32,
          "startedAtUtc": "2017-03-22T14:39:39",
          "successful": true
        }
      ],
      "id": "6cff747a-e615-416f-9c26-a73e00f17582",
      "status": {
        "id": "Processed",
        "name": "Завершено"
      },
      "createdAtUtc": "2017-03-22T14:39:07",
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
        "partnerPatientId": "11 какой-то ИД паци$ента_00"
      },
      "statuses": [
        {
          "id": "df544818-c208-4ac3-9621-a73e00f1758c",
          "status": {
            "id": "Registered",
            "name": "Зарегистрирована"
          },
          "actor": {
            "id": "Patient",
            "name": "Пациент"
          },
          "createdAtUtc": "2017-03-22T14:39:07"
        },
        {
          "id": "3e3c73ac-be5f-40ed-a0a5-a73e00f17b9f",
          "status": {
            "id": "PreProcessing",
            "name": "Обрабатывается"
          },
          "actor": {
            "id": "System",
            "name": "Система"
          },
          "createdAtUtc": "2017-03-22T14:39:12"
        },
        {
          "id": "8e28379e-d44d-4faf-bf53-a73e00f18b30",
          "status": {
            "id": "Processing",
            "name": "В работе"
          },
          "actor": {
            "id": "Doctor",
            "name": "Врач"
          },
          "createdAtUtc": "2017-03-22T14:39:26"
        },
        {
          "id": "f109a39c-6e2d-41bf-9a97-a73e00f1f426",
          "status": {
            "id": "PostProcessing",
            "name": "Завершается"
          },
          "actor": {
            "id": "System",
            "name": "Система"
          },
          "createdAtUtc": "2017-03-22T14:40:55"
        },
        {
          "id": "c298e0ae-2d7d-40be-9163-a73e00f20746",
          "status": {
            "id": "Processed",
            "name": "Завершено"
          },
          "actor": {
            "id": "System",
            "name": "Система"
          },
          "createdAtUtc": "2017-03-22T14:41:11"
        }
      ],
      "transactions": [
        {
          "amount": {
            "amount": -50,
            "currency": {
              "id": "RUB",
              "name": "руб."
            }
          },
          "createdAtUtc": "2017-03-22T14:41:11",
          "completedAtUtc": "2017-03-22T14:41:11",
          "correspondentAccountId": "b90ffede-7381-470f-ac9f-6ac9a43bad3b",
          "operation": {
            "id": "fe9640be-2f66-4917-9f1f-b461a50030d8",
            "type": {
              "id": "Transfer",
              "name": "Перевод средств"
            },
            "description": "Списание за оказанние услуг связи",
            "createdAtUtc": "2017-03-22T14:41:11",
            "completedAtUtc": "2017-03-22T14:41:11"
          }
        }
      ],
      "timeline": [
        {
          "id": "3e3fb852-6388-4035-baa9-a73e00f18b30",
          "type": {
            "id": "Accepted",
            "name": "Консультация одобрена"
          },
          "createdAtUtc": "2017-03-22T14:39:26",
          "data": {
            "actor": {
              "id": "Doctor",
              "name": "Врач"
            },
            "note": null
          }
        },
        {
          "id": "e810912d-7572-4009-b4b3-a73e00f1f426",
          "type": {
            "id": "Ended",
            "name": "Консультация завершена успешно"
          },
          "createdAtUtc": "2017-03-22T14:40:55",
          "data": {
            "actor": {
              "id": "System",
              "name": "Система"
            },
            "note": null
          }
        }
      ]
    }
  ],
  "count": 1,
  "totalCount": 75
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