"use client";
import PRICE from "./PRICE";

const PRICE_SUMMARY = ({ companyOverview }) => {

    const dataDemo = [
        {
            heading: "TODAY'S HIGH",
            price: 3946,
        },
        {
            heading: "TODAY'S LOW",
            price: 3872,
        },
        {
            heading: "52 Week High",
            price: 4257.45,
        },
        {
            heading: "52 Week Low",
            price: 3070.30,
        },
    ];

    return (
        <section className={`m-1.5 bg-cyan-600 rounded px-3 py-4`}>
            <h3 className={`text-xl font-bold mb-3`}>Price Summary</h3>

            <div className="flex flex-wrap justify-between">
                {
                    companyOverview.map((priceInfo, index: number) => (
                        <PRICE key={index} priceHeading={priceInfo.heading} price={priceInfo.price} />
                    ))
                }
            </div>
        </section>
    )
}

export default PRICE_SUMMARY;