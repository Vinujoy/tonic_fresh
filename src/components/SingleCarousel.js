import React from 'react';
import { Paper, Button } from '@material-ui/core'

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

function SingleCarousel({item})
{
    return (
        <Paper style={{ 
            backgroundImage: `url(${item.image_url})` 
          }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default SingleCarousel;

