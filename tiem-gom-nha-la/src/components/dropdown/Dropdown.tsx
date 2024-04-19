import React from 'react'
import './Dropdown.scss'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'

const items: MenuProps['items'] = [
  {
    label: <a href='https://www.antgroup.com'>1st menu item</a>,
    key: '0'
  },
  {
    label: <a href='https://www.aliyun.com'>2nd menu item</a>,
    key: '1'
  },
  {
    type: 'divider'
  },
  {
    label: '3rd menu item',
    key: '3'
  }
]

interface Props {
  name: string
}

const App: React.FC<Props> = ({ name }) => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a className='link' onClick={(e) => e.preventDefault()}>
      <Space>
        {name}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App
