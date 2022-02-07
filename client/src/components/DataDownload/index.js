import React from 'react'
import { message, Dropdown, Menu, Button, Icon } from 'antd'
import PDFMenu from './PDFMenu'
import CSVMenu from './CSVMenu'
import GeneratePDF from './PDFGenerator'

function getDate() {
  var today = new Date()
  var day =
    today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear()
  return day
}

function getTime() {
  var today = new Date()
  var hours = today.getHours() % 12
  var minutes = today.getMinutes()
  var time =
    (hours ? hours : 12) +
    ':' +
    (minutes < 10 ? '0' + minutes : minutes) +
    (today.getHours() >= 12 ? ' PM' : ' AM')
  return time
}

class DataDownload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pdfVisible: false,
      pdfHistoricalCheckedVals: [],
      pdfName: 'Peter Anteater',
      pdfTempName: 'Peter Anteater',
      avgDisposalCombined: false,
      avgDisposalType: false,
      disposalPercent: false,
      disposalTotal: false,
      divergenceRate: false,
      tempavgDisposalCombined: false,
      tempavgDisposalType: false,
      tempdisposalPercent: false,
      tempdisposalTotal: false,
      tempdivergenceRate: false,
      currentTime: getTime(),
      currentDate: getDate(),
      pdfTime: [
        new Date(Date.now() - 3600000 - 28800000).toISOString(),
        new Date(Date.now() - 28800000).toISOString(),
      ],
      temppdfTime: [
        new Date(Date.now() - 3600000 - 28800000).toISOString(),
        new Date(Date.now() - 28800000).toISOString(),
      ],
      csvVisible: false,
      csvTime: [
        new Date(Date.now() - 3600000 - 28800000).toISOString(),
        new Date(Date.now() - 28800000).toISOString(),
      ],
      csvBinID: 'ZBin7',
    }

    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.menu = (
      <Menu>
        <Menu.Item key="1" onClick={this.handleMenuClick}>
          <Icon type="file-excel" />
          <span> CSV</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={this.handleMenuClick}>
          <Icon type="file-pdf" />
          <span> PDF</span>
        </Menu.Item>
      </Menu>
    )

    this.handlePDFCancel = this.handlePDFCancel.bind(this)
    this.handlePDFOk = this.handlePDFOk.bind(this)
    this.handlePDFHistoricalSelections = this.handlePDFHistoricalSelections.bind(
      this
    )
    this.handlePDFTimeChanges = this.handlePDFTimeChanges.bind(this)
    this.updatePDFTimeChanges = this.updatePDFTimeChanges.bind(this)
    this.handlePDFNameChanges = this.handlePDFNameChanges.bind(this)
    this.updatePDFNameChanges = this.updatePDFNameChanges.bind(this)
    this.updateCurrentTime = this.updateCurrentTime.bind(this)
    this.resetValues = this.resetValues.bind(this)
    this.makePDF = this.makePDF.bind(this)

    this.handleCSVTimeChanges = this.handleCSVTimeChanges.bind(this)
    this.handleCSVCancel = this.handleCSVCancel.bind(this)
    this.handleCSVOk = this.handleCSVOk.bind(this)
    this.handleCSVBinIDChanges = this.handleCSVBinIDChanges.bind(this)
  }

  handleMenuClick({ key }) {
    if (key == 1) {
      this.setState({
        csvVisible: true,
      })
    }
    if (key == 2) {
      this.setState({
        pdfVisible: true,
      })
    }
  }

  makePDF() {
    return (
      <GeneratePDF
        name={this.state.pdfName}
        time={this.state.pdfTime}
        avgDisposalCombined={this.state.avgDisposalCombined}
        avgDisposalType={this.state.avgDisposalType}
        disposalPercent={this.state.disposalPercent}
        disposalTotal={this.state.disposalTotal}
        divergenceRate={this.state.divergenceRate}
        currentDate={this.state.currentDate}
        currentTime={this.state.currentTime}
      />
    )
  }

  updateCurrentTime() {
    this.setState({
      currentDate: getDate(),
      currentTime: getTime(),
    })
  }

  handlePDFOk() {
    this.setState({
      avgDisposalCombined: this.state.tempavgDisposalCombined,
      avgDisposalType: this.state.tempavgDisposalType,
      disposalPercent: this.state.tempdisposalPercent,
      disposalTotal: this.state.tempdisposalTotal,
      divergenceRate: this.state.tempdivergenceRate,
    })
    this.updatePDFNameChanges()
    this.updatePDFTimeChanges()
    this.updateCurrentTime()
  }

  handlePDFCancel() {
    this.setState({
      pdfVisible: false,
      pdfHistoricalCheckedVals: [],
      pdfName: 'Peter Anteater',
      pdfTempName: 'Peter Anteater',
      avgDisposalCombined: false,
      avgDisposalType: false,
      disposalPercent: false,
      disposalTotal: false,
      divergenceRate: false,
      tempavgDisposalCombined: false,
      tempavgDisposalType: false,
      tempdisposalPercent: false,
      tempdisposalTotal: false,
      tempdivergenceRate: false,
      currentTime: getTime(),
      currentDate: getDate(),
      pdfTime: [
        new Date(Date.now() - 3600000 - 28800000).toISOString(),
        new Date(Date.now() - 28800000).toISOString(),
      ],
      temppdfTime: [
        new Date(Date.now() - 3600000 - 28800000).toISOString(),
        new Date(Date.now() - 28800000).toISOString(),
      ],
    })
  }

  resetValues() {
    this.setState({
      tempavgDisposalCombined: false,
      tempavgDisposalType: false,
      tempdisposalPercent: false,
      tempdisposalTotal: false,
      tempdivergenceRate: false,
    })
  }

  handlePDFHistoricalSelections(tempPDFCheckedVals) {
    this.resetValues()
    var arr = tempPDFCheckedVals
    arr.forEach((a) => {
      if (a === 'avgDisposalCombined') {
        this.setState({ tempavgDisposalCombined: true })
      }
      if (a === 'avgDisposalType') {
        this.setState({ tempavgDisposalType: true })
      }
      if (a === 'disposalPercent') {
        this.setState({ tempdisposalPercent: true })
      }
      if (a === 'disposalTotal') {
        this.setState({ tempdisposalTotal: true })
      }
      if (a === 'divergenceRate') {
        this.setState({ tempdivergenceRate: true })
      }
    })
    console.log('chosen historical options = ', tempPDFCheckedVals)
    console.log('avgDisposalCombined = ', this.state.avgDisposalCombined)
    console.log('avgDisposalType = ', this.state.avgDisposalType)
    console.log('disposalPercent = ', this.state.disposalPercent)
    console.log('disposalTotal = ', this.state.disposalTotal)
    console.log('divergenceRate = ', this.state.divergenceRate)
  }

  handlePDFTimeChanges(i) {
    this.setState({
      temppdfTime: i,
    })
    console.log('chosen PDF time frame = ', i)
  }

  updatePDFTimeChanges() {
    this.setState({
      pdfTime: this.state.temppdfTime,
    })
  }

  handlePDFNameChanges(i) {
    this.setState({
      pdfTempName: i.target.value,
    })
    console.log('chosen PDF Name = ', i.target.value)
  }

  updatePDFNameChanges() {
    this.setState({
      pdfName: this.state.pdfTempName,
    })
  }

  /*########################################################*/

  handleCSVOk() {
    this.handleCSVCancel()
    //generates CSV file here
    this.props.getCSV(this.state.csvTime, this.state.csvBinID)
    message.success('CSV file has been downloaded.', 2.5)
  }

  handleCSVCancel() {
    this.setState({
      csvVisible: false,
    })
  }

  handleCSVTimeChanges(i) {
    this.setState({
      csvTime: i,
    })
    console.log('chosen CSV time frame = ', i)
  }

  handleCSVBinIDChanges(i) {
    this.setState({
      csvBinID: i,
    })
    console.log('chosen CSV bin ID = ', i)
  }

  render() {
    return (
      <>
        <Dropdown overlay={this.menu}>
          <Button type="primary" size="large">
            Export
            <Icon type="download" />
          </Button>
        </Dropdown>
        <PDFMenu
          visible={this.state.pdfVisible}
          handleCancel={this.handlePDFCancel}
          handleOk={this.handlePDFOk}
          handlePDFHistoricalSelections={this.handlePDFHistoricalSelections}
          handlePDFTimeChanges={this.handlePDFTimeChanges}
          handleNameChange={this.handlePDFNameChanges}
          makePDF={this.makePDF}
        />
        <CSVMenu
          visible={this.state.csvVisible}
          handleCancel={this.handleCSVCancel}
          handleOk={this.handleCSVOk}
          handleCSVTimeChanges={this.handleCSVTimeChanges}
          handleCSVBinIDChanges={this.handleCSVBinIDChanges}
        />
      </>
    )
  }
}

export default DataDownload
