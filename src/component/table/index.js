import React, {Component} from 'react'
import './table.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //  <button className={data.id} itemID={data.id} id="editButton"
    //                         // onClick={this.handleEdit}
    //                     >Edit
    //                     </button>

    renderHeaderTable = () => {
        const {headerName} = this.props
        return headerName.map((header, index) => {
            return (
                <th>{header}</th>
            )
        })
    }

    // <td className="cell num">{index + 1}</td>
    // <td className="cell">{data.name}</td>
    // <td className="cell">{data.nim}</td>
    // <td className="cell">{data.dept}</td>
    // <td className="cell">{data.strata}</td>

    renderCellTable = data => {
        const cellArr = Object.keys(data)
        return cellArr.map((key, index) => {

            if(key==="clickEvent") {
                const clickArr = Object.keys(data[key])
                const button = clickArr.map((key2,index)=> {
                    return <button onClick={data[key][key2]}></button>
                })
                return (
                    <td key={index} className="cell">
                        {button}
                    </td>
                )               
            }

            return (
                <td key={index} className="cell">{data[key]}</td>
            )
        })
    }

    renderBodyTable = () => {
        const {dataList} = this.props
        return dataList.map((data, index) => {
            return (
                <tr key={index}>
                    <td className="cell num">{index + 1}</td>
                     {/* <td className="cell num">{index + 1}</td>
                    <td className="cell">{data.name}</td>
                    <td className="cell">{data.nim}</td>
                    <td className="cell">{data.dept}</td>
                    <td className="cell">{data.strata}</td> */}
                   {this.renderCellTable(data)}
                </tr>
            )
        })
    }

    

    render() {
        return (
            <>
                <table className="customers-list" width="80%">
                    <thead>
                    {this.renderHeaderTable()}
                    {/* <th>No</th>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Jurusan</th>
                    <th>Strata</th> */}
                    </thead>

                    <tbody>
                    {this.renderBodyTable()}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Table;