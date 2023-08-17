import { Layout, Spin, Image as AntdImage, Button, Typography, Result } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style.css'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import maps from '../../static/Maps';
import { MapType, SpotType } from '../../../types/common/main';
import spots from '../../static/Spots';
import { calculatePoints, getDistance, getRandomArbitrary } from '../../utils/utils';
import { Layer, Stage, Image, Group, Rect, Circle, Line } from 'react-konva';
import useImage from 'use-image';
import Konva from 'konva';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';

const _ = require("lodash");

const RandomGuessPage = () => {
    const [isError, setIsError] = useState(false)
    const [isPlaced, setIsPlaced] = useState(false)
    const [isLocked, setIsLocked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [mark, setMark] = useState({
      x: 0,
      y: 0,
      width: 5,
      height: 5,
      rotation: 45,
      id: "mark",
      offset: {
        x: 2.5,
        y: 2.5,
      },
      stroke: "cyan",
    })
    const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 })
    const [stageScale, setStageScale] = useState({ x: 1, y: 1 })
    const [currentMap, setCurrentMap] = useState({} as MapType)
    const [mapImage, status] = useImage(currentMap.mapLink);
    const [currentSpot, setCurrentSpot] = useState({} as SpotType)
    const [spotPoints, setSpotPoints] = useState(0)
    const [spotDistance, setSpotDistance] = useState(0)
    const [recentSpots, setRecentSpots] = useState(Array<number>())
  
    const stage = useRef(null);
    const group = useRef<Konva.Group>(null);
    const size = 600
  
    useEffect(() => {
        randomMapAndSpot()
    }, [])
  
    const randomMapAndSpot = () => {
        let trueRandom = getRandomArbitrary(0,spots.length)
        let recentSpotsCopy = [...recentSpots]

        while(recentSpotsCopy.indexOf(trueRandom)!==-1){
            trueRandom = getRandomArbitrary(0,spots.length)
        }

        if(recentSpotsCopy.length>=20){
            recentSpotsCopy.pop()  
        }
        recentSpotsCopy=[trueRandom, ...recentSpotsCopy]
        setRecentSpots(recentSpotsCopy)

        const spot = spots[trueRandom]

        if (_.isNil(spot)) {
          setIsError(true)
          return
        }
        setCurrentSpot(spot)
    
        const mapTmp =  maps.filter((value: MapType) => {
          return value.id === spot.mapId ? value : ''
        })[0]
    
        if (_.isNil(mapTmp)) {
          setIsError(true)
          return
        }
        setCurrentMap(mapTmp)
        setIsLoading(false)
    }

    const handleScroll = (e: any) => {
      var scaleBy = 1.1;
      // stop default scrolling
      e.evt.preventDefault();
  
      var oldScale = stageScale.x;
      var pointer = { x: e.evt.layerX, y: e.evt.layerY }
  
      var mousePointTo = {
        x: (pointer.x - stagePosition.x) / oldScale,
        y: (pointer.y - stagePosition.y) / oldScale,
      };
  
      // how to scale? Zoom in? Or zoom out?
      let direction = e.evt.deltaY > 0 ? -1 : 1;
  
      // when we zoom on trackpad, e.evt.ctrlKey is true
      // in that case lets revert direction
      if (e.evt.ctrlKey) {
        direction = -direction;
      }
  
      var newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;
      if (newScale < 1) {
        newScale = 1;
      }
      if (newScale > 8.5) {
        newScale = 8.5;
      }
      setStageScale({ x: newScale, y: newScale })
  
      var newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
  
      setStagePosition(newPos)
    }
  
    const handleMapClick = (e: any) => {
      var transform = group.current?.getAbsoluteTransform().copy()
      // to detect relative position we need to invert transform
      transform!.invert();
      // now we find relative point
      const pos = e.target.getStage().getPointerPosition();
      var finalPosition = transform!.point(pos);
  
      if (!isLocked) {
        var shape = {
          x: finalPosition.x,
          y: finalPosition.y,
          width: 5,
          height: 5,
          rotation: 45,
          id: "mark",
          offset: {
            x: 2.5,
            y: 2.5,
          },
          stroke: "cyan",
        };
        setMark(shape);
        setIsPlaced(true)
      }
    }
  
    const handleClickCenter = () => {
      centerMap()
    }
  
    const handleConfirmGuess = () => {
      setIsLocked(true)
      const pos1 = { x: mark.x, y: mark.y }
      const pos2 = { x: currentSpot.x, y: currentSpot.y }
      const distance = getDistance(pos1, pos2)
      const points = Math.floor(calculatePoints(distance, currentMap.id))
      setSpotPoints(points)
      setSpotDistance(Math.floor(distance))
    }
  
    const centerMap = () => {
      setStagePosition({ x: 0, y: 0 })
      setStageScale({ x: 1, y: 1 })
      group.current?.position({ x: 0, y: 0 })
    }
  
    const resetMap = () => {
      setIsLocked(false)
      setIsPlaced(false)
      centerMap()
    }
  
    const handleNextGuess = () => {
      resetMap()
      randomMapAndSpot()
    }
  
    return (
      <Layout>
        <HeaderComponent/>
        <Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          {(isLoading && status==="loading" && !isError) && <Spin></Spin>}
          {(!isLoading) &&
            <>
              <div className='guessContent'>
                <div className='imgWrapper'><AntdImage src={currentSpot.screenshotLink} alt="" /></div>
                <div className='mapWrapper'>
                  <Stage width={size} height={size} ref={stage} x={stagePosition.x} y={stagePosition.y} scaleX={stageScale.x} scaleY={stageScale.y} className='stage'>
                    <Layer>
                      <Group draggable onWheel={handleScroll} onClick={handleMapClick} ref={group}>
                        <Image image={mapImage} x={0} y={0} width={size} height={size} />
                        {
                          isLocked ? <Line points={[mark.x, mark.y, currentSpot.x, currentSpot.y]} stroke={"#1fb572"} strokeWidth={2} lineJoin={"round"} dash={[10, 5]} /> : ''
                        }
                        {
                          isPlaced ? <Rect x={mark.x} y={mark.y} width={mark.width} height={mark.height} stroke={mark.stroke} strokeWidth={1} offset={mark.offset} rotation={mark.rotation} /> : ''
                        }
                        {
                          isLocked ? <Circle x={currentSpot.x} y={currentSpot.y} fill={'#1668dc'} radius={2.5} /> : ''
                        }
                      </Group>
                    </Layer>
                  </Stage>
                  <Button type="default" onClick={handleClickCenter}>Center map</Button>
                </div>
                <div className='buttonsWrapper'>
                  <div className={`pointsElement ${isLocked ? 'pointsVisible' : 'pointsInvisible'} `}>
                    <div className='pointsDistance'>
                      <Typography.Text className='numberDiv'>Points: {spotPoints}</Typography.Text>
                      <Typography.Text className='numberDiv'>Distance: {spotDistance}</Typography.Text>
                    </div>
                  </div>
                  {
                    !isLocked &&
                    <Button type='primary' onClick={handleConfirmGuess} disabled={isLocked || !isPlaced}>Confirm guess</Button>
                  }
                  {isLocked &&
                    <Button type='default' onClick={handleNextGuess} disabled={!isLocked}>Next spot</Button>
                  }
                </div>
              </div>
            </>
          }
          {
            isError &&
            <Result
              status="error"
              title="Something went wrong"
              extra={[
                <>
                <Link to={`/`}><Button type='default' className='resultsButton'>Home</Button></Link>
                </>
              ]}
            ></Result>
          }
        </Content>
        <FooterComponent />
      </Layout>
    )
  }
export default RandomGuessPage