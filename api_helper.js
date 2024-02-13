export async function getPostsByUsedId(baseUrl, userId) {
    const resp = await fetch (baseUrl);
    const posts = await resp.json();
    return posts.filter(post => post.userId === userId);
  }

  export async function createNewPost(url, body) {
    const resp = await fetch(url, {
      method: 'POST',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    })
    return resp.json()
}