import React from 'react'

export default function Sevices() {
    return (
        <>
            <div style={{marginTop:"130px",marginBottom:"80px"}}>
                <div class="h2 text-center" style={{fontFamily:"cursive"}}>Hotels In Kolhapur</div>
                <br />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <img src={require("../assets/images/Kohinoor square.jpg")} />
                                <div class="card-body text-center">
                                    <h4 style={{ fontFamily: "cursive" }}> Hotel Kohinoor Square</h4>
                                    <p> Kolhapur</p>
                                    <p>New Shahupuri, Kolhapur <br />| 660 m from Kolhapur SCSMT Railway Station</p>
                                    <p class="h5"><ins>Book Now in Rs.1072+ 373 taxes & fees per night</ins></p><br />
                                    <input type="button" class="btn btn-info" value="Info" data-bs-toggle="modal"



                                        data-bs-target="#modalkohinoor" />
                                    <input type="button" class="btn btn-warning" value="Book Now" data-bs-toggle="modal"
                                        data-bs-target="#modalbook" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <img src={require("../assets/images/atria.jpg")} />
                                <div class="card-body text-center">
                                    <h4 style={{ fontFamily: "cursive" }}> Hotel Atria</h4>
                                    <p> Kolhapur</p>
                                    <p>Near Kolhapur Train Station, Kolhapur <br /><br />| 380 m from Kolhapur Bus Stand</p>
                                    <p class="h5"><ins>Book Now in Rs.1726+ 415 taxes & fees per night</ins></p><br />
                                    <input type="button" class="btn btn-info" value="Info" data-bs-toggle="modal"
                                        data-bs-target="#modalatria" />
                                    <input type="button" class="btn btn-warning" value="Book Now" data-bs-toggle="modal"
                                        data-bs-target="#modalbook" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <img src={require("../assets/images/Sayaji.jpg")} />
                                <div class="card-body text-center">
                                    <h4 style={{ fontFamily: "cursive" }}> Hotel Sayaji Kolhapur</h4>
                                    <p> Kolhapur</p>
                                    <p>2104/15, E Ward, Old Pune-Bangalore Hwy, Kawala Naka, Shahupuri, Kolhapur, Maharashtra 416005
                                    </p>
                                    <p class="h5"><ins>Book Now in Rs.5800+ 609 taxes & fees per night</ins></p><br />
                                    <input type="button" class="btn btn-info" value="Info" data-bs-toggle="modal"
                                        data-bs-target="#modalsayaji" />
                                    <input type="button" class="btn btn-warning" value="Book Now" data-bs-toggle="modal"
                                        data-bs-target="#modalbook" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <img src={require("../assets/images/Radiant.jpg")} />
                                <div class="card-body text-center">
                                    <h4 style={{ fontFamily: "cursive" }}> Hotel Radiant</h4>
                                    <p> Kolhapur</p>
                                    <p>Near Kolhapur Train Station, Kolhapur <br /> <br />| 390 m from Kolhapur Bus Stand</p>
                                    <p class="h5"><ins>Book Now in Rs.1557+ 413 taxes & fees per night</ins></p><br />
                                    <input type="button" class="btn btn-info" value="Info" data-bs-toggle="modal"
                                        data-bs-target="#modalradiant" />
                                    <input type="button" class="btn btn-warning" value="Book Now" data-bs-toggle="modal"
                                        data-bs-target="#modalbook" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <img src={require("../assets/images/tleaves.jpg")} />
                                <div class="card-body text-center">
                                    <h4 style={{ fontFamily: "cursive" }}> Hotel 3 Leaves</h4>
                                    <p> Kolhapur</p>
                                    <p>Near Kolhapur Train Station, Kolhapur <br /><br />| 740 m from Kolhapur Bus Stand</p>
                                    <p class="h5"><ins>Book Now in Rs.2414+ 565 taxes & fees per night</ins></p>
                                    <br />
                                    <input type="button" class="btn btn-info" value="Info" data-bs-toggle="modal"
                                        data-bs-target="#modaltleaves" />
                                    <input type="button" class="btn btn-warning" value="Book Now" data-bs-toggle="modal"
                                        data-bs-target="#modalbook" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <img src={require("../assets/images/fern.jpg")} />
                                <div class="card-body text-center">
                                    <h4 style={{ fontFamily: "cursive" }}> Hotel Veeksar the Fern</h4>
                                    <p> Kolhapur</p>
                                    <p>Mukt Sainik Colony, Kolhapur <br /><br />| 8.2 km from Kolhapur Airport</p>
                                    <p class="h5"><ins>Book Now in Rs.3441+ 703 taxes & fees per night</ins></p><br />
                                    <input type="button" class="btn btn-info" value="Info" data-bs-toggle="modal"
                                        data-bs-target="#modalfern" />
                                    <input type="button" class="btn btn-warning" value="Book Now" data-bs-toggle="modal"
                                        data-bs-target="#modalbook" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <img src={require("../assets/images/shree.jpg")} />
                                <div class="card-body text-center"><br />
                                    <h4 style={{ fontFamily: "cursive" }}> Hotel Shree Sai</h4>
                                    <p> Kolhapur</p>
                                    <p>Near Kolhapur Train Station, Kolhapur <br /><br />| 9.2 km from Kolhapur Airport</p>
                                    <p class="h5"><ins>Book Now in Rs. 1568+ 428 taxes & fees per night</ins></p><br />
                                    <input type="button" class="btn btn-info" value="Info" data-bs-toggle="modal"
                                        data-bs-target="#modalshree" />
                                    <input type="button" class="btn btn-warning" value="Book Now" data-bs-toggle="modal"
                                        data-bs-target="#modalbook" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <img src={require("../assets/images/kiyara.jpg")} />
                                <div class="card-body text-center">
                                    <h4 style={{ fontFamily: "cursive" }}> Hotel Kiyara</h4>
                                    <p> Kolhapur</p>
                                    <p>Shivaji Peth A Ward, Kolhapur <br /><br /><br /></p>
                                    <p class="h5"><ins>Book Now in Rs.1228+ 263 taxes & fees per night</ins></p><br />
                                    <input type="button" class="btn btn-info" value="Info" data-bs-toggle="modal"
                                        data-bs-target="#modalkiyara" />
                                    <input type="button" class="btn btn-warning" value="Book Now" data-bs-toggle="modal"
                                        data-bs-target="#modalbook" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="modal fade" id="modalkohinoor">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            {/* <!-- Header modal --> */}
                            <div class="modal-header">
                                <h5>About Hotel Kohinoor Square</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            {/* <!-- Body Modal --> */}
                            <div class="modal-body">
                                Located near Kolhapur SCSMT Railway Station, this hotel offers a restaurant, bar, banquet hall,
                                Wi-Fi & tidy rooms. <br /><br />
                                <ul>
                                    <li> Relish a delightful gastronomic experience during your stay as the hotel features two
                                        amazing restaurants that serve multi-cuisine delicacies.</li>
                                    <li>Visit the pristine Shree Mahalaxmi Ambabai Mandir, situated at 2.8 km from the property.
                                    </li>
                                    <li>Enjoy easy commuting as the hotel is within 9 km from the Kolhapur Airport and Kolhapur
                                        Railway Station.</li>
                                </ul>
                            </div>
                            {/* <!-- Footer Modal --> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Atria Modal  --> */}
                <div class="modal fade" id="modalatria">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            {/* <!-- Header modal --> */}
                            <div class="modal-header">
                                <h5>About Hotel Atria</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            {/* <!-- Body Modal --> */}
                            <div class="modal-body">
                                Rejuvenate at this hotel near Kolhapur Bus Stand, offering well-furnished rooms, a conference room &
                                restaurant. <br />
                                <ul>
                                    <li>Houses a restaurant and a bar for merry dine and wine of guests.</li>
                                    <li>Hotel Atria offers great hospitality in Kolhapur with free Wi-Fi.</li>
                                    <li>Well connected to Kolhapur Railway Station, just 800 m away.</li>
                                    <li>Facilities like free on-site parking and daily housekeeping are available.</li>
                                </ul>
                            </div>
                            {/* <!-- Footer Modal --> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Sayaji Kolhapur --> */}
                <div class="modal fade" id="modalsayaji">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            {/* <!-- Header modal --> */}
                            <div class="modal-header">
                                <h5>About Hotel Sayaji,Kolhapur</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            {/* <!-- Body Modal --> */}
                            <div class="modal-body">
                                This premium property makes for a relaxing stay option with its stylish rooms, multiple dining
                                venues, a lavish nightclub and easy connectivity to popular areas of the city. <br />
                                <ul>
                                    <li> Dance the night away at the on-site nightclub.</li>
                                    <li>Enjoy the property's close proximity to New Palace Museum which is 4.3 km away.</li>
                                    <li> Savour delectable cuisines and drinks from across the world at the on-site restaurant, Blue
                                        Lotus</li>
                                </ul>
                            </div>
                            {/* <!-- Footer Modal --> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal Radiant --> */}
                <div class="modal fade" id="modalradiant">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            {/* <!-- Header modal --> */}
                            <div class="modal-header">
                                <h5>About Hotel Radiant,Kolhapur</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            {/* <!-- Body Modal --> */}
                            <div class="modal-body">
                                Located close to Kolhapur Train Station, this hotel features a restaurant, bar, banquet hall, Wi-Fi
                                & tidy rooms. <br />
                                <ul>
                                    <li>The guests can relax at the outdoor swimming pool.</li>
                                    <li>The hotel houses a roof-top restaurant offering multi-cuisine delicacies.</li>
                                    <li> The guests can avail themselves of multi-storey parking facilities.</li>
                                    <li>The property boasts conference rooms, banquet halls etc perfect for hosting business events
                                        and meetings.</li>
                                </ul>
                            </div>
                            {/* <!-- Footer Modal --> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal 3leaves --> */}
                <div class="modal fade" id="modaltleaves">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            {/* <!-- Header modal --> */}
                            <div class="modal-header">
                                <h5>About Hotel 3 Leaves,Kolhapur</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            {/* <!-- Body Modal --> */}
                            <div class="modal-body">
                                Hotel 3 Leaves is a well-furnished accommodation offering luxurious utilities to the guests, located
                                near The Pedestrian Bridge.<br />
                                <ul>
                                    <li>The hotel offers a spacious open terrace from where you can enjoy city views.</li>
                                    <li>The guests can enjoy delicious cuisines at the in-house restaurant.</li>
                                    <li>The well-equipped meeting room and banquet hall are perfect for hosting social and corporate
                                        events.</li>
                                </ul>
                            </div>
                            {/* <!-- Footer Modal --> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal fern --> */}
                <div class="modal fade" id="modalfern">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            {/* <!-- Header modal --> */}
                            <div class="modal-header">
                                <h5>About Hotel Veeksar The Fern,Kolhapur</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            {/* <!-- Body Modal --> */}
                            <div class="modal-body">
                                Located near Kolhapur Railway Station, Veeksar The Fern offers well-appointed rooms, three dining
                                outlets, and a host of modern amenities. <br />
                                <ul>
                                    <li>Commuting is made easy as the Kolhapur Railway Station is just 3.6 km away.</li>
                                    <li>Guests are served a delicious spread of complimentary breakfast at the in-house restaurant.
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Footer Modal --> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal shree --> */}

                <div class="modal fade" id="modalshree">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            {/* <!-- Header modal --> */}
                            <div class="modal-header">
                                <h5>About Hotel Shree Sai,Kolhapur</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            {/* <!-- Body Modal --> */}
                            <div class="modal-body">
                                Located near Kolhapur Train Station, this budget-friendly hotel offers a restaurant, banquet hall,
                                Wi-Fi & tidy rooms. <br />
                                <ul>
                                    <li> Treat your taste buds with an array of vegetarian delicacies at the in-house restaurant.
                                    </li>
                                    <li>Appetizing meals and drinks are catered by the on-site restaurant and cafe.</li>
                                    <li>Enjoy easy connectivity as the hotel is within 2 km from the Kolhapur Railway Station.</li>
                                    <li> Visit the pristine Mahalaxmi Temple, located at 4.1 km from the property. </li>
                                </ul>
                            </div>
                            {/* <!-- Footer Modal --> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="modal fade" id="modalkiyara">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h5>About Hotel Kiyara,Kolhapur</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                Hotel Kiyara, Kolhapur is a 3 Star property and is in close proximity to Mahalaxmi Temple and
                                Rankala Lake Kolhapur Railway Station (2.4 km), Kolhapur Airport (10.0 km) and 2.5 Km from Bus
                                Stand. The hotel offers facilities like, doctor on call, laundry service, 24 hour concierge, 24
                                hours power back-up, air conditioning, parking, travel and transfers and car rental service. The
                                hotel makes arrangements for kitty parties and birthday parties on request. Guests can also avail
                                extra mattress on request. The hotel features comfortable rooms with amenities like television,
                                telephone, newspaper, room service, air conditioning, Wi-Fi internet access, shower, bath tub, hot
                                and cold water and attached bathroom with essential toiletries. In house multi-cuisine restaurants
                                serve sumptuous delicacies to pamper food lovers. It offers conference hall, meeting facilities,
                                conference facilities and banqueting facilities for social and corporate gatherings with an adequate
                                seating arrangement. Enjoy your stay at Hotel Kiyara Kolhapur!
                            </div>
                            {/* <!-- Footer Modal --> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Booking Modal  --> */}
                <div>
                    <div class="modal fade" id="modalbook">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                {/* <!-- Header modal --> */}
                                <div class="modal-header">
                                    <h5>Bookig Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                {/* <!-- Body Modal --> */}
                                <div class="modal-body">
                                    Hotel is Booked!! Go there and Sleep Do nothing If they tell to do anything then do it

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
