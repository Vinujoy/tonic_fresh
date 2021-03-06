
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderRadius:'20px'
    },
    media: {
        height: 200,
    },
});

function CategoryCard(props) {
    const classes = useStyles();
    const { name, image_url } = props;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image_url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div className="hover:cursor-pointer mt-2 text-gray-900 font-semibold text-base tracking-tight uppercase">{name}</div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

// function CategoryCard(props) {
//     return (
//         <div>

//         </div>
//     );
// }

export default CategoryCard;