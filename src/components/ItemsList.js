import React from 'react';
import { Grid, Message, Spinner } from 'theme-ui';
import Item from "./Item";

const ItemsList = ({ items, status }) => {
    if (status === 'loading') return <Spinner/>;

    if (!items || items.length === 0) {
        return (
            <Message>
                No items to be displayed
            </Message>
        )
    }

    return (
        <Grid columns={1}>
            {items.map(item => (
                <Item key={item._id} {...{ item }} />
            ))}
        </Grid>
    );
};

export default ItemsList;
