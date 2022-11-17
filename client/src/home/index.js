function HomeComponent() {
    return(
        <div>
            <div className="position-relative mb-2">
                <img src="/images/ShortSelling.jpg" className="w-100"/>
                {/*<h1 className="position-absolute wd-nudge-up top">*/}
                {/*    Home</h1>*/}
            </div>

            <div className="container" style={{marginTop:"50px", marginBottom:"10px", paddingBottom:"10px"}}>
                {/*<section className="bg-dark" style="margin-bottom:0px;padding-bottom:0px;">*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 text-center home-icons">
                                <a href="/">
                                    <i className="fa fa-database wow fadeInUp fa-5x"  data-wow-delay="20ms" ></i>
                                </a>
                                <div>
                                    <h4>
                                        Dataset
                                    </h4>
                                    <h5>All the datas</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 text-center home-icons">
                                <a href="/">
                                    <i className="fa fa-solid fa-arrow-trend-up wow fadeInUp fa-5x"  data-wow-delay="20ms" ></i>

                                </a>
                                <div>
                                    <h4>
                                        Test
                                    </h4>
                                    <h5>All the test data</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 text-center home-icons">
                                <a href="/">
                                    <i className="fa fa-sharp fa-solid fa-newspaper  wow fadeInUp fa-5x"  data-wow-delay="20ms" ></i>

                                </a>
                                <div>
                                    <h4>
                                        Test
                                    </h4>
                                    <h5>All the test datas</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 text-center home-icons">
                                <a href="/">
                                    <i className="fa fa-sharp fa-solid fa-robot wow fadeInUp fa-5x"  data-wow-delay="20ms" ></i>
                                </a>
                                <div>
                                    <h4>
                                        Test
                                    </h4>
                                    <h5>All the test datas</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                {/*</section>*/}
            </div>
        </div>


    );
}
export default HomeComponent;