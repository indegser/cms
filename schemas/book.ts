import { SchemaTypeDefinition } from "sanity";

export const book: SchemaTypeDefinition = {
    title: "책",
    name: "book",
    type: "document",
    fields: [
      {
        title: "제목",
        name: "title",
        type: "string"
      },
      {
        title: '포스터',
        name: 'poster',
        type: 'image'
      }
    ]
  } 
