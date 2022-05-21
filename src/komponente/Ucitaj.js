import axios from "axios";
import {useState, useEffect} from 'react';
import {Link, Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const readUrl = "http://localhost/react-lv7-php/read.php";
//const deleteUrl ="";
function Ucitaj()
{
    const[artikli, setArtikli] = useState([]);
    useEffect(() => {
        getArtikli()
    }, []);

    //const obrisiArtikl = (id) => {
        //if(window.confirm("Zelite li obirsati automobil s idjem:" + id))
   // }

    async function getArtikli(){
        try{
            const response = await axios.get(readUrl);
            setArtikli(response.data);
        }catch(error){
            console.error(error);
        }
    }
    return(
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Naziv</th>
                        <th scope="col">Proizvodac</th>
                        <th scope="col">Model</th>
                        <th scope="col">Cijena</th>
                        <th scope="col">Kolicina</th>
                    </tr>
                </thead>
                <tbody>
                    {artikli.map((artikl)=>{
                        return(<tr key = {artikl.Id}>
                            <td>{artikl.Id}</td>
                            <td>{artikl.Naziv}</td>
                            <td>{artikl.Proizvodac}</td>
                            <td>{artikl.Model}</td>
                            <td>{artikl.Cijena}</td>
                            <td>{artikl.Kolicina}</td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Ucitaj;