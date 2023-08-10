export interface MapType {
    name: string,
    id: string,
    mapLink: string,
    width: number,
    height: number,
    miniatureLink: string
}

export interface SpotType {
    x: number,
    y: number,
    id: number,
    mapId: MapType.id,
    screenshotLink: string
}