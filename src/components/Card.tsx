export function Card(prop) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={prop.imgSrc} alt={prop.title}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Information</div>
                    <p className="text-gray-700 text-base">
                        {prop.title})
                    </p>
                </div>
        </div>
)
}