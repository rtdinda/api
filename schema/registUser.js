export const registUserSuccess = {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer"
      },
      "token": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "token"
    ]
  };

export const registUserFailed = {
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
