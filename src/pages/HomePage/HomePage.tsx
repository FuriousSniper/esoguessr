import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import './style.css'
import { Link } from 'react-router-dom';
import maps from '../../static/Maps';
import { MapType } from '../../../types/common/main';

const HomePage = () => {
    return(
        <Layout>
        <Header>
          ESO Guessr
        </Header>
        <Content>
          <div className='content'>
            {maps.map((map: MapType, key: number)=>{
              return <Link to={`/guess/${map.id}`} key={key}>{map.name}</Link>
            })}
          </div>
        </Content>
        <Footer>
          footer
        </Footer>
      </Layout>
    )
}
export default HomePage