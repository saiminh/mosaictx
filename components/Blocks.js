import React from 'react'
import { Hero } from './blocks/Hero'
import { Nav } from './blocks/Nav'
import { About } from './blocks/About'
import { SecondaryNav } from './blocks/SecondaryNav'
import { People } from './blocks/People'
import { Platform } from './blocks/Platform'
import { Partnerships } from './blocks/Partnerships'
import { Work } from './blocks/Work'
import { LongText } from './blocks/LongText'
import { Footer } from './blocks/Footer'

export const Blocks = (props) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case 'PageBlocksHero':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Hero data={block} />
                  </React.Fragment>
                )
              case 'PageBlocksNav':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Nav data={block} />
                  </React.Fragment>
                )
              case 'PageBlocksAbout':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <About data={block} />
                  </React.Fragment>
                )
              case 'PageBlocksSecondaryNav':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <SecondaryNav data={block} />
                  </React.Fragment>
                )
              case 'PageBlocksPeople':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <People data={block} />
                  </React.Fragment>
                )
              case 'PageBlocksPlatform':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Platform data={block} />
                  </React.Fragment>
                )
              case 'PageBlocksWork':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Work data={block} />
                  </React.Fragment>
                )
              case 'PageBlocksPartnerships':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Partnerships data={block} />
                  </React.Fragment>
                )
              case 'PageBlocksLongText':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <LongText data={block} />
                  </React.Fragment>
                )
              case 'PageBlocksFooter':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Footer data={block} />
                  </React.Fragment>
                )
              default:
                return null
            }
          })
        : null}
    </>
  )
}