
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderRadius:'20px',
        backgroundColor:'#F6FFFA'
    },
    media: {
        height: 200,
    },
});

function ViewCard(props) {
    const classes = useStyles();
    const { product } = props;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.base_image.original_image_url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div className="hover:cursor-pointer text-gray-900 font-semibold text-base tracking-tight uppercase">{product.name}</div>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-9 hover:cursor-pointer py-2 text-gray-900 font-semibold text-large tracking-tight uppercase">                            
                            <div  dangerouslySetInnerHTML={{ __html: product.short_description }} />
                        </div>
                        <div className="col-span-3 hover:cursor-pointer py-2 text-gray-900 font-semibold text-sm tracking-tight text-right">
                            {`${product.weight} ${product.weight_label}`}
                        </div>
                        <div className="col-span-12 hover:cursor-pointer  text-gray-900  text-xs tracking-tight ">                           
                           <div  dangerouslySetInnerHTML={{ __html: product.description }} />
                        </div>
                        <div className="col-span-12 hover:cursor-pointer  text-gray-900 font-bold text-base tracking-tight uppercase">
                            {product.formated_price}
                        </div>
                        <div className="col-span-10">
                            <button class="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
                                Add to Cart
                            </button>
                        </div>
                        <div className="col-span-2">
                            <FavoriteBorderIcon />
                        </div>
                    </div>


                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ViewCard;