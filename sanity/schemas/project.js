export default {
  name: 'project', title: 'Project', type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['Residential', 'Commercial', 'Renovation'] } },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'completionDate', title: 'Completion Date', type: 'date' },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] }
  ]
}
