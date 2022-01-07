export default class PostService {

    _interstingPosts = [
        {
            "id": "1",
            "title": "Watering mastery",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-1.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "2",
            "title": "Plant pot secrets",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-2.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "3",
            "title": "Professional Repot",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-3.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "4",
            "title": "Watering mastery",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-1.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "5",
            "title": "Professional Repot",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-3.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "6",
            "title": "Plant pot secrets",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-2.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "7",
            "title": "Professional Repot",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-3.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "8",
            "title": "Plant pot secrets",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-2.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "9",
            "title": "Watering mastery",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-1.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "10",
            "title": "Professional Repot",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-3.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "11",
            "title": "Watering mastery",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-1.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "12",
            "title": "Plant pot secrets",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/interesting-2.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        }
    ]

    _news = [
        {
            "id": "1",
            "title": "Tips & Tricks For Cutting",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/news-1.png",
            "text": "Pruning, like any other skill, requires knowing what you are doing to achieve success. The old idea that anyone with a chain saw or a pruning saw can be a landscape pruner is far from the truth. More trees are killed or ruined each year from improper pruning than by pests. Remember that pruning is the removal or..."
        }
    ]

    _topPosts = [
        {
            "id": "1",
            "title": "Professional Repot",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/top-1.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        },
        {
            "id": "2",
            "title": "Professional Repot",
            "date": "Feb 23",
            "timeForReading": "8",
            "img": "/assets/img/top-2.png",
            "text": "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage..."
        }
    ]

    async getData(url) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(url);
            }, 1000)
        })
    }

    async getInterestingPosts() {
        return await this.getData(this._interstingPosts);
    }

    async getNews() {
        return await this.getData(this._news);
    }

    async getTopPosts() {
        return await this.getData(this._topPosts);
    }
}