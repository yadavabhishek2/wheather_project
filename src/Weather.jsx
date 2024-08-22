import { useRef, useState } from "react";

function Weather() {

    const [cityName,setCity] = useState("")
    const [weather, setWeather] = useState({});
    const useDom = useRef("")
    const secDom = useRef("")

    function handleChange(e){
        setCity(e.target.value)
    }

    function handleSearch(){
        const apiKey = "e0a80fae296e10a45224a590953326f7"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric` 


        if(cityName){
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data)=> {
                console.log(data)
                if(data.message==="city not found"){
                    useDom.current.style.border = "1px solid red"
                    secDom.current.innerText = "City Not Found. Please Try Again."
                    secDom.current.style.color = "red"
                    setWeather("")
                }else{
                    setWeather(data)
                    useDom.current.style.border = "1px solid white"
                    secDom.current.innerText ="" 
                }
            })
            .catch((error)=>{
                console.error("There was a problem with fetch operation",error);
            })
            useDom.current.style.border = "1px solid white"
            secDom.current.innerText =""
           
        }
        else{
          useDom.current.style.border = "1px solid red"
          secDom.current.innerText ="please enter city name"
          secDom.current.style.color = "red"
          setWeather("")
          
        }
    }

//this function as same as upper function but functionality is press enter to get data.
    function handleKeyDown(e){
        if(e.key === "Enter"){
            const apiKey = "e0a80fae296e10a45224a590953326f7"
             const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric` 


        if(cityName){
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data)=> {
                console.log(data)
                if(data.message==="city not found"){
                    useDom.current.style.border = "1px solid red"
                    secDom.current.innerText = "City Not Found. Please Try Again."
                    secDom.current.style.color = "red"
                    setWeather("")
                }else{
                    setWeather(data)
                    useDom.current.style.border = "1px solid white"
                    secDom.current.innerText ="" 
                }
            })
            .catch((error)=>{
                console.error("There was a problem with fetch operation",error);
            })
            
        }
        else{
          useDom.current.style.border = "1px solid red"
          secDom.current.innerText ="Please Enter City Name"
          secDom.current.style.color = "red"
          setWeather("")
          
        }
        }
    }



    return ( 
        <>
            <div className="bg-image bg-cover h-screen bg-no-repeat flex justify-center items-center ">  
                <div className="w-3/5 h-4/5 rounded-lg flex bg-[#ffffff66] max-[1000px]:flex-col-reverse max-[1000px]:w-full max-[1000px]:h-1/2 ">
                {/* left div */}
                    <div className="bg-imagetwo bg-cover bg-no-repeat h-full rounded-l-lg w-1/2 bg-left  flex flex-col justify-between ">
                        <div className="flex justify-end m-4">
                            <p className="font-bold text-2xl">
                                {weather.name && weather.name}{" "}
                                {weather.sys && weather.sys.country}
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img src={`https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`}
                                alt=""
                                className="rounded-full bg-[#ffffff85] w-2/5"
                            />
                        </div>
                        <div className="flex justify-between m-4">
                            <div className="font-bold text-xl text-gray-200">
                                <p>{weather.coord && weather.coord.lon}</p>
                                <p>{weather.coord && weather.coord.lat}</p>
                            </div>
                            <div className="font-bold text-2xl text-gray-200">
                                <p>{weather.main && weather.main.temp}°C</p>
                            </div>
                        </div>
                    </div>
                  {/* right div   */}
                    <div className="h-full w-1/2">
                            <div className="h-1/5 flex justify-center items-center border-b border-gray-300 m-4">
                            <img src={`https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`}
                                alt=""
                                className="rounded-full bg-[#ffffff85] w-20"
                            />
                            </div>

                            <div className="flex border border-gray-200 rounded-lg w-3/5 mx-auto "  ref={useDom}>
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="bg-transparent outline-none text-white placeholder-white px-2 py-1"
                                    onChange={handleChange}
                                    value={cityName}
                                    onKeyDown={handleKeyDown}
                                   
                                />

                                <span 
                                    className="material-symbols-outlined text-xl cursor-pointer text-white bg-black rounded-full p-1"
                                    onClick={handleSearch}
                                >
                                Search
                                </span>
                               
                            </div>
                            <div className="flex justify-center">
                            <p ref={secDom}></p>
                            </div>

                            {weather.name &&(
                            <div className="text-center text-white font-semibold my-5">
                            
                                <p>
                                    {weather.name}, {weather.sys && weather.sys.country}
                                </p>
                                <p>
                                    {weather.weather && weather.weather[0].description}
                                </p>
                            </div>)}

                            {weather.main && (
                            <>
                                <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                                <p>Temp</p>
                                <p>{weather.main && weather.main.temp}°C</p>
                                </div>

                                <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                                <p>Visibility</p>
                                <p>{weather.visibility && weather.visibility / 1000}Km</p>
                                </div>

                                <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                                <p>Wind Speed</p>
                                <p>{weather.wind && weather.wind.speed}meter/sec</p>
                                </div>
                            </>)}
                    </div>
                </div>
            </div>
        </>
     );     
}

export default Weather;