
const db = require('../external/firebase')
const axios = require('axios');
const math = require('mathjs')
class ControllerLocation{
    static findAll(req,res,next){
        Pet.findAll( {where: { UserId: req.decoded.id }})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>next(err))
        
    }

    static create(req,res,next){
        const { lat, lng, temp } = req.body;
        db.collection('position').doc('1').update({
            lat,
            lng,
            temp,
            PetId:1,
            name: "Qnoy",
            kind: "Dog",
            breed: "Dalmatian",
            photo: "https://dalmatianclubofamerica.org/wp-content/uploads/2019/04/head.jpg",
            year: 2016,
            food: "Pedigree",
            furColor: "Black, White",
            furType: "Normal",
            isMale: false,
            UserId: 1,
            
          }).then(ref => {
            console.log('lat: ',lat, 'lng:',lng, 'temp:',temp)
            res.json({ message: `Added document with ID: ${ref.id}`});
          })
    }

    static async nearPetShop(req,res,next){
        try{
            const {lat,lng} = req.body;
            const key ='AIzaSyBPi8htKW3Pgx1S2L0zCMbmRHigWDtdhjA';
            const location = `${lat},${lng}`;
            const radius = 1500;
            const { data } = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'+ "key=" + key + "&location=" + location + "&radius=" + radius +  "&keyword=" + 'pet');
            for (let i = 0; i < data.results.length; i++) {
                let lat1 = lat;
                let lat2 = data.results[i].geometry.location.lat;

                let lon1 = lng;
                let lon2 = data.results[i].geometry.location.lng;

                var radlat1 = Math.PI * lat1/180;
                var radlat2 = Math.PI * lat2/180;
                var theta = lon1-lon2;
                var radtheta = Math.PI * theta/180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180/Math.PI;
                dist = dist * 60 * 1.1515;
                data.results[i].distance = dist.toFixed(2)
            }
            data.results.sort(function (a, b) {
                return a.distance - b.distance;
            });
            for (let i = 0; i < data.results.length; i++) {
                data.results[i].distance = `${dist.toFixed(2)} km`
                const checkComma = String(data.results[i].rating).split('');
                if (checkComma.length === 1) {
                    data.results[i].rating = `${String(data.results[i].rating)}.0`
                }
            }
            res.json(data.results);
        } catch(err){
            console.log(err);
        }
    }
}

module.exports = ControllerLocation;