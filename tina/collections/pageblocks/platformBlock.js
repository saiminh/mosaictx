export const platformBlock = {
  name: 'platform',
  label: 'Platform',
  ui: {
    defaultItem: {
      anchor: 'platform',
      intro: {
        image: '',
        title: 'Our Platform',
        whatIsIt: 'An unrivalled combination of...',
        whatIsItList: [
          'Experimental Biology',
          'Computational Engine',
          'Exceptional Expertise'
        ],
        toDoWhat: 'to redefine...',
        toDoWhatList: [
          'Timelines',
          'Processes',
          'Outcomes',
        ]
      },
      components: [
        {
          componentImage: '',
          componentVideo: '',
          componentTitle: 'Experimental Biology',
          componentSubTitle: 'The scale of our biobank, along with our genetic and drug perturbation capabilities, set us apart – giving us deeper biological insights. ',
          componentText: {
            type: 'root',
            children: [
              {
                type: 'p',
                children: [
                  {
                    type: 'text',
                    text: 'We study hundreds of diverse cancer models generated from patients’ biopsy samples. Genome-scale CRISPR screening across [>1300] of these deeply-characterised tumour models allows us to identify the strongest biomarkers, and predict responses.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    type: 'text',
                    text: 'As the only people in the world who have generated this scale of uncontaminated data, as well as the expertise to perturb cancer material with such nuance, we have gained an unparalleled understanding of tumours, and the effectiveness of potential treatments. ',
                  },
                ],
              },
            ],
          },
          componentTextCols: true
        },
      ],
      results: [
        {
          resultImage: '',
          resultVideo: '',
          resultTitle: 'Redefined Processes',
          resultSubTitle: 'Our hyper-targeted process means we can be more agile and efficient than larger companies.',
          resultText: {
            type: 'root',
            children: [
              {
                type: 'p',
                children: [
                  {
                    type: 'text',
                    text: 'Our approach starts out broad and unbiased. Then, we filter out irrelevant or misleading data, and distil down to clearly see what’s driving a tumour, and to understand what will create susceptibility. ',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    type: 'text',
                    text: 'This optimised process saves money, resources, and most crucially for people with cancer – it will save lives.',
                  },
                ],
              },
            ],
          },
          resultTextCols: true
        },
      ],
    },
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
          name: 'whatIsIt',
          label: 'What is our platform?',
          type: 'string'
        },
        {
          name: 'whatIsItList',
          label: 'List of our platform components',
          type: 'string',
          list: true
        },
        {
          name: 'toDoWhat',
          label: 'What is its purpose?',
          type: 'string'
        },
        {
          name: 'toDoWhatList',
          label: 'List of results',
          type: 'string',
          list: true
        }
      ]
    },
    {
      name: 'components',
      label: 'Components',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          const title = item.componentTitle || 'New Component';
          return {
            label: title,
          };
        }
      },
      fields: [
        {
          name: 'componentImage',
          label: 'Image',
          type: 'image'
        },
        {
          name: 'componentImageAlt',
          label: 'Image Alt Text',
          type: 'string'
        },
        {
          name: 'componentVideo',
          label: 'Video',
          type: 'image'
        },
        {
          name: 'componentTitle',
          label: 'Title',
          type: 'string'
        },
        {
          name: 'componentSubTitle',
          label: 'Subtitle',
          type: 'string'
        },
        {
          name: 'componentText',
          label: 'Text',
          type: 'rich-text',
        },
        {
          name: 'componentTextCols',
          label: 'Textflow in 2 Columns?',
          type: 'boolean'
        }
      ]
    },
    {
      name: 'results',
      label: 'Results',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          const title = item.resultTitle || 'New Component';
          return {
            label: title,
          };
        }
      },
      fields: [
        {
          name: 'resultImage',
          label: 'Image',
          type: 'image'
        },
        {
          name: 'resultImageAlt',
          label: 'Image Alt Text',
          type: 'string'
        },
        {
          name: 'resultVideo',
          label: 'Video',
          type: 'image'
        },
        {
          name: 'resultTitle',
          label: 'Title',
          type: 'string'
        },
        {
          name: 'resultSubTitle',
          label: 'Subtitle',
          type: 'string'
        },
        {
          name: 'resultText',
          label: 'Text',
          type: 'rich-text',
        },
        {
          name: 'resultTextCols',
          label: 'Textflow in 2 Columns?',
          type: 'boolean'
        }
      ]
    }
  ]
}