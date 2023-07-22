const SlideShow = () => {

    return (
        <div className="carousel carousel-center max-w-fit max-h-full">
            <div className="carousel-item h-full">
                <img src='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1045&q=80' alt="pic1"/>
            </div>
            <div className="carousel-item h-full">
                <img src='https://images.unsplash.com/photo-1569091791842-7cfb64e04797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80' alt="pic2"/>
            </div>
            <div className="carousel-item h-full">
                <img src="https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=983&q=80" alt="Pizza"/>
            </div>
            <div className="carousel-item h-full">
                <img src="https://images.unsplash.com/photo-1583243553028-e4001cb6dd77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1017&q=80" alt="Pizza"/>
            </div>
        </div>

    );

};

export default SlideShow;