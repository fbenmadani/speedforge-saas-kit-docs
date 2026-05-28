import React from 'react';
import Layout from '@theme/Layout';
import SpeedForgeLanding from '@site/src/components/SpeedForgeLanding';

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

                <h1>Build with SpeedForge Saas Kit</h1>
                <h3>Showcase of projects built with SpeedForge Saas Kit</h3>

            </div>


        </Layout>
    );
}