export class Dog {
    constructor(data) {
        Object.assign(this, data)
       /* this.crossIcon = './images/icon-cross.png'
        this.heartIcon = './images/icon-heart.png'
        this.profileIcon = './images/icon-profile.png'
        this.chatIcon = './images/icon-chat.png'
        this.logo = './images/logo.png' */
        this.altText = `${this.name}'s Photo`
    }
    setPictureHtml = () => {
        const { avatar, name, age, bio, altText } = this 
        return `
        <img class="profile-img" src="${avatar}" alt="${altText}"/>
        <div class="profile-info">
            <h3>${name}, ${age}</h3>
            <p>${bio}</p>
        </div>
        `
    }
}