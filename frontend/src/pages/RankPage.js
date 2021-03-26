import React from 'react';
import AppLayOut from '../components/layout/AppLayOut';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { PageHeader, Descriptions } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CardTable from '../components/cardTable/CardTable';
import MoneyTable from '../components/moneyTable/MoneyTable';

const RankPage = () => {
    const { Content } = Layout;
    

    return (
        <AppLayOut>
            <Content className='company-intro'>
                <Row>
                    <Col span={16} offset={4}>
                        <PageHeader
                        ghost={true}
                        title="한국전력공사"
                        subTitle="기타공공기관"
                        // avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                        avatar={<UserOutlined />}
                        >

                        <Descriptions size="small" column={3}>
                            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                            <Descriptions.Item label="Association">
                            421421
                            </Descriptions.Item>
                            <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                            <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                            <Descriptions.Item label="Remarks">
                            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                            </Descriptions.Item>
                        </Descriptions>
                        </PageHeader>
                    </Col>
                </Row>
            </Content>

            <div style={{paddingTop: '85px', paddingBottom: '85çpx'}}>
                {/* 02. 순위 */}
                <Content style={{paddingBottom: '60px'}}>
                    <Row>
                        <Col span={16} offset={4}>
                            <CardTable/>
                        </Col>
                    </Row>
                </Content>

                
                {/* 03. 전체 연봉 */}
                <Content>
                    <Row>
                        <Col span={16} offset={4}>
                            <MoneyTable/>
                        </Col>
                    </Row>
                </Content>
            </div>
        </AppLayOut>
    );
};

export default RankPage;