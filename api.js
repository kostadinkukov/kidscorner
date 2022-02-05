async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.mesage);
        }

        if (response.status == 204) {
            return response;
        } else {
            const data = await response.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }

}