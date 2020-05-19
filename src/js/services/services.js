// will not wait without async await
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

async function getResource(url) {
    let res = await fetch(url);

    // cause catch doesn't show error when when 404 or other statuses
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
        
    return await res.json();
}

export {postData};
export {getResource};