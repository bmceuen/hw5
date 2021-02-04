function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE

  let nooberPurpleButtonFormat = document.querySelector('#noober-purple-filter')
  let nooberPoolButtonFormat = document.querySelector('#noober-pool-filter')
  let nooberXButtonFormat = document.querySelector('#noober-x-filter')
  let nooberXLButtonFormat = document.querySelector('#noober-xl-filter')
  let allRidesButtonFormat = document.querySelector('#all-filter')

  

  let allRidesButton = document.querySelector('#all-filter')
  allRidesButton.addEventListener('click', async function(event)
  {
    event.preventDefault()
    let clearDiv = document.querySelector('.rides')
    clearDiv.innerHTML = ''

    
    nooberPoolButtonFormat.classList.remove('bg-blue-500', 'text-white')
    nooberPurpleButtonFormat.classList.remove('bg-purple-500', 'text-white')
    nooberXButtonFormat.classList.remove('bg-blue-500', 'text-white')
    nooberXLButtonFormat.classList.remove('bg-blue-500', 'text-white')
    allRidesButtonFormat.classList.remove('text-blue-500')

    nooberPoolButtonFormat.classList.add('text-blue-500')
    nooberPurpleButtonFormat.classList.add('text-purple-500')
    nooberXButtonFormat.classList.add('text-blue-500')
    nooberXLButtonFormat.classList.add('text-blue-500')
    allRidesButtonFormat.classList.add('bg-blue-500','text-white')


    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()
    
    let arrayOfRides = json
    renderRides(arrayOfRides)
  })

    
  let nooberPurpleButton = document.querySelector('#noober-purple-filter')
  nooberPurpleButton.addEventListener('click', async function(event)
  {
    event.preventDefault()
    let clearDiv = document.querySelector('.rides')
    clearDiv.innerHTML = ''

    
    nooberPoolButtonFormat.classList.remove('bg-blue-500', 'text-white')
    nooberPurpleButtonFormat.classList.remove('text-purple-500')
    nooberXButtonFormat.classList.remove('bg-blue-500', 'text-white')
    nooberXLButtonFormat.classList.remove('bg-blue-500', 'text-white')
    allRidesButtonFormat.classList.remove('bg-blue-500', 'text-white')

    nooberPoolButtonFormat.classList.add('text-blue-500')
    nooberPurpleButtonFormat.classList.add('bg-purple-500', 'text-white')
    nooberXButtonFormat.classList.add('text-blue-500')
    nooberXLButtonFormat.classList.add('text-blue-500')
    allRidesButtonFormat.classList.add('text-blue-500')


    let reportPurpleEvent = 'Noober Purple Was Chosen'
    console.log(reportPurpleEvent)

    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()

    let arrayOfRides = json
    for(let i = 0; i<arrayOfRides.length;i++)
    {
      let ride = arrayOfRides[i]
      let level = levelOfService(ride)
      let purpleArray = []
    
      if(level == 'Noober Purple')
      {
        purpleArray.push(ride)
        renderRides(purpleArray)
      }

    }
  })

  let nooberPoolButton = document.querySelector('#noober-pool-filter')
  nooberPoolButton.addEventListener('click', async function(event)
  {
    event.preventDefault()
    let clearDiv = document.querySelector('.rides')
    clearDiv.innerHTML = ''

    nooberPoolButtonFormat.classList.remove('text-blue-500')
    nooberPurpleButtonFormat.classList.remove('bg-purple-500', 'text-white')
    nooberXButtonFormat.classList.remove('bg-blue-500', 'text-white')
    nooberXLButtonFormat.classList.remove('bg-blue-500', 'text-white')
    allRidesButtonFormat.classList.remove('bg-blue-500', 'text-white')

    nooberPoolButtonFormat.classList.add('bg-blue-500', 'text-white')
    nooberPurpleButtonFormat.classList.add('text-purple-500')
    nooberXButtonFormat.classList.add('text-blue-500')
    nooberXLButtonFormat.classList.add('text-blue-500')
    allRidesButtonFormat.classList.add('text-blue-500')
    

    let reportPoolEvent = 'Noober Pool Was Chosen'
    console.log (reportPoolEvent)

    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()

    let arrayOfRides = json
    for(let i = 0; i<arrayOfRides.length; i++)
    {
      let ride = arrayOfRides[i]
      let level = levelOfService(ride)
      let poolArray = []

      if(level == 'Noober Pool')
      {
        poolArray.push(ride)
        renderRides(poolArray)
      }

    }
  })

  let nooberXButton = document.querySelector('#noober-x-filter')
  nooberXButton.addEventListener('click', async function(event)
  {
    event.preventDefault()
    let clearDiv = document.querySelector('.rides')
    clearDiv.innerHTML = ''

    nooberPoolButtonFormat.classList.remove('bg-blue-500', 'text-white')
    nooberPurpleButtonFormat.classList.remove('bg-purple-500', 'text-white')
    nooberXButtonFormat.classList.remove('text-blue-500')
    nooberXLButtonFormat.classList.remove('bg-blue-500', 'text-white')
    allRidesButtonFormat.classList.remove('bg-blue-500', 'text-white')

    nooberPoolButtonFormat.classList.add('text-blue-500')
    nooberPurpleButtonFormat.classList.add('text-purple-500')
    nooberXButtonFormat.classList.add('bg-blue-500', 'text-white')
    nooberXLButtonFormat.classList.add('text-blue-500')
    allRidesButtonFormat.classList.add('text-blue-500')



    let reportXEvent = 'Noober X Was Chosen'
    console.log(reportXEvent)

    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()

    let arrayOfRides = json
    for(let i = 0; i<arrayOfRides.length;i++)
    {
      let ride = arrayOfRides[i]
      let level = levelOfService(ride)
      let xArray = []

      if(level == 'Noober X')
      {
        xArray.push(ride)
        renderRides(xArray)
      }
    }
  })

  let nooberXLButton = document.querySelector('#noober-xl-filter')
  nooberXLButton.addEventListener('click', async function(event)
  {
    event.preventDefault()
    let clearDiv = document.querySelector('.rides')
    clearDiv.innerHTML = ''

    nooberPoolButtonFormat.classList.remove('bg-blue-500', 'text-white')
    nooberPurpleButtonFormat.classList.remove('bg-purple-500', 'text-white')
    nooberXButtonFormat.classList.remove('bg-blue-500', 'text-white')
    nooberXLButtonFormat.classList.remove('text-blue-500')
    allRidesButtonFormat.classList.remove('bg-blue-500', 'text-white')

    nooberPoolButtonFormat.classList.add('text-blue-500')
    nooberPurpleButtonFormat.classList.add('text-purple-500')
    nooberXButtonFormat.classList.add('text-blue-500')
    nooberXLButtonFormat.classList.add('bg-blue-500','text-white')
    allRidesButtonFormat.classList.add('text-blue-500')

    let reportXLEvent = 'Noober XL Was Chosen'
    console.log(reportXLEvent)

    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()

    let arrayOfRides = json
    for(let i = 0; i<arrayOfRides.length; i++)
    {
      let ride = arrayOfRides[i]
      let level = levelOfService(ride)
      let xLargeArray = []

      if (level == 'Noober XL')
      {
        xLargeArray.push(ride)
        renderRides(xLargeArray)
      }
    }
  })


})

