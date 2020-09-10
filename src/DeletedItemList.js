import React, { Component } from 'react'

export default class DeletedItemList extends Component {
  render() {
    const { deleted } = this.props
    const apple = deleted.map((data) => {
      return <div className="deletewrapper">{data.items}{data.time}</div>
    })
    return (
      <div>
        <h1 className="deletewrapper">Completed Items</h1>
        {apple}
      </div>
    )
  }
}
