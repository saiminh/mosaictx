export const secondaryNavBlock = {
  name: 'secondaryNav',
  label: 'Secondary page navigation',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string'
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'text',
          label: 'Text',
          type: 'string'
        },
        {
          name: 'anchor',
          label: 'Anchor link',
          type: 'string'
        },
        {
          name: 'image',
          label: 'Image',
          type: 'image'
        },
        {
          name: 'backgroundColor',
          label: 'Background color',
          type: 'string',
          options: [
            {
              value: 'var(--color-blue)',
              label: 'Trustworthy Blue'
            },
            {
              value: 'var(--color-green)',
              label: 'Organic Green'
            },
            {
              value: 'var(--color-orange)',
              label: 'Agile Orange'
            },
            {
              value: 'var(--color-yellow)',
              label: 'Digital Yellow'
            }
          ]
        }
      ]
    }
  ]
}