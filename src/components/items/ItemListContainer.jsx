import './ItemListContainer.sass';

export const ItemList = ({ brand, name, link, image, description, currency, price, colour }) => {
    return (
        <div className="group relative">
            <div className="min-h-80 text-gray-500 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                    src={image}
                    alt={description}
                    title={description}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <h2 className="text-xl text-red-500">{brand}</h2>
                <h3 className="mt-3 text-blue-700">
                    <a href={link}>
                        <span aria-hidden="true" className="absolute inset-0" />
                    </a>
                </h3>
                <p className="text-ml font-medium text-gray-900">{name}</p>
                <p className="mt-1 text-sm text-red-500">{colour}</p>
                <p className="text-xl font-medium text-gray-900">{currency} {price}</p>
            </div>
        </div>
    );
};

export const Greeting = ({ greeting }) => {
    const greetingStyle = {
        border: "0.1em",
        borderRadius: "0.5em",
        color: "transparent",
        fontSize: "1.5rem",
        fontWeight: "600",
        padding: "1%",
        textAlign: "center"
    };

    return (
        <h1 id="greeting" className="text-2xl font-bold tracking-tight text-gray-900" style={greetingStyle}>{greeting}</h1>
    );
}