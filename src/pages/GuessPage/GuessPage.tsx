import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import './style.css'
import { Link, useParams } from 'react-router-dom';

const GuessPage = () => {
  const params = useParams();
  console.log(params)
    return(
        <Layout>
        <Header>
          ESO Guessr
        </Header>
        <Content>
          guess
        </Content>
        <Footer>
          footer
        </Footer>
      </Layout>
    )
}
export default GuessPage
