export interface CONFIG {
  WS_URL: string
  WS_PORT: number|null
  WS_API: string
}

export const conf: CONFIG = {
  WS_URL: '0.0.0.0',
  WS_PORT: 5000,
  WS_API: 'api_ws'
}
