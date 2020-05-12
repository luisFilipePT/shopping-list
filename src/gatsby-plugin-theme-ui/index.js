export default {
    colors: {
        primary: 'red',
        secondary: 'green',
        text: 'black',
        background: '#D8DEE9'
    },
    fonts: {
        body: 'Helvetica, sans-serif',
        heading: 'Verdana, sans-serif',
    },
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body'
        }
    },
    buttons: {
        primary: {
            marginTop: 25,
            cursor: 'pointer',
            color: 'background',
            bg: 'primary',

            '&:hover, &:focus': {
                bg: 'secondary',
                color: 'text',
            }
        },
        noStyle: {
            cursor: 'pointer',
            bg: 'transparent'
        }


    },
    cards: {
      primary: {
          marginTop: 10,
          width: '550px',
          padding: '10px',
          borderRadius: '4px',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.25)',
          backgroundColor: '#fff'
      }
    }
}
