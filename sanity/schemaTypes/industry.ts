import { defineField, defineType } from 'sanity'

export const industry = defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name (Material Symbol)',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Main Content',
      type: 'text',
    }),
    defineField({
      name: 'challenges',
      title: 'Core Challenges',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'stats',
      title: 'Key Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' },
          ],
        },
      ],
    }),
  ],
})