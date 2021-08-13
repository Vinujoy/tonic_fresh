import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import CategoryButton from './CategoryButton';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

function CategoryTab(props) {
    const { items } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div className="grid grid-cols-8 py-8 mx-auto  text-center">
            {items.map((category) => (
                <Link key={category.id} to={{
                    pathname: "/category", aboutProps: {
                        id: category.id
                    }
                }}>
                    <div class="">
                        <CategoryButton id={category.id} icon={category.icon_url} name={category.name} />
                    </div>
                </Link>
            ))}
        </div>




    );
}



export default CategoryTab;