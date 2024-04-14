
const PRICE = ({ priceHeading, price}) => {
    return (
        <div className={`w-36 m-1.5`}>
            <h5>{priceHeading}</h5>
            <p className={`font-bold`}>{price}</p>
        </div>
    )
}

export default PRICE;