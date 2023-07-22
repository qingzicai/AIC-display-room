import {useState, useRef} from 'react';
import {Card} from './Card.tsx';


const Search = () => {

    const [inputValue, setInputValue] = useState('');
    const [artworks, setArtworks] = useState([]);

    async function getImage() {
        try {
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?q=${inputValue}`);
            const data = await response.json();
            const artWorks = data.map(item => {
                const {id, title, image_id} = item;
                return {
                    id,
                    title,
                    imgSrc: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
                };
            });
            setArtworks(artWorks);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        getImage();
    }

    return (
        <div className="search">

            <form onSubmit={handleSubmit} className={'flex flex-col items-center mb-4'}>
                <label className={'text-2xl font-mono my-3'}>Explore Artworks by Artist</label>
                <div className={'flex justify-center items-center gap-2'}>
                    <label className="relative block"/>
                        <input
                            className="placeholder:italic text-gray-600 block bg-white w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Artist's name..." value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className={'px-2 mt-2 mx-0.5 text-amber-50 hover:bg-gray-700'}>Search
                        </button>
                </div>
            </form>

            {artworks.length > 0 && (
                <div className="gallery">
                    {artworks.map(art => (
                        <Card
                            key={art.id}
                            imgSrc={art.imgSrc}
                        />
                    ))}
                </div>
            )}

        </div>
)

}

export default Search

