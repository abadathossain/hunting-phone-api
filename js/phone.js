const loadPhones = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    displayPhones(phones)
}

const displayPhones = (phones) => {
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container')

    phoneContainer.textContent = ''

    const showAllButton = document.getElementById('show-all-button')
    if (phones.length > 12) {
        showAllButton.classList.remove('hidden')
    } else {
        showAllButton.classList.add('hidden')
    }
    // set phones number slice for short shown
    phones = phones.slice(0, 6)

    phones.forEach(phone => {
        // console.log(phone)

        const phoneDiv = document.createElement('div')
        phoneDiv.classList = "card bg-base-100 w-96 shadow-xl"
        phoneDiv.innerHTML = `
 <div class="card bg-base-100 w-96 shadow-xl">
                    <figure class="px-10 pt-10">
                         <img src="${phone.image}" alt="Phones" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>Brand Name: ${phone.brand}</p>
                        <div class="card-actions">
                            <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                        </div>
                    </div>
                </div>

`
        phoneContainer.appendChild(phoneDiv)

    })
    loadingSpinner(false)
}
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    loadingSpinner(true)
    loadPhones(searchText)
}

const showDetails=async(id)=>{
    // console.log('click',id)
    const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data=await res.json()
    console.log(data)
}

const loadingSpinner = (isloading) => {
    const loadingSpinner = document.getElementById('loading-spinner')
    if (isloading) {
        loadingSpinner.classList.remove('hidden')
    } else {
        loadingSpinner.classList.add('hidden')
    }
}
// loadPhones(searchText)




