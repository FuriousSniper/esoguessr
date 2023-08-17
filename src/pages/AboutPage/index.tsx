import { Layout, Image } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style.css'
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import spots from '../../static/Spots';

const AboutPage = () => {
    return (
        <Layout>
            <HeaderComponent />
            <Content>
                <div className='content'>
                    <div className="aboutRow">
                        <div className="numberDiv description">
                            Are you an ESO adventurer? Have you explored all the zones and think you remember them all? Play this ESO guessr and find out!
                        </div>
                        <Image src={spots[14].screenshotLink} height={400}/>
                    </div>
                    <div className="aboutRow">
                        <Image src={spots[29].screenshotLink} height={400}/>
                        <div className="numberDiv description">
                            ESO Guessr is an experimental web page. It is still in early development and more features as well as spots to guess will come.
                        </div>
                    </div>
                    <div className="aboutRow">
                        <div className="numberDiv description">
                            Try playing the game while waiting for battlegrounds queue or when people are late for trial. The game works best on PC.
                        </div>
                        <Image src={spots[46].screenshotLink} height={400}/>
                    </div>
                </div>
            </Content>
            <FooterComponent />
        </Layout>
    )
}
export default AboutPage