import React from "react";
import flightsGetApi from "../../../customHooks/flightsGetApi";
import ChevronIcon from "../../icons/ChevronIcon"

function Flights() {
    const [data, isActive] = flightsGetApi();
    console.log(data);


    return (
        <div>
            {isActive ? (
                <section className="fligts">
                    <div className="fligts-departures-container">
                        <div className="fligts-header">
                            <h1 className="title">Find a departing flight</h1>
                            <ChevronIcon />
                            <div className="fligts-form">
                                <select name="day-select" id="day-select" aria-label="Select a day:" defaultValue={"Today"}>
                                    <option value="2023-11-29">Yesterday</option>
                                    <option value="2023-11-30">Today</option>
                                    <option value="2023-12-01">Tomorrow</option>
                                    <option value="2023-12-02">2 December</option>
                                </select>
                                <div className="search-input">
                                    <input type="text" placeholder="Enter destination, flight number or airline" />
                                    <button className="fa-solid fa-magnifying-glass" type="submit">
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="fligts-selection">
                            <div className="departures-section active">
                                Departures
                            </div>
                            <div className="arrivals-section">
                                Arrivals
                            </div>
                        </div>
                    </div>
                    <div className="fligts-article-container">
                        <div className="fligts-cards">
                            <div className="flights-prev-button">
                                <span>Show earlier flights</span>
                                <svg aria-hidden="true" className="rw-icon rw-icon--arrow-up" width={24} height={24} viewBox="-5 0 24 24">
                                    <path fill="#1b60db" d="M6.3 12l1.5 1.4 3.2-3.2V18h2v-7.8l3.2 3.2 1.5-1.4L12 6.3 6.3 12z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flights-cards-container">
                                <div className="flights-day">
                                    <h3 className="flights-daybreak">Today, 1 December</h3>
                                </div>
                                <div className="flights-card">
                                    <div className="card-article">
                                        <div className="article">
                                            <div className="card-time">
                                                <b className="time-scheduled active">15:50</b>
                                                <b className="time-delayed">16:05</b>
                                            </div>
                                            <div className="card-name">
                                                <p className="card-flight-airport">Edinburgh (EDI)</p>
                                                <span className="card-flight-number">KL 1285 KLM</span>
                                                <span className="detail">
                                                    <span className="rw-icon-link__text">
                                                        Details
                                                    </span>
                                                    <svg aria-hidden="true" width={24} height={24} viewBox="0 0 24 24"><path fill="#1b60db" d="M12 6.3l-1.4 1.5 3.2 3.2H6v2h7.8l-3.2 3.2 1.4 1.5 5.7-5.7L12 6.3z" /></svg>
                                                </span>
                                            </div>
                                            <div className="card-gate-state">
                                                <p className="blue">GATE OPEN</p>
                                            </div>
                                        </div>
                                        <div className="similer-code active">
                                            <p>
                                                Also known as:
                                                <span>DL 9634</span>
                                                <span>EY 7289</span>
                                                <span>G3 5526</span>
                                                <span>VS 6968</span>
                                                <span>MF 9677</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flights-next-button">
                                <span>Show later flights</span>
                                <svg aria-hidden="true" className="rw-icon rw-icon--arrow-up" width={24} height={24} viewBox="5 1 24 24" style={{ transform: 'rotate(180deg)' }}>
                                    <path fill="#1b60db" d="M6.3 12l1.5 1.4 3.2-3.2V18h2v-7.8l3.2 3.2 1.5-1.4L12 6.3 6.3 12z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Flights;
