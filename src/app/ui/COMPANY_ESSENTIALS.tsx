import PRICE from "./PRICE";

const COMPANY_ESSENTIALS = ({ companyOverview }) => {

    const dataDemo = [
        {
            heading: "MARKET CAP",
            price: 1402768.71,
            percentage: false,
            ratio: false,
        },
        {
            heading: "Enterprise Value",
            price: 1398225.71,
            percentage: false,
            ratio: false,
        },
        {
            heading: "No. of Shares",
            price: 361.81,
            percentage: false,
            ratio: false,
        },
        {
            heading: "P/E",
            price: 33.43,
            percentage: false,
            ratio: true,
        },
        {
            heading: "P/B",
            price: 18.09,
            percentage: false,
            ratio: true,
        },
        {
            heading: "Face Value",
            price: 1,
            percentage: false,
            ratio: false,
        },
        {
            heading: "Div. Yield",
            price: 2.94,
            percentage: true,
            ratio: false,
        },
        {
            heading: "Book Value (TTM)",
            price: 214.31,
            percentage: false,
            ratio: false,
        },
        {
            heading: "CASH",
            price: 4543,
            percentage: false,
            ratio: false,
        },
        {
            heading: "DEBT",
            price: 0,
            percentage: false,
            ratio: false,
        },
        {
            heading: "Promoter Holding",
            price: 72.41,
            percentage: true,
            ratio: false,
        },
        {
            heading: "EPS (TTM)",
            price: 115.99,
            percentage: false,
            ratio: false,
        },
        {
            heading: " Sales Growth",
            price: 18.72,
            percentage: true,
            ratio: false,
        },
        {
            heading: "ROE",
            price: 51.80,
            percentage: true,
            ratio: false,
        },
        {
            heading: "ROCE",
            price: 69.39,
            percentage: true,
            ratio: false,
        },
        {
            heading: "Profit Growth",
            price: 2.41,
            percentage: true,
            ratio: false,
        },
    ]
    // console.log(data);

    return (
        <section className={`m-1.5 bg-cyan-600 rounded px-3 py-4`}>
            <h3 className={`text-xl font-bold mb-3`}>Company Essentials</h3>

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

export default COMPANY_ESSENTIALS;