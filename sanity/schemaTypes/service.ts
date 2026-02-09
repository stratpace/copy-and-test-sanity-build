import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'intro', type: 'text' }),
    defineField({ name: 'iconName', type: 'string' }),
    defineField({
      name: 'subServices',
      title: 'Sub-Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
            { name: 'points', type: 'array', of: [{ type: 'string' }] },
            { name: 'iconName', type: 'string' },
          ],
        },
      ],
    }),
  ],
})