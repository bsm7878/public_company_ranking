import React from 'react';
import './moneyTable.scss';
import { Card } from 'antd';
import { Row, Col, Tabs } from 'antd';
import { Table } from 'antd';
import { FcAddressBook } from "react-icons/fc";

const MoneyTable = () => {
    const columns = [
        {
            title: '순위',
            dataIndex: 'rank',
          },
        {
          title: '기업',
          dataIndex: 'name',
        },
        {
            title: '기본급',
            dataIndex: 'base',
        },
        {
            title: '고정수당',
            dataIndex: 'fixed',
        },
        {
            title: '실적수당',
            dataIndex: 'performance',
        },
        {
            title: '급여성 복리후생비',
            dataIndex: 'welfare',
        },
        {
            title: '성과상여금',
            dataIndex: 'bonus',
        },
        {
            title: '경영평과 성과급',
            dataIndex: 'manage',
        },
        {
            title: '합계',
            dataIndex: 'total',
            sorter: {
                compare: (a, b) => a.total - b.total,
                multiple: 1,
            },
        },
      ];
      
      const data = [
        {
          rank: '1',
          name: '한국해외인프라도시개발지원공사',
          base: '41,303',
          fixed: '35,581',
          performance: '4,672',
          welfare: '4,672',
          bonus: '4,672',
          manage: '0',
          total: '41,303',
        },
        {
            rank: '2',
            name: '한국전력공사',
            base: '41,303',
            fixed: '35,581',
            performance: '4,672',
            welfare: '4,672',
            bonus: '4,672',
            manage: '0',
            total: '45,303',
          },
      ];

    return (
        <Card type="inner" title="전체 연봉">
            <Tabs defaultActiveKey="1" centered>
                <Tabs.TabPane tab="초봉" key="1">
                    <Row>
                        <Col span={24}>
                            <Table pagination={false} columns={columns} dataSource={data}  />
                        </Col>
                    </Row>                                    
                </Tabs.TabPane>
                <Tabs.TabPane tab="평균연봉" key="2">
                    Content of Tab Pane 2
                </Tabs.TabPane>
            </Tabs>
        </Card>
    );
};

export default MoneyTable;