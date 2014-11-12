# HyperJSON Request Message

## Version 0.0.1

## Prerequisites

- [What is HyperJSON](../HyperJSON)
- [What is JSON-Schema Draft v4](http://json-schema.org/)

## Schema

[`./request-schema.json`](./request-schema.json)

```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "name": "HyperJSON Request Message",
  "type": "object",
  "properties": {
    "method": {
      "type": "string"
    },
    "uri": {
      "type": "string"
    },
    "body": {
      "type": "object"
    }
  },
  "required": [
    "method",
    "uri"
  ]
}
```

## Valid Samples

```javascript
// minimal
{
  method: 'GET',
  uri: '/users'
}

// with an optional body included
{
  method: 'POST',
  uri: '/users',
  body: {
    name: 'Obama'
  }
}
```