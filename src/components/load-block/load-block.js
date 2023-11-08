import React from 'react'
import { Flex, Spin } from 'antd'

import classes from './load-block.module.scss'
const App = () => (
  <Flex style={{ gridColumn: 2 }} align="center" gap="small" vertical>
    <Spin size="large" />
    <p className={classes['text-description']}>Загрузка билетов...</p>
  </Flex>
)
export default App
