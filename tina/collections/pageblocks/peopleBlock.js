export const peopleBlock = {
  name: 'people',
  label: 'People',
  fields: [
    {
      name: 'anchor',
      label: 'Anchor link',
      type: 'string',
    },
    {
      name: 'titleImage',
      label: 'Title Image',
      type: 'image'
    },
    {
      name: 'title',
      label: 'Title',
      type: 'string'
    },
    {
      name: 'peopleheadline',
      label: 'Headline',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      name: 'teamProfile',
      label: 'Team Profile',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'image'
        },
        {
          name: 'imageAlt',
          label: 'Image Alt Text',
          type: 'string'
        },
        {
          name: 'name',
          label: 'Teammember first name',
          type: 'string'
        },
        {
          name: 'lastname',
          label: 'Teammember Surname',
          type: 'string'
        },
        {
          name: 'academicTitle',
          label: 'Academic Title',
          type: 'string'
        },
        {
          name: 'jobtitle',
          label: 'Job Title',
          type: 'string'
        },
        {
          name: 'credentials',
          label: 'Credentials',
          type: 'string',
          list: true
        },
        {
          name: 'department',
          label: 'Department',
          type: 'string',
          options: [
            { label: 'Leadership', value: 'leadership' },
            { label: 'Board', value: 'board' },
            { label: 'Advisors', value: 'advisors' },
          ]
        },
        {
          name: 'linkedin',
          label: 'LinkedIn Profile (full URL)',
          type: 'string'
        }
      ]
    }   
  ]
}