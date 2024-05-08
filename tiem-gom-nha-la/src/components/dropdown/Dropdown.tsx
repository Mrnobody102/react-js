import React from 'react'
import './Dropdown.scss'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'

interface Props {
  name: string
  items: ItemType[]
}

const CustomDropdown: React.FC<Props> = ({ name, items }) => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a className='link' onClick={(e) => e.preventDefault()}>
      <Space>
        {name}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default CustomDropdown
