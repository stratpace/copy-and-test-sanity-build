import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'client', type: 'string' }),
    defineField({ name: 'challenge', type: 'text' }),
    defineField({ name: 'solution', type: 'text' }),
    defineField({ name: 'outcome', type: 'text' }),
    defineField({ 
      name: 'metrics', 
      type: 'array', 
      of: [{ 
        type: 'object', 
        fields: [{name: 'label', type: 'string'}, {name: 'value', type: 'string'}] 
      }] 
    }),
  ],
})