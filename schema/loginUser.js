export const loginSuccess = {
    "type": "object",
    "properties": {
      "token": {
        "type": "string"
      }
    },
    "required": [
      "token"
    ]
  };

export const loginFailed = {
    "type": "object",
    "properties": {
      "error": {
        "type": "string"
      }
    },
    "required": [
      "error"
    ]
  };