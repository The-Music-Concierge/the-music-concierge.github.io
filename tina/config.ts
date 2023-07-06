import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  branch:
    process.env.TINA_BRANCH! || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/homepage",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "header_menu_title",
            label: "Header Menu Title",
          },
          {
            type: "string",
            name: "navigation_menu_title",
            label: "Navigation Menu Title",
          },
          {
            type: "number",
            name: "weight",
            label: "Weight",
          },
          {
            type: "boolean",
            name: "header_menu",
            label: "Header Menu",
          },
          {
            type: "string",
            name: "body",
            label: "Body - if you need a new line use {{< newline >}} in the text. Sorry that the ENTER key doesn't work.",
            isBody: true,
          },
        ]
      },
      {
        name: "review",
        label: "Reviews",
        path: "content/reviews",
        defaultItem: () => {
          return {
            weight: 99,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "datetime",
            label: "Date",
            name: "date",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Star Rating",
          },
          {
            type: "number",
            name: "weight",
            label: "Weight",
            required: true,
          },
        ],
      },
      {
        name: "package",
        label: "Packages",
        path: "content/packages",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "contents",
            label: "Contents",
            list: true,
          },
          {
            type: "string",
            label: "Price",
            name: "price",
          },
          {
            type: "number",
            name: "weight",
            label: "Weight",
          },
          {
            type: "string",
            name: "color",
            label: "Colour (hex)",
          },
        ],
      },
      {
        name: "carousel",
        label: "Carousels",
        path: "content/carousels",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Carousel Name",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "images",
            label: "Images",
            list: true,
            required: true,
          },
        ],
      },
      {
        name: "video",
        label: "Videos",
        path: "content/videos",
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return values.youtube_id;
            },
          },
        },
        defaultItem: () => {
          return {
            weight: 99,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "youtube_id",
            label: "Youtube ID",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "number",
            name: "weight",
            label: "Weight",
            required: true,
          },
        ],
      },
    ],
  },
});
