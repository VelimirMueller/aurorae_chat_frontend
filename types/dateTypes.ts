enum DateEnum {
  hour = 'HH:mm:ss',
  day = 'DD.MM.YY'
}

interface DateFormat {
  hour: DateEnum
  day: DateEnum
}

interface WebsocketResponse {
  data: String
}

export type {
  DateFormat,
  WebsocketResponse
}

export {
  DateEnum
}
