import React, { useState } from 'react';
import { Card, Textarea, Button } from 'theme-ui';

const AddItemForm = () => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

    return (
        <Card mb={50}>
            <form onSubmit={handleSubmit}>
                <Textarea
                    sx={{ width: '100%' }}
                    rows={4}
                    placeholder="Add an item"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            { text.length > 0 && (
                <Button type="submit" sx={{ float: 'right'}}>Add</Button>
            ) }
            </form>
        </Card>
    );
};

export default AddItemForm;
