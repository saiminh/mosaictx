export const navBlock = {
  label: 'Navigation',
  name: 'nav',
  fields: [
    {
      type: 'object',
      label: 'Navigation',
      name: 'navItem',
      list: true,
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
      ui: {
        itemProps: (item) => {
          return {
            label: `${item.text}`,
          }
        }
      }
    }, 
    {
      name: 'tagline',
      label: 'Tagline (mobile only)',
      type: 'string'
    }
  ]
}