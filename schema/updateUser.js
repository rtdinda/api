export const updateUserPut = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "job": {
        "type": "string"
      },
      "updatedAt": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "job",
      "updatedAt"
    ]
  };

export const updateUserPatch = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "job": {
        "type": "string"
      },
      "updatedAt": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "job",
      "updatedAt"
    ]
  };