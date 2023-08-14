import { Card, Progress, Image } from "antd";
import { FullScoreType, ScoreType, SpotType } from "../../../types/common/main";
import spots from "../../static/Spots";
const _ = require("lodash");

const ScoreRow = (props: {scoreRecord: FullScoreType}) => {
    const printDates = () => {
        var date = new Date(props.scoreRecord.date);
        const dmy = date.toLocaleDateString("en-GB"); 
        const hms = date.toLocaleTimeString("it-IT"); 
        return <>{dmy} {hms}</>
    }
    return (
        <div className="scoreRow">
        {printDates()}
            {props.scoreRecord.spots.map((spot: ScoreType, key: number)=>{
                const fullSpot = spots.filter((value: SpotType) => {
                    return value.id===spot.spotId
                })[0]

                if(_.isNil(fullSpot)){
                    return ''
                }

                return (
                    <Card cover={<Image src={fullSpot.screenshotLink} />} key={key} style={{ width: 250, margin: 10 }}>
                        <Progress percent={spot.score} showInfo={false} />
                        Points: {spot.score}/100
                    </Card>
                )
            })}
        </div>
    )
}

export default ScoreRow;