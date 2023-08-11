import { MapType } from '../../types/common/main'
import { Alliances } from './enums'

 const maps: MapType[] = [
    {
        name: 'Stormhaven',
        id: 'Stormhaven',
        mapLink: 'https://images.uesp.net/1/16/ON-map-Stormhaven.jpg',
        width: 600,
        height: 600,
        miniatureLink: 'https://cdn.discordapp.com/attachments/1139198962344144948/1139199007864926299/stormhavenTile.png',
        alliance: Alliances.DC
    }
]

export default maps