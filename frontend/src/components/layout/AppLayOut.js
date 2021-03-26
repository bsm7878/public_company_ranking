import React from 'react';
import './app_lay_out.scss';
import { Row, Col } from 'antd';
import { Layout } from 'antd';

const AppLayOut = ({children}) => {
    const { Header, Footer } = Layout;

    return (
        <Layout>
            <Header className='header'>Header</Header>
            
            {children}

            <Footer className='footer'>
                <Row className='footer-section'>
                    <Col span={24}>
                        <p>위 사이트는 공공기관 경영정보 공개시스템 '알리오'에 공시된 자료를 기반으로 만들어졌습니다.</p>
                        <p>© Octopus</p>
                    </Col>
                </Row>
            </Footer>
        </Layout>
    );
};

export default AppLayOut;