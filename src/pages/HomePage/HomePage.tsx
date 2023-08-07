import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import './style.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return(
        <Layout>
        <Header>
          ESO Guessr
        </Header>
        <Content>
          <div className='content'><Link to={'/guess/Stormhaven'}>Stormhaven</Link></div>
        </Content>
        <Footer>
          footer
        </Footer>
      </Layout>
    )
}
export default HomePage