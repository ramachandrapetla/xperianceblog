import React from 'react'
import {Space, Spin } from 'antd'

export default function Spinner() {
    return (
        <div className="spinner-container">
            <Space size="middle">
                <Spin size="large"/>
            </Space>
        </div>
    )
}