import React from 'react';
import './rankcard.scss';
import { Row, Col } from 'antd';

const RankCard = () => {
    return (
        <div>
            <div className='rank-top'>
                <h4>신입 초봉</h4>
                <h5>
                    <span>30</span> 
                    <span>위</span>
                </h5>
                <p className='rank-percent'>상위 <span>28%</span></p>
                <p className='rank-money'>39,964 <span>천원</span></p>
            </div>
            <div className='rank-bottom'>
                <Row>
                    <Col span={7} offset={5}>최대</Col>
                    <Col span={7}>33,000 천원</Col>
                </Row>
                <Row>
                    <Col span={7} offset={5}>평균</Col>
                    <Col span={7}>33,000 천원</Col>
                </Row>
                <Row>
                    <Col span={7} offset={5}>중위값</Col>
                    <Col span={7}>33,000 천원</Col>
                </Row>
                <Row>
                    <Col span={7} offset={5}>최저</Col>
                    <Col span={7}>33,000 천원</Col>
                </Row>
            </div>
        </div>
    );
};

export default RankCard;