import Dot from './Dot'
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const img = document.querySelector('img')

canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('load', e => {
  c.drawImage(img, 0, 0)
  const imageData = c.getImageData(0, 0, img.naturalWidth, img.naturalHeight)
    .data

  const dots = []
  const pixels = []

  for (let i = 0; i < imageData.length; i += 4) {
    if (imageData[i] === 0) continue

    const x = (i / 4) % img.naturalWidth
    const y = Math.floor(Math.floor(i / img.naturalWidth) / 4)

    if (x % 5 === 0 && y % 5 === 0) {
      pixels.push({
        x: x,
        y: y,
        r: imageData[i],
        g: imageData[i + 1],
        b: imageData[i + 2]
      })
    }
  }

  pixels.forEach(pixel => {
    dots.push(new Dot(pixel.x, pixel.y, pixel.r, pixel.g, pixel.b, 0, 0))
  })

  c.clearRect(0, 0, innerHeight, innerWidth)

  function animate() {
    requestAnimationFrame(animate)
    dots.forEach(dot => {
      dot.draw(c)
      dot.x++
    })
  }

  animate()
})
