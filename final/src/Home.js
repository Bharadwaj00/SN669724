import React, {useEffect, useState} from "react";
import axios from 'axios';

function Home() {
const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


    return (
        <div className="main mt-5 my-sm-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card-img">
                          <img src="img/300.png" className="img-thumbnail" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-9 content-section">
                        <div className="card-title">
                            <h1 className="fw-semibold text-md-start text-lg-start">James Smith</h1>
                            <p className=" fs-6">Lorem ipsum issimply dummy text of the typesetting industry .Lorem ipsum has been the industry's
                            standard dummy text ever since the 1500s,when an unknown printer took a galler of type
                            and scrambled it to make a type specimen book .it has survived not only five centuries,
                            but also the leap into electonic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>
		
            <div className="container mt-5">
                <div className="row">
                  <div className="col">
                  	
    <div className="app">
    	<h2>Check weather </h2>
      <div className="search mt-3 mb-3">
        <input
          value={location}
          className="form-control"
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container p-0">
        <div className="top">
          <div className="location mb-5 mt-5">
            <h3>{data.name}</h3>
          </div>
          <div className="temp mt-5">
            {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="description mb-5">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels common_div">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <h4>Feels Like</h4>
            </div>
            <div className="humidity common_div">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <h4>Humidity</h4>
            </div>
            <div className="wind common_div">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <h4>Wind Speed</h4>
            </div>
          </div>
        }



      </div>
    </div>
                  </div>
                </div>
            </div>

            
        </div>
    )
}

export default Home;
