export const aboutBlock = {
  name: 'about',
  label: 'About',
  fields: [
    {
      name: 'anchor',
      label: 'Anchor link',
      type: 'string'
    },
    {
      name: 'video',
      label: 'Video',
      type: 'image'
    },
    {
      name: 'image',
      label: 'Image',
      type: 'image'
    },
    {
      name: 'imageAlt',
      label: 'Image Alt',
      type: 'string'
    },
    {
      name: 'bodyhead',
      label: 'Headline',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      name: 'bodysubhead',
      label: 'Sub Headline',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      name: 'body',
      label: 'Body',
      type: 'rich-text'
    }
  ]
}