const button = document.querySelector('#searchButton')
const searchInput = document.querySelector('#searchInput')
const container = document.querySelector('.user-container')

container.style.display = 'none'

button.onclick = async function getAPI() {
    const url = `https://api.github.com/users/${searchInput.value}`
    const response = await fetch(url)
    const data = await response.json()

    if (data.message == 'Not Found') {
        container.style.display = 'none'
        message.style.display = 'block'
        message.innerHTML = 'Usuário não encontrado :('
    } else {
        message.style.display = 'none'
        document.querySelector('#userName').innerHTML = data.name
        document.querySelector('#userLogin').innerHTML = data.login
        document.querySelector('#userAvatar').src = data.avatar_url
        document.querySelector('#userBio').innerHTML = data.bio
        document.querySelector('#userBlog').innerHTML = data.blog
        document.querySelector('#userBlog').setAttribute('href', data.blog)
        document.querySelector('#userFollowers').innerHTML = data.followers
        document.querySelector('#userFollowing').innerHTML = data.following
        document.querySelector('#userLocation').innerHTML = data.location
        container.style.display = 'flex'
    }

}