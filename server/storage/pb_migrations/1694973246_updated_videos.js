/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcnayqax3lyr08n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xbinuo31",
    "name": "content",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "audio/mpeg",
        "video/mp4",
        "audio/wav"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcnayqax3lyr08n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xbinuo31",
    "name": "video",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "audio/mpeg",
        "video/mp4",
        "audio/wav"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
