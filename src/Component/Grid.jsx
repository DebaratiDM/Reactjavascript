import Table from "react-bootstrap/Table";

function Grid() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Debarati</td>
          <td>Das</td>
          <td>debarati84430@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Shuvradeb</td>
          <td>mondal</td>
          <td>deepbratt@gmail.com</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Grid;
