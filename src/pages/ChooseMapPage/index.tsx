import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style.css'
import maps from '../../static/Maps';
import { MapType } from '../../../types/common/main';
import TileLink from '../../components/TileLink';
import { Alliances } from '../../static/enums';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';

const ChooseMapPage = () => {
  return (
    <Layout>
      <HeaderComponent/>
      <Content>
        <div className='content'>
          <img src="/icons/ClassicCrown.png" alt="" className='allianceIcon' />
          <div className="dlcMaps">
            {maps.map((map: MapType, key: number) => {
              return map.alliance === Alliances.DLC ? <TileLink mapObject={map} key={key} /> : ''
            })}
          </div>
          <div className="allianceMaps">
            <div className="mapsColumn">
              <img src="/icons/AldmeriWhite.png" alt="" className='allianceIcon' />
              {maps.map((map: MapType, key: number) => {
                return map.alliance === Alliances.AD ? <TileLink mapObject={map} key={key} /> : ''
              })}
            </div>
            <div className="mapsColumn">
              <img src="/icons/DaggerfallWhite.png" alt="" className='allianceIcon' />
              {maps.map((map: MapType, key: number) => {
                return map.alliance === Alliances.DC ? <TileLink mapObject={map} key={key} /> : ''
              })}
            </div>
            <div className="mapsColumn">
              <img src="/icons/EbonheartWhite.png" alt="" className='allianceIcon' />
              {maps.map((map: MapType, key: number) => {
                return map.alliance === Alliances.EP ? <TileLink mapObject={map} key={key} /> : ''
              })}
            </div>
          </div>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  )
}

export default ChooseMapPage
