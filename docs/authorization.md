# Авторизация

Авторизация осуществляется по протоколу OAuth 2.0. Подробная документация по протоколу: [RFC 6749](http://tools.ietf.org/html/rfc6749).

## Получение access и refresh токенов

Для получения пары access и refresh токенов необходимо сделать POST-запрос на [https://testauthtm.doktornarabote.ru/token](https://testauthtm.doktornarabote.ru/token).

В запросе необходимо передать:

`grant_type=client_credentials&client_id={client_id}&client_secret={client_secret}&patient_id={patient_id}`

`{client_id}` и `{client_secret}` необходимо заполнить значениями, выданными при регистрации партнёра. В качестве `{patient_id}` указывается идентификатор пациента, ответственность за формирование и хранение которого берёт на себя партнёр.

Тело запроса необходимо передавать в стандартном application/x-www-form-urlencoded с указанием соответствующего заголовка Content-Type.

В ответе вернётся JSON:

```json
{
  "access_token": "{access_token}",
  "token_type": "bearer",
  "expires_in": 604800
}
```

## Использование и проверка access_token

Для взаимодействия с платформой потребуется использовать полученный access_token для авторизации, передавая его в заголовке в формате:

`Authorization: Bearer ACCESS_TOKEN`

