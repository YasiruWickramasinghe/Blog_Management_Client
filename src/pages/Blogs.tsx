function Blogs() {

    return (
        <>
            <h1 className="text-center">BLOGS PAGE</h1>
            <br/>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">Publish</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Harry Potter</td>
                            <td>Yasiru</td>
                            <td>1987</td>
                            <td>SHOW</td>
                            <td>UPDATE</td>
                            <td>DELETE</td>
                        </tr>
                    </tbody>
                </table>
        </>
    )
}

export default Blogs