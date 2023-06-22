const getIpAddress = ip => {
  address = ip
  if (ip.substr(0, 7) == '::ffff:') {
    address = ip.substr(7)
  }
  return address
}

module.exports = {
  getIpAddress,
}
