import React, { Component } from "react"
import { Input, Button, Table } from 'semantic-ui-react'
import { MyButton } from './MyButton'

export class InputTable extends Component {
  constructor(props) {
    super(props)
    this.state = { fileName: "", newOne: ""}
    this.refFileInput = React.createRef()
  }

  loadFile = () => {
    this.props.onItemsChange([])
    const reader = new FileReader()
    reader.onload = () => {
      for (let line of reader.result.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/))
        if (line.split(";")[0] !== "")
          this.props.onItemsChange([...this.props.items, line.split(";")[0]])
    }
    reader.readAsText(this.refFileInput.current.files[0])
  }

  loadGBKFile = () => {
    this.props.onItemsChange([])
    const reader = new FileReader()
    reader.onload = () => {
      const bytes = reader.result
      const gbkDecoder = new TextDecoder('gbk')
      const string = gbkDecoder.decode(bytes)
      for (let line of string.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/))
        if (line.split(";")[0] !== "")
          this.props.onItemsChange([...this.props.items, line.split(";")[0]])
    }
    reader.readAsArrayBuffer(this.refFileInput.current.files[0])
  }

  addNewOne = () => {
    if (this.state.newOne !== "" && !this.props.items.includes(this.state.newOne)) {
      this.props.onItemsChange([...this.props.items, this.state.newOne])
      this.setState({ newOne: "" })
    }
  }

  render = () => <Table compact="very">
    <Table.Header><Table.Row>
      <Table.HeaderCell>
        <input ref={this.refFileInput} type="file" accept="text/plain" style={{ display: "none" }} onChange={(event) => this.setState({ fileName: event.target.files[0].name })} />
        <Input fluid readOnly placeholder={this.props.kind[0].toUpperCase() + this.props.kind.slice(1) + " file"} value={this.state.fileName} onClick={() => this.refFileInput.current.click()} />
      </Table.HeaderCell>
      <Table.HeaderCell>
        <MyButton positive fluid onClick={this.loadFile} disabled={this.state.fileName === ""}>{"Load " + this.props.kind + " file"}</MyButton>
      </Table.HeaderCell>
      <Table.HeaderCell collapsing>
        <MyButton positive fluid onClick={this.loadGBKFile} disabled={this.state.fileName === ""}>{"Load GBK " + this.props.kind + " file"}</MyButton>
      </Table.HeaderCell>
    </Table.Row></Table.Header>
    <Table.Body>
      {this.props.items.map((item, index) => <Table.Row key={index}>
        <Table.Cell>
          <Input fluid value={item} onChange={(event) => this.props.onItemsChange([...this.props.items.slice(0, index), event.target.value, ...this.props.items.slice(index + 1)])}/>
        </Table.Cell>
        <Table.Cell>
          <Button.Group>
            <MyButton icon="angle double up" onClick={() => this.props.onItemsChange([this.props.items[index], ...this.props.items.slice(0, index), ...this.props.items.slice(index + 1)])} disabled={index === 0}/>
            <MyButton icon="angle up" onClick={() => this.props.onItemsChange([...this.props.items.slice(0, index - 1), this.props.items[index], this.props.items[index - 1], ...this.props.items.slice(index + 1)])} disabled={index === 0}/>
            <MyButton icon="angle down" onClick={() => this.props.onItemsChange([...this.props.items.slice(0, index), this.props.items[index + 1], this.props.items[index], ...this.props.items.slice(index + 2)])} disabled={index === this.props.items.length - 1}/>
            <MyButton icon="angle double down" onClick={() => this.props.onItemsChange([...this.props.items.slice(0, index), ...this.props.items.slice(index + 1), this.props.items[index]])} disabled={index === this.props.items.length - 1}/>
          </Button.Group>
        </Table.Cell>
        <Table.Cell>
          <MyButton negative fluid onClick={() => this.props.onItemsChange([...this.props.items.slice(0, index), ...this.props.items.slice(index + 1)])}>Remove</MyButton>
        </Table.Cell>
      </Table.Row>)}
    </Table.Body>
    <Table.Footer><Table.Row>
      <Table.HeaderCell>
        <Input fluid placeholder={"New " + this.props.kind} value={this.state.newOne} onChange={(event) => this.setState({ newOne: event.target.value })}/>
      </Table.HeaderCell>
      <Table.HeaderCell collapsing>
        <MyButton positive fluid onClick={this.addNewOne} disabled={this.state.newOne === ""}>{"Add new " + this.props.kind}</MyButton>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <MyButton negative fluid onClick={() => this.props.onItemsChange([])} disabled={this.props.items.length === 0}>Remove all</MyButton>
      </Table.HeaderCell>
    </Table.Row></Table.Footer>
  </Table>
}