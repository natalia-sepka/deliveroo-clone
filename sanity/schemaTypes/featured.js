import {defineField} from "sanity";

export default {
    name: "featured",
    type: "document",
    title: "Featured menu categories",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Featured category name",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "short_description",
            type: "string",
            title: "Short description",
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: "restaurants",
            type: "array",
            title: "Restaurants",
            of: [{ type: "reference", to: [{ type: "restaurant" }] }],
        }),
    ]
}