import React from 'react';
import './cardTable.scss';
import { Card } from 'antd';
import RankCard from '../rankCard/RankCard';
import { Row, Col, Tabs } from 'antd';

const CardTable = () => {
    const { TabPane } = Tabs;

    return (
        <Card type="inner" title="순위">
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="전체" key="1">
                    <Row>
                        <Col span={9} offset={3}>
                            <RankCard/> 
                        </Col>
                        <Col span={9}>
                            <RankCard/>
                        </Col>
                    </Row>                                    
                </TabPane>
                <TabPane tab="지역별" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="기관별" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </Card>
    );
};

export default CardTable;