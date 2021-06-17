import React, {useEffect, useRef} from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import * as tf from "@tensorflow/tfjs";

function PredictionPage() {

    const userInputValueRef = useRef(0)
    const predictionValueRef = useRef()

    const MODEL_URL = '../model/model.json'

    useEffect(() => {
        tf.ready().then(() => {
            loadModel(MODEL_URL)
        });
    }, [])

    async function loadModel(url) {
        try {
            // const model = await tf.loadLayersModel(url);
            const model = await tf.loadLayersModel(
                'https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json');
            model.summary();
            console.log("Load model success")
        } catch (err) {
            console.log(err);
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            color: "white"
        },
        AppBar: {
            background: "#607d8b"
        },
        DokuButton: {
            marginRight: 750,
            color: "white"
        },
        content: {
            marginLeft: 100,
            marginRight: 100,
            marginTop: 100,
            display: "flex",
            flexDirection: "column",
            width: "400",
            height: "100vh"
        },
        horizontalImages: {
            display: "flex",
            flexDirection: "row"
        },
        funcButton: {
            width: "fit-content",
            marginTop: 10,
            marginBottom: 10
        },
        table: {
            width: 250,
        },
        prediction: {
            marginLeft: 20
        }
    }));
    const classes = useStyles();

    function createData(name, value) {
        return {name, value};
    }

    const rows = [
        createData('Batch Size', 32),
        createData('Optimizer', "Adam"),
        createData('Learning Rate', 0.001),
        createData('Epochs', 20),
        createData('Loss', "MSE"),
        createData('Training Data size', 500)
    ];

    return <div>
        <AppBar position="static" className={classes.AppBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Deep Learning - André Schwarz
                </Typography>
                <Link to="/documentation">
                    <Button color="primary" className={classes.DokuButton}>Aufgabe 3 - Zur Dokumentation</Button>
                </Link>
            </Toolbar>
        </AppBar>

        <div className={classes.content}>
            <Button variant="contained" color="primary" className={classes.funcButton}> Wert
                vorhersagen</Button>
            <div className={classes.horizontalImages}>
                <TextField id="userInput" label="User Input" type="number" variant="outlined"
                           inputRef={userInputValueRef}/>
                <TextField
                    id="prediction"
                    InputProps={{
                        readOnly: true,
                    }}
                    className={classes.prediction}
                    inputRef={predictionValueRef}
                />

            </div>

            <Button color="primary"
                    className={classes.funcButton}>Modellerstellung
                neustarten</Button>

            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>;
}

export default PredictionPage;
