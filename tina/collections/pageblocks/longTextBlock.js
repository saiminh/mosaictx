export const longTextBlock = {
  name: 'longText',
  label: 'Long Text',
  fields: [
    {
      type: 'string',
      label: 'Anchor link',
      name: 'anchor',
    },
    {
      type: 'rich-text',
      label: 'Body',
      name: 'body',
    }
  ],
}