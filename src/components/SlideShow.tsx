const SlideShow = () => {

    return (
        <div className="carousel carousel-center max-w-fit h-96 gap-2">

            <div className="carousel-item h-full w-1/2">
                <img
                    src='https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
                    alt="pic2"/>
            </div>
            <div className="carousel-item h-full w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
                    alt="Pizza"/>
            </div>
            <div className="carousel-item h-full w-1/2">
                <img
                    src='https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80'
                    alt="pic1"/>
            </div>

        </div>

    );

};

export default SlideShow;