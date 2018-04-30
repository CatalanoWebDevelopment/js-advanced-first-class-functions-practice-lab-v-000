function logDriverNames (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown ==== hometown) {
      console.log(driver.name)
    }
  })
}
