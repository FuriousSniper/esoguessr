import { MapType } from '../../types/common/main'
import { Alliances } from './enums'

 const maps: MapType[] = [
    {
        name: 'Stormhaven',
        id: 'Stormhaven',
        mapLink: 'https://images.uesp.net/1/16/ON-map-Stormhaven.jpg',
        width: 600,
        height: 600,
        miniatureLink: '/tiles/StormhavenTile.png',
        alliance: Alliances.DC
    },
    {
        name: 'Cyrodiil',
        id: 'Cyrodiil',
        mapLink: 'https://images.uesp.net/0/04/ON-map-Cyrodiil.jpg',
        width: 600,
        height: 600,
        miniatureLink: '/tiles/CyrodiilTile.png',
        alliance: Alliances.DLC
    },
    {
        name: 'Stonefalls',
        id: 'Stonefalls',
        mapLink: 'https://images.uesp.net/2/20/ON-map-Stonefalls.jpg',
        width: 600,
        height: 600,
        miniatureLink: '/tiles/StonefallsTile.png',
        alliance: Alliances.EP
    },
    {
        name: 'Malabal Tor',
        id: 'MalabalTor',
        mapLink: 'https://images.uesp.net/7/75/ON-map-Malabal_Tor.jpg',
        width: 600,
        height: 600,
        miniatureLink: '/tiles/MalabalTorTile.png',
        alliance: Alliances.AD
    },
    {
        name: 'High Isle',
        id: 'HighIsle',
        mapLink: 'https://images.uesp.net/6/6e/ON-map-High_Isle.jpg',
        width: 600,
        height: 600,
        miniatureLink: '/tiles/HighIsleTile.png',
        alliance: Alliances.DLC
    }
]

export default maps