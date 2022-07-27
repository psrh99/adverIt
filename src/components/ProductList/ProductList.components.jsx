import './ProductList.styles.css'
// import Card1 from './card1.jpg'
// import Card2 from './card2.jpg'
// import Card3 from './card3.png'
// import Card4 from './card4.png'
// import Card5 from './card5.jpg'
// import Card6 from './card6.jpg'
// import Card7 from './card7.jpg'
import ListComponent from './List.component'




const ProductList = () => {

    const listItems = [
        {
            "id":1,
            "title": "Renault kwid",
            "desc": "The entry-level hatchback is offered in four trims: RXL, RXL (O), RXT, and Climber.",
            "imageUrl": "https://media.zigcdn.com/media/content/2022/Mar/651092705-whatsappimage2022-03-14at1.41.55pmtitle_720x540.jpg"
        },
        {
            "id":2,
            "title": "Maruti Swift",
            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "imageUrl" : "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1644834798148/front-left-side-47.jpg"
        },
        {
            "id": 3,
            "title": "iphone 11",
            "desc": "6.1-inch 15.5 cm diagonal Liquid Retina HD LCD display Water and dust resistant 2 meters for up to 30 minutes.",
            "imageUrl" :"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144418"
        },
        {
            "id": 4,
            "title": "LG 60 cm Full HD IPS LCD MONITOR",
            "desc": "LG 60 cm/24 inches Full HD IPS 1920 x 1080 Pixels LCD Monitor, Inbuilt Speaker, HDMI x 2, VGA Port, 75 Hz Refresh Rate, AMD Freesync",
            "imageUrl" :"https://m.media-amazon.com/images/I/61Qm7pa0ptS._SL1500_.jpg"
        },
        {
            "id": 5,
            "title": "Redgear Shadow Blade Mechanical Keyboard",
            "desc": "Redgear Shadow Blade Mechanical Keyboard with Drive Customization, Spectrum LED Lights, Media Control Knob and Wrist Support (Black)",
            "imageUrl" :"https://m.media-amazon.com/images/I/61NKGdlO36L._SL1500_.jpg"
        },
        {
            "id": 6,
            "title": "Royal Enfield Meteor 350",
            "desc": "Royal Enfield Meteor 350 is a cruiser bike available at a starting price of Rs. 2,05,766 in India. It is available in 3 variants and 10 colours with top variant price starting from Rs. 2,21,980. ",
            "imageUrl" :"https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-meteor-350-fireball20201106124644.jpg"
        }
    ]

    return(
        <div className='main'>
            {
                listItems.map(item => (
                    <ListComponent key={item.id} item = {item} />
                    // console.log(item)
                ))
            }
    </div>
    )
    
}

export default ProductList
