export const partnershipsBlock = {
  name: 'partnerships',
  label: 'Our Partnerships',
  ui: {
    defaultItem: {
      anchor: 'partnerships',
      intro: {
        image: '',
        title: 'Our Partnerships',
        headline: 'We work with leading academic institutions and biopharmaceutical companies to advance our pipeline of combination therapies.'
      },
      interviews: [
        {
          title: 'Interview title',
          body: {
            type: 'root',
            children: [
              {
                type: 'p',
                children: [
                  {
                    type: 'text',
                    text: 'Interview body text',
                  },
                ],
              },
            ],
          },
          interview: '',
          logo: '',
          logoAlt: '',
          name: '',
          role: '',
          organisation: '',
          ambientVideo: ''
        }
      ],
      investors: {
        title: 'Investors',
        body: {
          type: 'root',
          children: [
            {
              type: 'p',
              children: [
                {
                  type: 'text',
                  text: 'Investors body text',
                },
              ],
            },
          ],
        },
        linkToSynconia: '',
        linkToCIT: ''
      }
    }
  },
  fields: [
    {
      name: 'anchor',
      label: 'Anchor Link',
      type: 'string',
    },
    {
      name: 'intro',
      label: 'Intro',
      type: 'object',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'image'
        },
        {
          name: 'title',
          label: 'Title',
          type: 'string',
        },
        {
          name: 'headline',
          label: 'Headline',
          type: 'string'
        }
      ]
    },
    {
      name: 'interviews',
      label: 'Interviews',
      type: 'object',
      ui: {
        itemProps: (item) => ({
          key: item.title,
          label: item.title,
        }),
      },
      list: true,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'string',
        },
        {
          name: 'body',
          label: 'Body',
          type: 'rich-text',
        },
        {
          name: 'interviewImage',
          label: 'Interview Image',
          type: 'image',
        },
        {
          name: 'interviewImageAlt',
          label: 'Interview Image Alt Text',
          type: 'string',
        },
        {
          name: 'logo',
          label: 'Logo',
          type: 'image',
        },
        {
          name: 'logoAlt',
          label: 'Logo Alt',
          type: 'string',
        },
        {
          name: 'name',
          label: 'Name',
          type: 'string',
        },
        {
          name: 'role',
          label: 'Role',
          type: 'string',
        },
        {
          name: 'organisation',
          label: 'Organisation',
          type: 'string',
        },
        {
          name: 'ambientVideo',
          label: 'Ambient video',
          type: 'image',
        }
      ]
    },
    {
      name: 'investors',
      label: 'Investors',
      type: 'object',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'string',
        },
        {
          name: 'body',
          label: 'Body',
          type: 'rich-text',
        },
        {
          name: 'linkToSynconia',
          label: 'Link to Syncona',
          type: 'string',      
        },
        {
          name: 'linkToCIT',
          label: 'Link to Cambridge Innovation Capital',
          type: 'string',
        }
      ]
    }
  ],
}