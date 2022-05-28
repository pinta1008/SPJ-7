import React from 'react'
import { Link } from 'react-router-dom'

const SearchTable = ({ data }) => {

    return (
        <table className='table'>
            <tbody>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Naziv</th>
                    <th scope='col'>Proizvodac</th>
                    <th scope='col'>Model</th>
                    <th scope='col'>Cijena</th>
                    <th scope='col'>Količina</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.Id}>
                        <td>{item.Id}</td>
                        <td><Link to={`/${item.Id}`} key={item.Id}>{item.Naziv}</Link></td>
                        <td>{item.Proizvodac}</td>
                        <td>{item.Model}</td>
                        <td>{item.Cijena}</td>
                        <td>{item.Kolicina}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SearchTable