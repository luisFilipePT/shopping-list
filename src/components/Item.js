import React from 'react';
import { Card, Flex, Box, Text, Label, Checkbox, Button } from 'theme-ui';

const Item = ({ item }) => {
    const handleToggleCompleted =() => {
        console.log('toggle completed')
    }

    const handleDelete =() => {
        console.log('delete')
    }

    return (
        <Card>
            <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Text>{item.text}</Text>
                </Box>
                <Flex sx={{ alignItems: 'center', maxWidth: 80 }}>
                    <Label>
                        <Checkbox
                            onChange={handleToggleCompleted}
                            checked={item.completed}
                        />
                    </Label>
                    <Button variant="noStyle" onClick={handleDelete}>
                        <span>🗑</span>
                    </Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Item;
