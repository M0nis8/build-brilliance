'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas/index';

export default defineConfig({
  name: 'build-brilliance',
  title: 'Build Brilliance CMS',
  projectId: 'w434rpn7',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
