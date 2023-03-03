import { container, likedDogsArray } from "./index.js"
export { addDislikeBadge, addLikeBadge, setFrameHtml, endSlide, likedDogsSidebar, showLikedDogs }

function addLikeBadge() {
    document.querySelector('.photo-insert').innerHTML += `
        <img class="badge-accept" src="./images/badge-like.png" alt="Like Badge" />
    `
}

function addDislikeBadge() {
    document.querySelector('.photo-insert').innerHTML += `
        <img class="badge-reject" src="./images/badge-nope.png" alt="Dislike Badge" />
    `
}
function setFrameHtml() {
        return `
            <div class="profile-container">
                <div class="header">
                    <div class="header-icons">
                        <img src="./images/icon-profile.png" alt="Profile Button"/>
                        <img src="./images/logo.png" alt="Tindog button"/>
                        <img src="./images/icon-chat.png" alt="Chat Button"/> 
                    </div>
                    
                    <div class="liked">
                    </div>  
                </div>

                <div class="profile">
                    <div class="like-dislike">
                        <button><img class="btn dislike-btn" id="dislike-photo-btn" src="./images/icon-cross.png" alt="Like profile" /></button>
                        <button><img class="btn like-btn" id="like-photo-btn" src="./images/icon-heart.png" alt="Dislike profile" /></button>
                    </div>
                </div>
            </div>
        `
}

function endSlide() {
    container.innerHTML = `
        <div class="profile-container">
            <div class="header">
                    <div class="header-icons">
                    <img src="./images/icon-profile.png" alt="Profile Button"/>
                    <img src="./images/logo.png" alt="Tindog button"/>
                    <img src="./images/icon-chat.png" alt="Chat Button"/> 
                </div>
                
                <div class="liked">
                </div> 
            </div>

            <div class="end-slide">
                <h2>Slide Show Over</h2>
                <h3>Would You like to see the list of Dogs you liked?</h3>

                <div class="end">
                    <button class="btn dislike-btn" id="end-no-btn">No</button>
                    <button class="btn like-btn" id="end-yes-btn">Yes</button>
                </div>
            </div>
        </div>    
    `
}

function likedDogsSidebar(data) {
    let likedDogs = ''
    if (data.length>0){
        for(let i in data) {
            const { name, age, avatar, altText } = data[i]
            likedDogs += `
            <div class="liked-mini-details">
                <img src="${avatar}" alt="${altText}"/>
                <div>
                    <p>${name}</p>
                    <p><span>${age} years</span></p>
                </div>
            </div>
            `
        }   
    }
    document.querySelector('.liked').innerHTML = likedDogs
    return likedDogs
}

function showLikedDogs() {
    document.querySelector('.end-slide').addEventListener('click', (event) => {
        if (event.target.id == 'end-yes-btn' ) {
            document.querySelector('.liked').style.display = 'grid'
            container.innerHTML = likedDogsSidebar(likedDogsArray)
            const zeroMargin = document.querySelectorAll('.liked-mini-details')
            for (let i of zeroMargin) {
                i.style.marginLeft = '0' 
            }
        }
        else if (event.target.id == 'end-no-btn' ) {
            container.innerHTML = ''
        }
    })
}