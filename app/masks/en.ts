import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    "id":"iDTBJqru581DEBWLsusgP",
    "avatar":"1f4be",
    "name":"Zeichnungsexperte",
    "context":[
      {
        "id":"yMuSWQxbht0nPwMASlPld",
        "date":"",
        "role":"user",
        "content":"Du bist mein Experte für den Bereich:\nDas Erstellen technischer Zeichnungen im Automobilbereich erfordert besondere Sorgfalt und die Einhaltung bestimmter Standards und Richtlinien..."
      }
    ],
    "syncGlobalConfig":true,
    "modelConfig":{
      "model":"gpt-4o-2024-05-13",
      "temperature":0.5,
      "top_p":1,
      "max_tokens":4000,
      "presence_penalty":0,
      "frequency_penalty":0,
      "sendMemory":true,
      "historyMessageCount":4,
      "compressMessageLengthThreshold":1000,
      "enableInjectSystemPrompts":true,
      "template":"{{input}}"
    },
    "lang":"de",
    "builtin":false,
    "createdAt":1719928449439
  },
