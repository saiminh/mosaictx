export const footerBlock = {
  name: 'footer',
  label: 'Footer',
  ui: {
    defaultItem: {
      title: 'Join the journey.',
      contactForms: {
        contactButtonText: 'Get in Touch ',
        jobsButtonText: 'See our open Jobs'
      },
      contactAdress: {
        contactImage: '',
        contactAdress: {
          type: 'root',
          children: [
            {
              type: 'p',
              children: [
                {
                  type: 'text',
                  text: 'Mosaic Therapeutics Wellcome Genome Campus Cambridge CB10 1DR United Kingdom',
                },
              ],
            },
            {
              type: 'p',
              children: [
                {
                  type: 'text',
                  text: 'Info@mosaic-TX.com +44 (0) 1732 723181',
                },
              ],
            },
          ],
        },
      },
      linkedinLink: 'https://www.linkedin.com/company/mosaic-tx/',
      hygiene: {
        copyRightText: '©2023 Mosaic Therapeutics',
        hygieneLinks: [
          {
            linkText: 'Privacy policy',
            linkUrl: '/'
          }
        ],
        brandingText: 'The Combination Oncology People™️'
      },
    }
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string'
    },
    {
      name: 'contactForms',
      label: 'Contact Forms',
      type: 'object',
      fields: [
        {
          name: 'contactButtonText',
          label: 'Contact Button Text',
          type: 'string'
        },
        {
          name: 'jobsButtonText',
          label: 'Jobs Button Text',
          type: 'string'
        },
      ]
    },
    {
      name: 'contactAdress',
      label: 'Contact Adress',
      type: 'object',
      fields: [
        {
          name: 'contactImage',
          label: 'Contact Image',
          type: 'image'
        },
        {
          name: 'contactAdress',
          label: 'Contact Adress',
          type: 'rich-text'
        },
      ]
    },
    {
      name: "linkedinLink",
      label: "LinkedIn Link",
      type: "string"
    },
    {
      name: 'hygiene',
      label: 'The very bottom of it all',
      type: 'object',
      fields: [
        {
          name: 'footerNav',
          label: 'Footer Navigation',
          type: 'object',
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item.linkText
            })
          },
          fields: [
            {
              name: 'linkText',
              label: 'Link Text',
              type: 'string'
            },
            {
              name: 'linkUrl',
              label: 'Link URL',
              type: 'string'
            },
          ]
        },
        {
          name: 'copyRightText',
          label: 'Copyright Text',
          type: 'string'
        },
        {
          name: 'hygieneLinks',
          label: 'Hygiene Links',
          type: 'object',
          list: true,
          fields: [
            {
              name: 'linkText',
              label: 'Link Text',
              type: 'string'
            },
            {
              name: 'linkUrl',
              label: 'Link URL',
              type: 'string'
            },
          ]
        },
        {
          name: 'brandingText',
          label: 'Branding Text',
          type: 'string'
        }
      ]
    },
  ]
}