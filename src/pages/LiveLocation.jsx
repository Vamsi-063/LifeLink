import React, { useRef, useState } from "react";


function LiveLocation() {


  const [location,setLocation] = useState(null);

  const [tracking,setTracking] = useState(false);


  const watchId = useRef(null);



  const startTracking = ()=>{


    if(!navigator.geolocation){

      alert("Geolocation is not supported");

      return;

    }



    setTracking(true);



    watchId.current = navigator.geolocation.watchPosition(

      (position)=>{


        setLocation({

          latitude: position.coords.latitude,

          longitude: position.coords.longitude

        });


      },


      ()=>{

        alert("Unable to access location");

      },


      {

        enableHighAccuracy:true

      }

    );


  };




  const stopTracking = ()=>{


    if(watchId.current !== null){

      navigator.geolocation.clearWatch(
        watchId.current
      );

    }


    setTracking(false);

  };




  return (

    <section className="location-page">


      <div className="container">


        <h1>
          Live Location Tracking
        </h1>



        <div className="location-card">


          <p>
            Track your live location during emergency situations.
          </p>



          {
            location ? (

              <div className="location-details">

                <h3>
                  Your Current Location
                </h3>

                <p>
                  Latitude: {location.latitude}
                </p>

                <p>
                  Longitude: {location.longitude}
                </p>

              </div>

            )

            :

            (

              <p>
                Location not available
              </p>

            )
          }



          <div className="location-buttons">


            <button

              className="start-btn"

              onClick={startTracking}

            >

              Start Tracking

            </button>




            <button

              className="stop-btn"

              onClick={stopTracking}

            >

              Stop Tracking

            </button>


          </div>



        </div>


      </div>


    </section>

  );

}


export default LiveLocation;