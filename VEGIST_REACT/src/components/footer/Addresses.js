import React from 'react'

const Addresses = () => {
    return (
        <div>
            <section className="address-area section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="address-title">
                                <h1>Your addresses</h1>
                            </div>
                            <div className="account-link">
                                <a href="account.html">Return to account details</a>
                            </div>
                            <div className="add-area">
                                <a href='#/' className="address-link">
                                    <i className="icon-plus" />
                                    <span className="sp-link-title">Add a new address</span>
                                </a>
                                <div className="add-title">
                                    <h4>Add a new address</h4>
                                </div>
                                <div className="address-content">
                                    <ul className="address-input">
                                        <li className="type-add">
                                            <label>First name</label>
                                            <input type="text" name="f-name" placeholder="First name" />
                                        </li>
                                        <li className="type-add">
                                            <label>Last name</label>
                                            <input type="text" name="f-name" placeholder="Last name" />
                                        </li>
                                        <li className="type-add">
                                            <label>Company</label>
                                            <input type="text" name="f-name" placeholder="Company" />
                                        </li>
                                        <li className="type-add">
                                            <label>Address1</label>
                                            <input type="text" name="f-name" placeholder="Address1" />
                                        </li>
                                        <li className="type-add">
                                            <label>Address2</label>
                                            <input type="text" name="f-name" placeholder="Address2" />
                                        </li>
                                        <li className="type-add">
                                            <label>City</label>
                                            <input type="text" name="f-name" placeholder="City" />
                                        </li>
                                        <li className="type-add">
                                            <label>Country</label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option>India</option>
                                                <option>Indonesia</option>
                                                <option>Bangladesh</option>
                                                <option>United States</option>
                                                <option>Afghanistan</option>
                                                <option>Åland Islands</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                                <option>Andorra</option>
                                                <option>Angola</option>
                                                <option>Anguilla</option>
                                                <option>Antigua &amp; Barbuda</option>
                                                <option>Argentina</option>
                                                <option>Armenia</option>
                                                <option>Aruba</option>
                                                <option>Ascension Island</option>
                                                <option>Australia</option>
                                                <option>Austria</option>
                                                <option>Azerbaijan</option>
                                                <option>Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                                <option>Belarus</option>
                                                <option>Belgium</option>
                                                <option>Belize</option>
                                                <option>Benin</option>
                                            </select>
                                        </li>
                                        <li className="type-add">
                                            <label>Province</label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option>Alabama</option>
                                                <option>Alaska</option>
                                                <option>American Samoa</option>
                                                <option>Arizona</option>
                                                <option>Arkansas</option>
                                                <option>Armed Forces Americas</option>
                                                <option>Armed Forces Europe</option>
                                                <option>Armed Forces Pacific</option>
                                                <option>California</option>
                                                <option>Colorado</option>
                                                <option>Connecticut</option>
                                                <option>Delaware</option>
                                                <option>Washington DC</option>
                                                <option>Micronesia</option>
                                                <option>Florida</option>
                                                <option>Georgia</option>
                                                <option>Guam</option>
                                                <option>Hawaii</option>
                                                <option>Idaho</option>
                                                <option>Illinois</option>
                                                <option>Indiana</option>
                                                <option>Iowa</option>
                                                <option>Kansas</option>
                                                <option>Kentucky</option>
                                                <option>Louisiana</option>
                                                <option>Maine</option>
                                                <option>Marshall Islands</option>
                                            </select>
                                        </li>
                                        <li className="type-add">
                                            <label>Postal/Zip code</label>
                                            <input
                                                type="text"
                                                name="f-name"
                                                placeholder="Postal/Zip code"
                                            />
                                        </li>
                                        <li className="type-add">
                                            <label>Phone</label>
                                            <input type="text" name="f-name" placeholder="Phone" />
                                        </li>
                                    </ul>
                                    <label className="check">
                                        <input type="checkbox" /> Set as default address
                                    </label>
                                    <div className="add-link">
                                        <a href="#/" className="btn btn-style1">
                                            Add address
                                        </a>
                                        <a href="index.html" className="btn btn-style1">
                                            Cancel
                                        </a>
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

export default Addresses