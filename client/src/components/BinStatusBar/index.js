import React from "react";
import {Collapse, Row, Col, Progress} from 'antd';
import { DownCircleFilled } from '@ant-design/icons';


const {Panel} = Collapse;

function callback(key){
	console.log(key)
}


function renderAdditionalDetails(status, weight, spec)
{
	return(
		<div>
			<div>BIN STATUS: <span id = "binStatusPage-binDetails">{status}</span> </div>
			<div>CURRENT WEIGHT: <span id = "binStatusPage-binDetails">{weight}</span> </div>
			<div>BIN SPEC: <span id = "binStatusPage-binDetails">{spec}</span></div>
			
			
		</div>
	);
}

function ColorSelector(percent){
	const colorr = "red";

	if (percent > 80)
	{
		return "#DCFD92";
	}
	else if(50 < percent){

		return "#52CEFF";
	}
	else if(percent < 50){
		return "#9B4638";
	}
}

function renderHead(name, location, percentage){
	const colorr = "green";
	if (percentage == 100){
		return(
			<div>
		
				<span id = "binStatusPage-binDetails-display"><DownCircleFilled id = "binStatusPage-circularIcon" style={{color:colorr}}/>
				 {name} ( {location} )
				</span>
				 <span id = "binStatusPage-percentage-display">FULL</span>
				<div id="binStatusPage-progressBar">
					<Progress id = "binStatusPage-pB" 
						percent={percentage} 
						showInfo={false} 
						strokeColor={ColorSelector(percentage)} 
						trailColor="white" />
				</div>
			</div>
	
		);
	}
	else{
	return(
		<div>
			
			<span id = "binStatusPage-binDetails-display"><DownCircleFilled id = "binStatusPage-circularIcon" style={{color:colorr}}/> {name} ( {location} )</span>
			 <span id = "binStatusPage-percentage-display">{percentage}%</span>
			<div id="binStatusPage-progressBar">
				<Progress id = "binStatusPage-pB" 
					percent={percentage} 
					showInfo={false} 
					strokeColor={ColorSelector(percentage)} 
					trailColor="white" />
			</div>
		</div>

	);
	}
}

class BinStatusBar extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			binName: props.binName,
			binLocation: props.binLocation,
			binStatus: props.binStatus,
			binWeight: props.binWeight,
			binSpec: props.binSpec,
			binPercentage: props.binPercentage,
			collapsed:false,
			
		}
	}

	render(){
		return(
			<div>
				<Col span = {14} id = "BinStatusPage-binstatusBars-column">
					<Collapse 
					  bordered = {true} 
					   defaultActiveKey={[]} 
					   onChange={callback()}
					   >
          				<Panel id = "binStatusPage-card"  showArrow={false}  header = {renderHead(this.state.binName, this.state.binLocation, this.state.binPercentage)}  key = "1">
            				<p>
								{renderAdditionalDetails(this.state.binStatus, this.state.binWeight, this.state.binSpec)}
							</p>
          				</Panel>
          			</Collapse>
        		</Col>
			</div>

		);
	}
}

export default BinStatusBar;