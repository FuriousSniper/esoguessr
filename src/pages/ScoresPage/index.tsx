import { Button, Empty, Layout, Modal } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style.css'
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import { useEffect, useState } from 'react';
import { getFromLS, initScores } from '../../utils/utils';
import { FullScoreType } from '../../../types/common/main';
import ScoreRow from '../../components/ScoreRow';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const _ = require("lodash");

const ScoresPage = () => {
    const [isScoresArrayEmpty, setIsScoresArrayEmpty] = useState(true)
    const [scoresArray, setScoresArray] = useState(Array<FullScoreType>())
    const [modal, contextHolder] = Modal.useModal();

    const confirm = () => {
        modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined rev={undefined} />,
            content: 'Are you sure you want to delete all scores?',
            okText: 'Ok',
            okButtonProps: {
                danger: true
            },
            cancelText: 'Cancel',
            onOk: () => {
                initScores()
                setIsScoresArrayEmpty(true)
            }
        });
    };

    useEffect(() => {
        const lsReturn = getFromLS("scores")
        let scoresArrayLS;
        if (_.isNull(lsReturn)) {
            return
        }

        try {
            scoresArrayLS = JSON.parse(lsReturn!)
        } catch (error) {
            return
        }

        if (scoresArrayLS.length === 0) {
            return
        }

        setIsScoresArrayEmpty(false)
        setScoresArray(scoresArrayLS)
    }, [])

    return (
        <Layout>
            <HeaderComponent />
            <Content>
                <div className='content scoresPage'>
                    {
                        isScoresArrayEmpty &&
                        <div className="centerEmpty">
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </div>
                    }
                    {!isScoresArrayEmpty &&
                        <div className="scoresTable">
                            {scoresArray.map((fullScoreRecord: FullScoreType, key: number) => {
                                return <ScoreRow scoreRecord={fullScoreRecord} key={key} />
                            })}
                            <Button type='default' danger={true} className='deleteScoresButton' onClick={confirm}>Delete all scores</Button>
                            {contextHolder}
                        </div>
                    }
                </div>
            </Content>
            <FooterComponent />
        </Layout>
    )
}

export default ScoresPage
