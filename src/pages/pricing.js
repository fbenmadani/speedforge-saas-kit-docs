import React from 'react';
import PricingTable from '../components/PricingTable';
import Layout from '@theme/Layout';

export default function Pricing() {
    return (
        <Layout title=" Pricing: Build with SpeedForge Saas Kit " description="Hello React Page">
            <div className="container">
                <PricingTable />
            </div>
        </Layout>
    );
}