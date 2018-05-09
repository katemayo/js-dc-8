const view = {
  renderGifs: function (source) {
    const gifs = source.data
    let html = ''

    gifs.forEach(gif => {
      const src = gif.images.original.url
      html += `<img src="${src}"/>`
    })

    return html
  }
}

module.exports = view
