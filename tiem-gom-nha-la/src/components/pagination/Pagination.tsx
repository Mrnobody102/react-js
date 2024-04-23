import { Pagination } from 'antd'
import './Pagination.scss'

interface Props {}

const CustomPagination: React.FC<Props> = () => {
  return (
    <>
      <Pagination defaultCurrent={1} total={50} />;
    </>
  )
}

export default CustomPagination
