const plans = [
    {
        name: 'Free',
        price: '0',
        features: [
            '5 Projects',
            '100GB Storage',
            'Email Support',
        ],
    },
    {
        name: 'Pro',
        price: '299',
        features: [
            '10 Projects',
            '200GB Storage',
            'Email Support',
        ],
    },
    {
        name: 'Enterprise',
        price: '399',
        features: [
            '20 Projects',
            '300GB Storage',
            'Email Support',
        ],
    },
];


export default function PricingTable() {
    return (
        <section className="bg-primary py-16 md:py-24">



            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</p>
                    <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Simple, transparent pricing</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        We believe Untitled should be accessible to all companies, no matter the size.
                    </p>
                </div>

                <div className="mt-16 grid w-full grid-cols-1 gap-4 md:mt-24 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <div key={plan.name} className="col col--4">
                            <h2 className="text-display-md font-semibold text-primary md:text-display-lg">{plan.name}</h2>
                            <p className="text-display-md font-semibold text-primary md:text-display-lg">{plan.price}$</p>
                            <ul>
                                {plan.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    );
}
