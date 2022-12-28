import React, { Component } from 'react'


export default class Card extends Component {
  
  render() {
    return (
      <div style={{backgroundColor:'aliceblue',color:'black'}}>
        <h3>{this.props.item?.  dt_txt}</h3>
        <h4>{'пасмурно'===this.props.item?.weather[0].description? 
          <div>
          <img src="data:image/png;base64,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" alt=""  style={{display: 'block'}}/>
          </div>
          :this.props.item?.weather[0].description}
          </h4>
          
        <h4>{'небольшой снег'===this.props.item?.weather[0].description? 
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/1291/1291679.png" alt=""  style={{width:'150px'}}/> 
        </div>
        :this.props.item?.weather[0].description}
        </h4>

          <h4>{'облачно с прояснениями'=== <div><img src="https://i.pinimg.com/736x/ce/b6/70/ceb67098a0d6a7f6d95fb06c26168901.jpg" alt=""  style={{width:'150px'}}/> </div>}
          </h4>
          
          <h4>{'переменная облачность'===<div><img src="https://cdn-icons-png.flaticon.com/512/4150/4150819.png" alt=""  style={{width:'150px'}}/></div>}

          </h4>
          <h4>{'ясно'=== <div><img src="https://www.clipartmax.com/png/small/129-1293911_weather-icons-stock-vector-sunshine-weather-icon-transparent.png" alt=""  style={{width:'150px'}}/> </div>}
          </h4>

        <h4>{Math.ceil(this.props.item?.main.temp -273.15)}°C</h4>
      </div>
    )
  }
}
