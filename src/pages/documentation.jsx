import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    contentDiv: {
        marginRight: 50,
        marginLeft: 50
    },
    title: {
        flexGrow: 1,
        color: "black"
    },
    AppBar: {
        background : "#607d8b"
    },
    LoginButton: {
        marginRight: 50,
        color: "white"
    },
    horizontalImages: {
        display: "flex",
        flexDirection: "row"
    }
}));

const DocumentationPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.AppBar}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Deep Learning - André Schwarz
                    </Typography>
                    <Link to="/">
                        <Button color="primary" className={classes.LoginButton}>Aufgabe 3 - Vorhersage</Button>
                    </Link>
                </Toolbar>
            </AppBar>

            <div className={classes.contentDiv}>
                <h1>Herangehensweise, Dokumentation und Quellen</h1>

                <h2>Tech Stack</h2>

                <h4>React js</h4>
                Diese Anwendung wurde mit React erstellt. Dabei übernimmt React die Entwicklung des User Interfaces sowie der Navigation zwischen den
                beiden Seiten (React Router).

                <h4>Tensorflow js</h4>
                Tensorflow ist ein Framework, das die Erstellung von Neuronalen Netzen ermöglicht. In diesem Fall wurde die Version für Javascript
                verwendet.
                <h4>tensorflow/tfjs-vis</h4>
                tfjs-vis ist eine Bibliothek von Tensorflow die es erlaubt die erstellten Modelle zu visualisieren und das Training zu überwachen.
                <h4>Material UI</h4>
                Material UI wurde verwendet um die Standard UI Komponenten zu benutzen.


            </div>
        </div>
    );
};

export default DocumentationPage;