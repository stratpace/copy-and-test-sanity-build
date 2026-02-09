import { defineField, defineType } from 'sanity'

export const careerRole = defineType({
  name: 'careerRole',
  title: 'Career Role',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'type', type: 'string', options: { list: ['Full-time', 'Contract', 'Remote']} }),
    defineField({ name: 'description', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'requirements', type: 'array', of: [{type: 'string'}] }),
  ],
})