import  React,{ Component } from 'react';
import { Table, Button } from 'reactstrap';

class AddressTable extends Component {
    render() {
        return (
            <Table striped>
                <thead>
                    <tr scope="row">
                        <th></th>
                        <th>Number</th>
                        <th>Address</th>
                        <th>Postcode</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.markers.map(marker => (
                        <tr key={marker.id} >
                            <th><Button color="danger"><i class="fas fa-trash-alt"></i></Button></th>
                            <td>{marker.id}</td>
                            <td>{marker.address}</td>
                            <td>{marker.postcode}</td>
                            <td>{marker.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    };
}

export default AddressTable;