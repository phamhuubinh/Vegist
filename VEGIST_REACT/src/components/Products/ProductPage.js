import React from 'react'

const ProductPage = () => {
    return (
        <div>
            <section className="section-b-padding pro-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="pro-page-tab">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            href="#tab-1"
                                        >
                                            Description
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                                            Reviews
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                                            Video
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                                            Size chart
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-1">
                                        <div className="tab-1content">
                                            <h4>More details</h4>
                                            <ul className="tab-description">
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry
                                                </li>
                                                <li>
                                                    Lorem Ipsum has been the ‘s standard dummy text. Lorem
                                                    Ipsumum is simply dummy text.
                                                </li>
                                                <li>type here your detail one by one li more add</li>
                                                <li>
                                                    has been the industry’s standard dummy text ever since.
                                                    Lorem Ips
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry.
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the ‘s standard
                                                    dummy text. Lorem Ipsum has been the industry’s standard
                                                    dummy text ever since. Lorem Ipsum is simply dummy text.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-2content">
                                            <h4>Key specification</h4>
                                            <ul className="tab-description">
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry
                                                </li>
                                                <li>
                                                    Lorem Ipsum has been the ‘s standard dummy text. Lorem
                                                    Ipsumum is simply dummy text.
                                                </li>
                                                <li>type here your detail one by one li more add</li>
                                                <li>
                                                    has been the industry’s standard dummy text ever since.
                                                    Lorem Ips
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry.
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the ‘s standard
                                                    dummy text. Lorem Ipsum has been the industry’s standard
                                                    dummy text ever since. Lorem Ipsum is simply dummy text.
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the ‘s standard
                                                    dummy text. Lorem Ipsum has been the industry’s standard
                                                    dummy text ever since. Lorem Ipsum is simply dummy text.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show" id="tab-2">
                                        <h4 className="reviews-title">Customer reviews</h4>
                                        <div className="customer-reviews t-desk-2">
                                            <span className="p-rating">
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                            </span>
                                            <p className="review-desck">Based on 2 reviews</p>
                                            <a href="#add-review" data-bs-toggle="collapse">
                                                Write a review
                                            </a>
                                        </div>
                                        <div className="review-form collapse" id="add-review">
                                            <h4>Write a review</h4>
                                            <form>
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter your name"
                                                />
                                                <label>Email</label>
                                                <input
                                                    type="text"
                                                    name="mail"
                                                    placeholder="Enter your Email"
                                                />
                                                <label>Rating</label>
                                                <span>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                                <label>Review title</label>
                                                <input type="text" name="mail" placeholder="Review title" />
                                                <label>Add comments</label>
                                                <textarea
                                                    name="comment"
                                                    placeholder="Write your comments"
                                                    defaultValue={""}
                                                />
                                            </form>
                                        </div>
                                        <div className="customer-reviews">
                                            <span className="p-rating">
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star-o" />
                                            </span>
                                            <h4 className="review-head">
                                                he also good and high product see like look
                                            </h4>
                                            <span className="reviews-editor">
                                                kelin patel <span className="review-name">on</span> fab 5,
                                                2021
                                            </span>
                                            <p className="r-description">
                                                he also good and high product see like look
                                            </p>
                                        </div>
                                        <div className="customer-reviews">
                                            <span className="p-rating">
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                            </span>
                                            <h4 className="review-head">
                                                he also good and fresh fruit organic product see like look
                                            </h4>
                                            <span className="reviews-editor">
                                                Melvin louis <span className="review-name">on</span> fab 5,
                                                2021
                                            </span>
                                            <p className="r-description">
                                                he also good and fresh fruit organic product see like look
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show" id="tab-3">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe
                                                height={630}
                                                src="https://www.youtube.com/embed/0etCKCAsImI"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen=""
                                            />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show" id="tab-5">
                                        <div className="more-description table-responsive">
                                            <table
                                                className="table table-bordered table-elastic table-condensed"
                                                style={{ fontSize: 9 }}
                                            >
                                                <thead>
                                                    <tr className="top">
                                                        <th rowSpan={2} scope="col">
                                                            Vegetables
                                                            <br /> Serving Size
                                                            <br /> (gram weight/
                                                            <br /> ounce weight)
                                                        </th>
                                                        <th rowSpan={2} scope="col">
                                                            Calories
                                                        </th>
                                                        <th rowSpan={2} scope="col">
                                                            Calories
                                                            <br /> from Fat
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Total Fat
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Sodium
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Potassium
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Total
                                                            <br /> Carbo-hydrate
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Dietary
                                                            <br /> Fiber
                                                        </th>
                                                        <th scope="col">Sugars</th>
                                                        <th scope="col">Protein</th>
                                                        <th scope="col">Vitamin A</th>
                                                        <th scope="col">Vitamin C</th>
                                                        <th scope="col">Calcium</th>
                                                        <th scope="col">Iron</th>
                                                    </tr>
                                                    <tr className="text-center" style={{ fontSize: "90%" }}>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(mg)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(mg)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(%DV)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Asparagus
                                                            <br /> 5 spears
                                                            <br /> (93 g/3.3 oz)
                                                        </th>
                                                        <td>20</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>230</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>10</td>
                                                        <td>15</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Bell Pepper
                                                            <br /> 1 medium
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>25</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>40</td>
                                                        <td>2</td>
                                                        <td>220</td>
                                                        <td>6</td>
                                                        <td>6</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>190</td>
                                                        <td>2</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Broccoli
                                                            <br /> 1 medium stalk
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>45</td>
                                                        <td>0</td>
                                                        <td>0.5</td>
                                                        <td>1</td>
                                                        <td>80</td>
                                                        <td>3</td>
                                                        <td>460</td>
                                                        <td>13</td>
                                                        <td>8</td>
                                                        <td>3</td>
                                                        <td>3</td>
                                                        <td>12</td>
                                                        <td>2</td>
                                                        <td>4</td>
                                                        <td>6</td>
                                                        <td>220</td>
                                                        <td>6</td>
                                                        <td>6</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Carrot
                                                            <br /> 1 carrot, 7" long,
                                                            <br /> 1 1/4" diameter
                                                            <br />
                                                            (78 g/2.8 oz)
                                                        </th>
                                                        <td>30</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>60</td>
                                                        <td>3</td>
                                                        <td>250</td>
                                                        <td>7</td>
                                                        <td>7</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>5</td>
                                                        <td>1</td>
                                                        <td>110</td>
                                                        <td>10</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Cauliflower
                                                            <br /> 1/6 medium head
                                                            <br /> (99 g/3.5 oz)
                                                        </th>
                                                        <td>25</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>30</td>
                                                        <td>1</td>
                                                        <td>270</td>
                                                        <td>8</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>0</td>
                                                        <td>100</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Celery
                                                            <br /> 2 medium stalks
                                                            <br /> (110 g/3.9 oz)
                                                        </th>
                                                        <td>15</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>115</td>
                                                        <td>5</td>
                                                        <td>260</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>0</td>
                                                        <td>10</td>
                                                        <td>15</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Cucumber
                                                            <br /> 1/3 medium
                                                            <br /> (99 g/3.5 oz)
                                                        </th>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>140</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>10</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Green (Snap) Beans
                                                            <br /> 3/4 cup cut
                                                            <br /> (83 g/3.0 oz)
                                                        </th>
                                                        <td>20</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>200</td>
                                                        <td>6</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>3</td>
                                                        <td>12</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>10</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Green&nbsp;Cabbage
                                                            <br /> 1/12 medium head
                                                            <br /> (84 g/3.0 oz)
                                                        </th>
                                                        <td>25</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>20</td>
                                                        <td>1</td>
                                                        <td>190</td>
                                                        <td>5</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>0</td>
                                                        <td>70</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Green Onion
                                                            <br /> 1/4 cup chopped
                                                            <br /> (25 g/0.9 oz)
                                                        </th>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>70</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>0</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Iceberg Lettuce
                                                            <br /> 1/6 medium head
                                                            <br /> (89 g/3.2 oz)
                                                        </th>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>125</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>6</td>
                                                        <td>6</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Leaf Lettuce
                                                            <br /> 1 1/2 cups shredded
                                                            <br /> (85 g/3.0 oz)
                                                        </th>
                                                        <td>15</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>35</td>
                                                        <td>1</td>
                                                        <td>170</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>130</td>
                                                        <td>6</td>
                                                        <td>2</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Mushrooms
                                                            <br /> 5 medium
                                                            <br /> (84 g/3.0 oz)
                                                        </th>
                                                        <td>20</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>15</td>
                                                        <td>0</td>
                                                        <td>300</td>
                                                        <td>9</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>0</td>
                                                        <td>3</td>
                                                        <td>0</td>
                                                        <td>2</td>
                                                        <td>0</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Onion
                                                            <br /> 1 medium
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>45</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>5</td>
                                                        <td>0</td>
                                                        <td>190</td>
                                                        <td>5</td>
                                                        <td>11</td>
                                                        <td>4</td>
                                                        <td>3</td>
                                                        <td>12</td>
                                                        <td>9</td>
                                                        <td>1</td>
                                                        <td>0</td>
                                                        <td>20</td>
                                                        <td>4</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Potato
                                                            <br /> 1 medium
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>110</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>620</td>
                                                        <td>18</td>
                                                        <td>26</td>
                                                        <td>9</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>1</td>
                                                        <td>3</td>
                                                        <td>0</td>
                                                        <td>45</td>
                                                        <td>2</td>
                                                        <td>6</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Radishes
                                                            <br /> 7 radishes
                                                            <br /> (85 g/3.0 oz)
                                                        </th>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>55</td>
                                                        <td>2</td>
                                                        <td>190</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>30</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Summer Squash
                                                            <br /> 1/2 medium
                                                            <br /> (98 g/3.5 oz)
                                                        </th>
                                                        <td>20</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>260</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>6</td>
                                                        <td>30</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Sweet Corn
                                                            <br /> kernels from 1<br /> medium ear
                                                            <br /> (90 g/3.2 oz)
                                                        </th>
                                                        <td>90</td>
                                                        <td>20</td>
                                                        <td>2.5</td>
                                                        <td>4</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>250</td>
                                                        <td>7</td>
                                                        <td>18</td>
                                                        <td>6</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>5</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Sweet Potato
                                                            <br /> 1 medium, 5" long,
                                                            <br /> 2" diameter
                                                            <br />
                                                            (130 g/4.6 oz)
                                                        </th>
                                                        <td>100</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>70</td>
                                                        <td>3</td>
                                                        <td>440</td>
                                                        <td>13</td>
                                                        <td>23</td>
                                                        <td>8</td>
                                                        <td>4</td>
                                                        <td>16</td>
                                                        <td>7</td>
                                                        <td>2</td>
                                                        <td>120</td>
                                                        <td>30</td>
                                                        <td>4</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Tomato
                                                            <br /> 1 medium
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>25</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>20</td>
                                                        <td>1</td>
                                                        <td>340</td>
                                                        <td>10</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>20</td>
                                                        <td>40</td>
                                                        <td>2</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage