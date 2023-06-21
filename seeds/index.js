const mongoose = require('mongoose');
const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')
const Campground = require('../models/campground');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected!")
})

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async() =>{
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) +10;
        const camp = new Campground({
            author: '642e6e661bc08c21cb15bae2',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'good good goo',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                  cities[random1000].longitude,
                  cities[random1000].latitude,
                ],
              },
            images: [
                {
                    url: 'https://res.cloudinary.com/devy0gctb/image/upload/v1681383251/YelpCamp/s1dru0cuvzj5pkrfjkox.jpg',
                    filename: 'YelpCamp/s1dru0cuvzj5pkrfjkox',
                },
                {
                    url: 'https://res.cloudinary.com/devy0gctb/image/upload/v1681381841/YelpCamp/rdz14h8a6anifqtpfpey.jpg',
                    filename: 'YelpCamp/rdz14h8a6anifqtpfpey',
                }
              ]
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
});