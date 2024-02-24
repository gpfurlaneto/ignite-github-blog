import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleL: css`
      font-size: 1.4rem;
      line-height: 130%;
    `,

    titleM: css`
      font-size: 1.25rem;
      line-height: 160%;
    `,

    titleS: css`
      font-size: 1.125rem;
      line-height: 160%;
    `,

    textM: css`
    font-size: 1rem;
    line-height: 160%;
    `,

    textS: css`
      font-size: 0.875rem;
      line-height: 160%;
    `,

    link: css`
      font-size: 0.75rem;
      line-height: 160%;
    `
  }
}