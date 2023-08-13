import { Button, Layout, Result } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style.css'
import HeaderComponent from '../../components/HeaderComponent';
import { Link } from 'react-router-dom';
import FooterComponent from '../../components/FooterComponent';

const NotFoundPage = () => {
  return (
    <Layout>
      <HeaderComponent/>
      <Content>
        <div className='content'>
            <Result
            status="error"
            title="Something went wrong"
            subTitle="Page not found."
            extra={[
              <>
                <Link to={`/`}><Button type='default' className='resultsButton'>Home</Button></Link>
              </>
            ]}
          ></Result>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  )
}
export default NotFoundPage