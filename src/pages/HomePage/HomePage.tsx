import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style.css'
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout>
      <HeaderComponent/>
      <Content style={{display: 'flex', justifyContent:"center"}}>
        <div className='startTilesWrapper'>
        <Link to={`/randomGuess`} className='tileLink startTiles'>
            <img src={'/tiles/randomTile.png'} alt="" className="tileMiniature"></img>
            <div className="tileLinkOverlay">Random spot</div>
        </Link>
        <Link to={`/guess`} className='tileLink startTiles'>
            <img src={'/tiles/chooseTile.png'} alt="" className="tileMiniature"></img>
            <div className="tileLinkOverlay">Choose map</div>
        </Link>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  )
}

export default HomePage
