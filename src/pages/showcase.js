import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
    return (
        <Layout title="Showcase:Build with SpeedForge Saas Kit " description="Hello React Page">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    <h1>Build with SpeedForge Saas Kit</h1>
                    <p>Showcase of projects built with SpeedForge Saas Kit</p>
                </p>
            </div>
        </Layout>
    );
}