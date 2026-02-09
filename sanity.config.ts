import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Stratpace Advisory CMS',

  // Replace these with your actual Sanity project details from manage.sanity.io
  projectId: 'your-project-id', 
  dataset: 'production',

  basePath: '/admin', // The route where the Studio will live

  plugins: [deskTool()],

  schema: {
    types: schema.types,
  },
});