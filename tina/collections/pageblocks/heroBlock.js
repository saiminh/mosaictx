export const heroBlock = {
  name: 'hero',
  label: 'Hero',
  fields: [
    {
      type: 'string',
      label: 'Anchor link',
      name: 'anchor',
    },
    {
      type: 'rich-text',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'image',
      label: 'Hero Image',
      name: 'heroImage',
    },
    {
      type: 'string',
      label: 'Hero Image Alt',
      name: 'imageAlt',
    },
    {
      type: 'image',
      label: 'Hero Video',
      name: 'heroVideo',
    },
    {
      type: 'object',
      label: 'CTA button',
      name: 'cta',
      fields: [
        {
          type: 'string',
          label: 'Text',
          name: 'text',
        },
        {
          type: 'string',
          label: 'Anchor link',
          name: 'anchor',
        },
      ],
    },
    {
      type: 'rich-text',
      label: 'Body',
      name: 'body',
    }
  ],
}