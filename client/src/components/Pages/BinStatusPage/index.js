import React from "react";
import BinStatusBar from "../../BinStatusBar";



class BinStatusPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Bin Status Page</h1>
        <BinStatusBar 
          binName = "Bin 0001" 
          binLocation = "Donald Bren Hall, Floor 1" 
          binStatus = "Full"
          binWeight = "70 lbs"
          binSpec = "1.5ft*1.5ft*4ft"
          binPercentage = "56"
          />

        <BinStatusBar 
          binName = "Bin 0002" 
          binLocation = "Donald Bren Hall, Floor 1" 
          binStatus = "Full"
          binWeight = "70 lbs"
          binSpec = "1.5ft * 1.5ft * 4ft"
          binPercentage = "42"
          />

        <BinStatusBar 
          binName = "Bin 0003" 
          binLocation = "Donald Bren Hall, Floor 1" 
          binStatus = "Full"
          binWeight = "70 lbs"
          binSpec = "1.5ft*1.5ft*4ft"
          binPercentage = "69"
          />

        <BinStatusBar 
          binName = "Bin 0001" 
          binLocation = "Donald Bren Hall, Floor 1" 
          binStatus = "Full"
          binWeight = "70 lbs"
          binSpec = "1.5ft*1.5ft*4ft"
          binPercentage = "95"
          />

        <BinStatusBar 
          binName = "Bin 0001" 
          binLocation = "Donald Bren Hall, Floor 1" 
          binStatus = "Full"
          binWeight = "70 lbs"
          binSpec = "1.5ft*1.5ft*4ft"
          binPercentage = "56"
          />

        <BinStatusBar 
          binName = "Bin 0002" 
          binLocation = "Donald Bren Hall, Floor 1" 
          binStatus = "Full"
          binWeight = "70 lbs"
          binSpec = "1.5ft * 1.5ft * 4ft"
          binPercentage = "70"
          />

        <BinStatusBar 
          binName = "Bin 0003" 
          binLocation = "Donald Bren Hall, Floor 1" 
          binStatus = "Full"
          binWeight = "70 lbs"
          binSpec = "1.5ft*1.5ft*4ft"
          binPercentage = "100"
          />

        <BinStatusBar 
          binName = "Bin 0001" 
          binLocation = "Donald Bren Hall, Floor 1" 
          binStatus = "Full"
          binWeight = "70 lbs"
          binSpec = "1.5ft*1.5ft*4ft"
          binPercentage = "81"
          />
        


      </div>
    )
  }
}

export default BinStatusPage;