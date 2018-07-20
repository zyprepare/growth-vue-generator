export const getData = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        { "id": 1, "title": "json-server", "author": "typicode" }
      ]
    })
  })
}
