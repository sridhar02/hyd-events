# Hyd Tech Events Site

## Listmonk API Details


- add a subscriber to a list 

Method: POST
API: http://localhost:9000/api/subscribers

 `preconfirm_subscriptions` is used to for double opt in that confirmation email has to be confirmed 

```js

{
  "email": "Sk12@hootboard.com",
  "name": "SK",
  "status": "enabled",
  "lists": [
    2
  ],
  "preconfirm_subscriptions": true,
  "attribs": {
    "city": "string",
    "projects": 0,
    "stack": {
      "languages": [
        "string"
      ]
    }
  }
}
```

- get all your subscriber lists 

API: http://localhost:9000/api/public/lists


- get a single list 

API: http://localhost:9000/api/lists/2

- get all subscribers

API: http://localhost:9000/api/subscribers

- create a campagin for a list 

Method: POST

API: http://localhost:9000/api/campaigns

contentTypes : richtext, html, markdown, plain
body: Campaign content body.


```js
{
  "name": "Test campaign",
  "subject": "Hello, world",
  "lists": [
    2
  ],
  "from_email": "listmonk <noreply@listmonk.yoursite.com>",
  "content_type": "richtext",
  "messenger": "email",
  "type": "regular",
  "tags": [
    "test"
  ],
  "template_id": 1
}
```

## Cloudflare workers

- Create a wrangler route

```shell
npx wrangler generate my-app worker-router

```