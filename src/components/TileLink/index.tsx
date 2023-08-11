import { Link } from "react-router-dom"
import { MapType } from "../../../types/common/main"
import './style.css'

const TileLink = (props: {mapObject: MapType}) => {
    return (
        <Link to={`/guess/${props.mapObject.id}`} className={`tileLink ${props.mapObject.alliance}`}>
            <img src={props.mapObject.miniatureLink} alt="" className="tileMiniature"></img>
            <div className="tileLinkOverlay">{props.mapObject.name}</div>
        </Link>
    )
}

export default TileLink
