import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        borderRadius: '20px',
        borderColor: ""
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function CategoryButton(props) {
    const classes = useStyles();
    const { icon, id, name } = props;

    return (
        <div className="">
            <img
                className="inline-block h-14 w-14 rounded-full border-2 border-green-700 "
                src={icon}
                alt=""
            />
            <div className="text-sm"> {name} </div>
        </div>

    );
}

export default CategoryButton;