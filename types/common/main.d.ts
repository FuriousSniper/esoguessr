export interface MapType {
    name: string,
    id: string,
    mapLink: string,
    width: number,
    height: number
}

export interface SpotType {
    x: number,
    y: number,
    id: number,
    mapId: string,
    screenshotLink: string
}