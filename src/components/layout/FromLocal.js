import React from 'react'


var rows = [];

var Hid;
if (JSON.parse(localStorage.getItem('Highestid'))) {
    Hid = JSON.parse(localStorage.getItem('Highestid'))
}

if (Hid) {
    for (var i = 1; i < Number(Hid); i++) {
        var viData = JSON.parse(localStorage.getItem(i.toString()));
        rows.push(viData);
    }
}

function FromLocal() {
    return (
        <div> <h2 className="text-center" style={{color: "white"}}>List of Visitors</h2>
            {
                rows.length ?
                (   
                    <table className="table table-dark table-striped mb-3">
                      <thead>
                        <tr>
                            <th >#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Type</th>
                            <th scope="col">Person</th>
                            <th scope="col">Date</th>
                            <th scope="col">Photo</th>        
                            <th scope="col">Entry time</th>
                            <th scope="col">Exit time</th>
                        </tr>
                      </thead>
                            {
                                rows.map(row1 => {
                                    return (
                                        row1 ? (
                                        <tbody key={Math.random()}>
                                            <tr>
                                                <th scope="row">{row1.id }</th>
                                                <td>{row1.name}</td>
                                                <td>{row1.email}</td>
                                                <td>{row1.tvisit}</td>
                                                <td>{row1.person }</td>
                                                <td>{row1.date}</td>
                                                <td><img src={row1.file} alt = '' /></td>
                                               <td>{row1.entrytime}</td>
                                                <td>{row1.exittime}</td>    
                                            </tr>
                                        </tbody> ) : (<tbody key={Math.random}><tr><td>Nothing else</td></tr></tbody>)
                                    )
                                })
                            }
                    
                    </table>
                  ) : <h4 className="text-center"> Nothing to show</h4>       
            }
       </div>
        
    )
}
export default FromLocal
