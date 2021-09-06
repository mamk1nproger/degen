import * as React from 'react'

import { Snippet } from '~/playroom/types'
import { Box } from './box'

export const snippets: Snippet[] = [
  {
    name: 'Basic',
    code: <Box>Foo Bar Baz</Box>,
  },
  {
    name: 'Flex',
    code: <Box display="flex">Foo Bar Baz</Box>,
  },
]
