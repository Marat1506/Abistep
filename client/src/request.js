

export async function SaveLengthToDB(params) {
    try {
        const response = fetch('http://localhost:3000/snake', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify(params)

        })
        console.log("responce = ", response)
        const data = await response.json()
        console.log("data = ", data)
        return data
    } catch (error) {
        console.log("Ошибка гг: " + error)
    }
}