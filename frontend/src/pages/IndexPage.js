import React from 'react';
import './hi.scss';
import { FcSearch } from "react-icons/fc";
import Message from '../images/message.png';
import profits from '../images/profits.png';
import rank from '../images/rank.png';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { Select } from 'antd';



const IndexPage = () => {

    const { Header, Footer, Content } = Layout;
    const { Option } = Select;


    return (
        <>
        <Layout>
            <Header className='header'>Header</Header>
            
            <Content className='content'>
                <Row className='title-section'>
                    <Col span={24}>
                        <h1>
                            알리오 불편해서 만듬
                            <br/>
                            공기업, 연봉 비교 끝판왕!
                        </h1>    
                    </Col>        
                </Row>


                <Row className='search-section'>
                    <Col span={8} offset={8}>
                        <FcSearch className='search-icon'/>
                        <Select
                            className='search-button'
                            bordered={false}
                            autoFocus={true}
                            allowClear={true}
                            size="large"
                            showSearch
                            placeholder="공기업을 입력해 주세요."
                        >
                            <Option value="한국전력공사">한국전력공사</Option>
                            <Option value="한국수자원공사">한국수자원공사</Option>
                            <Option value="국민건강보험공단">국민건강보험공단</Option>
                        </Select>

                    </Col>
                </Row>
            </Content>

            <Content className='intro'>
                <Row className='intro-title-section'>
                    <Col span={6} offset={9}>
                        <h2>이 사이트 뭐람</h2>
                        <p>알리오가 불편해서 만들었어요😢</p>
                    </Col>
                </Row>

                <Row className='intro-detail-section'>
                    <Col span={6} offset={3}>
                        <img src={profits} alt='profits' />
                        <h3>연봉 확인</h3>
                        <p>
                            초봉, 평균연봉, 중위값 등
                            <br/>
                            모든 공기업의 연봉을 확인할 수 있습니다
                        </p>
                    </Col>
                    <Col span={6}>
                        <img src={rank} alt='rank' />
                        <h3>등수 확인</h3>
                        <p>
                            초봉, 평균연봉, 중위값 등
                            <br/>
                            모든 공기업의 연봉을 확인할 수 있습니다
                        </p>
                    </Col>
                    <Col span={6}>
                        <img src={Message} alt='message' />
                        <h3>정보 확인</h3>
                        <p>
                            초봉, 평균연봉, 중위값 등
                            <br/>
                            모든 공기업의 연봉을 확인할 수 있습니다
                        </p>
                    </Col>
                </Row>
            </Content>

            <Footer className='footer'>
                <Row className='footer-section'>
                    <Col span={24}>
                        <p>위 사이트는 공공기관 경영정보 공개시스템 '알리오'에 공시된 자료를 기반으로 만들어졌습니다.</p>
                        <p>© Octopus</p>
                    </Col>
                </Row>
            </Footer>
        </Layout>
        </>
    );
};

export default IndexPage;