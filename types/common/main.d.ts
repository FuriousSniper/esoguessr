import Alliances from '../../src/static/enums'

export interface MapType {
    name: string,
    id: string,
    mapLink: string,
    width: number,
    height: number,
    miniatureLink: string,
    alliance: Alliances
}

export interface SpotType {
    x: number,
    y: number,
    id: number,
    mapId: MapType.id,
    screenshotLink: string
}