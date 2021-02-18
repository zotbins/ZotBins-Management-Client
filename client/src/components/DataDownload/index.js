import React from 'react'
import { message, Dropdown, Menu, Button, Icon } from 'antd'
import PDFMenu from './PDFMenu'
import CSVMenu from './CSVMenu'
import GeneratePDF from './PDFGenerator'
import { pdf } from '@react-pdf/renderer'

class DataDownload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pdfVisible: false,
      pdfHistoricalCheckedVals: [],
      pdfName: 'Peter Anteater',
      avgDisposalCombined: false,
      avgDisposalType: false,
      disposalPercent: false,
      disposalTotal: false,
      divergenceRate: false,
      pdfTime: [
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
    this.handlePDFNameChanges = this.handlePDFNameChanges.bind(this)
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
      />
    )
  }

  async handlePDFOk() {
    this.handlePDFCancel()
    //generates PDF file here
    const doc = this.makePDF()
    const asPdf = pdf([])
    asPdf.updateContainer(doc)
    const blob = await asPdf.toBlob()
    const pdfURL = URL.createObjectURL(blob)

    let a = document.createElement('a')
    a.href = pdfURL
    a.download =
      'data_' +
      this.state.pdfTime[0].substring(0, 10) +
      '(' +
      this.state.pdfTime[0].substring(11, 19) +
      ')_to_' +
      this.state.pdfTime[1].substring(0, 10) +
      '(' +
      this.state.pdfTime[1].substring(11, 19) +
      ')' +
      '.pdf'
    a.click()
    message.success('PDF file has been downloaded.', 2.5)
  }

  handlePDFCancel() {
    this.setState({
      pdfVisible: false,
    })
  }

  resetValues() {
    this.setState({
      avgDisposalCombined: false,
      avgDisposalType: false,
      disposalPercent: false,
      disposalTotal: false,
      divergenceRate: false,
    })
  }

  handlePDFHistoricalSelections(tempPDFCheckedVals) {
    this.resetValues()
    var arr = tempPDFCheckedVals
    arr.forEach((a) => {
      if (a === 'avgDisposalCombined') {
        this.setState({ avgDisposalCombined: true })
      }
      if (a === 'avgDisposalType') {
        this.setState({ avgDisposalType: true })
      }
      if (a === 'disposalPercent') {
        this.setState({ disposalPercent: true })
      }
      if (a === 'disposalTotal') {
        this.setState({ disposalTotal: true })
      }
      if (a === 'divergenceRate') {
        this.setState({ divergenceRate: true })
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
      pdfTime: i,
    })
    console.log('chosen PDF time frame = ', i)
  }

  handlePDFNameChanges(i) {
    this.setState({
      pdfName: i.target.value,
    })
    console.log('chosen PDF Name = ', i.target.value)
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
