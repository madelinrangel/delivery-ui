import React from 'react';
import './floatingActionButton.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function FloatingActionButton() {
    return (
        <Fab aria-label="add" color="primary" className="button-add" >
            <AddIcon />
        </Fab>
    );
}