import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const App = () => {
  const useStyles = makeStyles((theme) => ({
    textField: {
      margin: "14px",
      width: "80%",
      height: "50px",
      marginRight: "50px"
    },

    header: {
      fontSize: "30px",
      color: "gray",
      marginRight: "50px"
    },

    table: {
      minWidth: 650,
    },

    button: {
      width: "70%",
      padding: "10px",
      marginLeft: "45px"
    }
  }));
  const classes = useStyles();

  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [isValid, setIsValid] = useState(false);

  const carHandler = () => {
    const oldCars = [...cars];
    const newCar = {
      brand,
      model,
      year,
      id: Math.floor(Math.random() * 1000),
    };

    console.log(newCar)

    const newCars = oldCars.concat(newCar);

    if (brand === "" || model === "" || year === "") {
      alert("Fields are Empty.")
      setIsValid(true);
    } else {
      const newCars = oldCars.concat(newCar);
      setIsValid(false);

    }

    setCars(newCars);

    setBrand("");
    setModel("");
    setYear("");

  };

  const deleteHandler = (id) => {
    const oldCars = [...cars];
    const newCars = oldCars.filter((car) => car.id !== id);
    setCars(newCars);
  }

  return (
    <div className="App">
      <div className="App__sty">
        <h2 className={classes.header}>Registration</h2>
        <TextField id="outlined-basic" label="Brand" variant="outlined" className={classes.textField} value={brand} error={isValid} onChange={(e) => setBrand(e.target.value)} />
        <TextField id="outlined-basic" label="Model" variant="outlined" className={classes.textField} value={model} error={isValid} onChange={(e) => setModel(e.target.value)} />
        <TextField id="outlined-basic" label="Year" variant="outlined" className={classes.textField} value={year} error={isValid} onChange={(e) => setYear(e.target.value)} />
        <Button variant="contained" color="secondary" className={classes.button} onClick={carHandler}>Save</Button>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell align="center">Model</TableCell>
              <TableCell align="center">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car, index) => (
              <TableRow key={index} onClick={() => deleteHandler(car.id)}>
                <TableCell>{car.brand}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div >
  );
}

export default App;
