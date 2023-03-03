import { Dog } from "./Dog.js";
import { dogsList } from "./data.js";
import { addDislikeBadge, addLikeBadge, setFrameHtml, endSlide, likedDogsSidebar, showLikedDogs } from './utils.js'

const dogsArray = Object.keys(dogsList)
const swipedDogs = []
export const likedDogsArray = []
export const container = document.querySelector('.container')

let newDog = getNextDog()
container.innerHTML = setFrameHtml()
startSlide()
nextDogSlide()

function getNextDog() {
    const nextDog = dogsList[dogsArray.shift()]
    return nextDog ? new Dog(nextDog) : {}
}

function startSlide() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('photo-insert')
    document.querySelector('.profile').prepend(newDiv)
}

function nextDogSlide() {
    document.querySelector('.photo-insert').innerHTML = newDog.setPictureHtml()
    likedDogsSidebar(likedDogsArray)
    likeOrDislike()
}

function likeOrDislike() {
    document.querySelector('.like-dislike').addEventListener('click', (event) => {
        if(!newDog.hasBeenSwiped) {
            if(event.target.id == 'like-photo-btn') {
                newDog.hasBeenLiked = true
                newDog.hasBeenSwiped = true
                likedDogsArray.push(newDog)
                swipedDogs.push(newDog)
                addLikeBadge()

                setTimeout(() => {
                    if(dogsArray.length > 0) {
                        newDog = getNextDog()
                        nextDogSlide()
                    }
                    else {
                        endSlide()
                        showLikedDogs()
                        likedDogsSidebar(likedDogsArray)
                    }
                }, 1500)
            }
            else if(event.target.id == 'dislike-photo-btn') {
                // newDog.hasBeenLiked = false
                newDog.hasBeenSwiped = true
                swipedDogs.push(newDog)
                addDislikeBadge()

                setTimeout(() => {
                    if(dogsArray.length > 0) {
                        newDog = getNextDog()
                        nextDogSlide()
                    }
                    else {
                        endSlide()
                        showLikedDogs()
                        likedDogsSidebar(likedDogsArray)
                    }
                }, 1500)
            }
        } 
    })
}