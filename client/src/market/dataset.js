function DatasetComponent() {
    return(
        <div>

            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Asset</th>
                    <th scope="col">Market cap</th>
                    <th scope="col">Last price</th>
                    <th scope="col">24h change</th>
                </tr>
                </thead>
                <tbody>
                <tr className="table-active">
                    <th scope="row">AAPL</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>

                </tr>
                <tr>
                    <th scope="table-dark">AMZN</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                <tr className="table-dark">
                    <th scope="row">ETH-USD</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                <tr className="table-dark">
                    <th scope="row">META</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                <tr className="table-dark">
                    <th scope="row">NFLX</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                <tr className="table-dark">
                    <th scope="row">TSLA</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default DatasetComponent;