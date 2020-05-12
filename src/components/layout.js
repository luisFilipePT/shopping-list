import React from 'react';
import { Flex } from 'theme-ui';

const Layout = ({ children }) => {
    return (
        <Flex
        sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            { children }
        </Flex>
    );
};

export default Layout;
