var animalsSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://zooWebsite.com/schemas/animals.json",
    "title": "Animals",
    "description": "Schema for animals in the local zoo",
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "name": {
            "type": "string"
        },
        "weight": {
            "type": "string"
        },
        "age": {
            "type": "number"
        }
      }
    }
  };