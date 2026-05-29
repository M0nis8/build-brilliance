const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Client name is required'),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().error('Quote text is required'),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
      options: {
        list: [
          { title: '⭐', value: 1 },
          { title: '⭐⭐', value: 2 },
          { title: '⭐⭐⭐', value: 3 },
          { title: '⭐⭐⭐⭐', value: 4 },
          { title: '⭐⭐⭐⭐⭐', value: 5 },
        ],
      },
    },
    {
      name: 'photo',
      title: 'Client Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'company',
      media: 'photo',
    },
  },
};

export default testimonial;
