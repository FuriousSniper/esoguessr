import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import './style.css'
import maps from '../../static/Maps';
import { MapType } from '../../../types/common/main';
import TileLink from '../../components/TileLink';
import { Alliances } from '../../static/enums';

const HomePage = () => {
  return (
    <Layout>
      <Header>
        ESO Guessr
      </Header>
      <Content>
        <div className='content'>
          <img src="/ClassicCrown.png" alt="" className='allianceIcon' />
          <div className="dlcMaps">
            {maps.map((map: MapType, key: number) => {
              return map.alliance === Alliances.DLC ? <TileLink mapObject={map} key={key} /> : ''
            })}
          </div>
          <div className="allianceMaps">
            <div className="mapsColumn">
              <img src="/AldmeriWhite.png" alt="" className='allianceIcon' />
              {maps.map((map: MapType, key: number) => {
                return map.alliance === Alliances.AD ? <TileLink mapObject={map} key={key} /> : ''
              })}
            </div>
            <div className="mapsColumn">
              <img src="/DaggerfallWhite.png" alt="" className='allianceIcon' />
              {maps.map((map: MapType, key: number) => {
                return map.alliance === Alliances.DC ? <TileLink mapObject={map} key={key} /> : ''
              })}
            </div>
            <div className="mapsColumn">
              <img src="/EbonheartWhite.png" alt="" className='allianceIcon' />
              {maps.map((map: MapType, key: number) => {
                return map.alliance === Alliances.EP ? <TileLink mapObject={map} key={key} /> : ''
              })}
            </div>
          </div>
        </div>
      </Content>
      <Footer>
        footer
      </Footer>
    </Layout>
  )
}
export default HomePage