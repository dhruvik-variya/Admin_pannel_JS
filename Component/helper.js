 export const ApiMethods = {
    get: async () => {
        let request = await fetch(`https://admin-server-1-zb6i.onrender.com/product`);
        let response = await request.json();
        return response;
    },
    post: async (product) => {
        let request = await fetch(`https://admin-server-1-zb6i.onrender.com/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        let response = await request.json();
        return response;
    }
}