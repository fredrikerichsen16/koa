import Cookies from 'js-cookie';

class BackgroundService {

    constructor() {
        this.date = new Date();
        this.now = this.date.getTime();
    }

    /**
     * Retrieve background image and potentially metadata
     *
     * Arguments:
     *   user - obj - User data object
     * Return:
     *   object
     */
    retrieve(user) {
        this.user = user;

        return new Promise((resolve, reject) => {
            let b = this.user.backgrounds;

            if(this.timeToUpdate())
            {
                this.getImagesFromAPI()
                    .then((data) => {
                        user.backgrounds = {
                            nextRefresh: this.now + (1000 * 60 * 60 * 24), // refresh all saved images with a new API call
                            nextShuffle: 1, // this.now + (1000 * 60 * 2), // update picture every two minutes
                            images: data,
                            id: 0,
                            active: data[0],
                        };

                        this.user = user;
                        Cookies.set('user', user);

                        resolve(this.user.backgrounds.active);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }
            else
            {
                this.shuffle();
                resolve(this.user.backgrounds.active);
            }
        });
    }

    timeToUpdate() {
        let b = this.user.backgrounds;

        return !this.user.hasOwnProperty('backgrounds')
                || b.nextRefresh < this.now
                || b.nextShuffle < this.now && ((b.images.length - 1) <= b.id);
    }

    getImagesFromAPI() {
        return new Promise(function (resolve, reject) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4)
                {
                    if (this.status == 200)
                    {
                        console.log(this);
                        resolve(JSON.parse(this.responseText));
                    } else
                    {
                        let error = 'No background found.';

                        if ([409, 404, 403, 401, 400, 204].includes(this.status))
                        {
                            error += ` ${this.status} - ${this.statusText}`;
                        }

                        reject(error);
                    }
                }
            };
            xhttp.open('GET', 'http://localhost:3000/api/get-background', true);
            xhttp.send();
        });
    }

    shuffle() {
        let b = this.user.backgrounds;

        if(b.nextShuffle < this.now) {
            b.id++;
            b.active = b.images[b.id];
            b.nextShuffle = 1;
            // b.nextShuffle = this.now + (1000 * 60 * 2); - load a new pic every time during development.
        }

        Cookies.set('user', this.user);
    }
}

export default new BackgroundService();
