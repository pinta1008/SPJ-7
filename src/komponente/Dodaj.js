import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dodaj(){
    const [] = useState({});
    let navigate = useNavigate();

    const dodajArtikl= (i,n,p,m,c,k)=>{
        var params = new URLSearchParams();
        params.append('Id', i);
        params.append('Naziv', n);
        params.append('Proizvodac', p);
        params.append('Model', m);
        params.append('Cijena', c);
        params.append('Kolicina', k);
        axios.post("http://localhost/react-lv7-php/add.php",params)
        .then((response)=>{navigate("/Ucitaj",{replace: true})});
    };
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        dodajArtikl(inputs.Id, inputs.Naziv, inputs.Proizvodac, inputs.Model,inputs.Cijena, inputs.Kolicina);
        alert(`${inputs.Id} ${inputs.Naziv} je dodan`);
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
   


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Unesite Id:
            <input
                type="number"
                name="Id"
                value={inputs.Id || ""}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>Unesite Naziv:
                <input
                type="text"
                name="Naziv"
                value={inputs.Naziv || ""}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>Unesite Proizvodaca:
                <input
                type="text"
                name="Proizvodac"
                value={inputs.Proizvodac || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>Unesite Model:
                <input
                type="text"
                name="Model"
                value={inputs.Model || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>Unesite cijenu:
                <input
                type="number"
                name="Cijena"
                value={inputs.Cijena || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>Unesite kolicinu:
                <input
                type="number"
                name="Kolicina"
                value={inputs.Kolicina || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <button className="btn btn-success">Dodaj</button>
        </form>
        </>
    );
}