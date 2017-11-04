function withinRadius(p1, p2) {
  const radiusCutoff = 5
  const norm = Math.sqrt(
    Math.pow(p2.x - p1.x, 2) + 
    Math.pow(p2.y - p1.y, 2)
  )
  
  return radiusCutoff > norm
}

//array passed by reference so we should be fine
function canRaid(user, bases) {
  bases.forEach(function(elem, i, arr) {
    if withinRadius(user, elem) return elem // pseudo, not perfect
  })
  return null
}

module.exports = canRaid


