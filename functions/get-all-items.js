const sendQuery = require('./utils/send-query');

const GET_ALL_ITEMS = `
    query {
      allItems {
        data {
          _id
          text
          completed
        }
      }
    }
`

exports.handler = async () => {
    const { response, status, error } = await sendQuery(GET_ALL_ITEMS)

    if (error) {
        return {
            statusCode: error.response.status || 500,
            body: JSON.stringify(error)
        }
    }

    return {
        statusCode: status,
        body: JSON.stringify({ items: response.data.allItems.data })
    }
}
