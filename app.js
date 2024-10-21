let sampleImage=document.getElementById('sampleImage')
let leftButton=document.getElementById('leftButton')
let rightButton=document.getElementById('rightButton')
images=["https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16952016/pexels-photo-16952016/free-photo-of-coast.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/28209723/pexels-photo-28209723/free-photo-of-women-overlooking-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16952017/pexels-photo-16952017/free-photo-of-coast.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/19605131/pexels-photo-19605131/free-photo-of-3-people-walking-in-a-forest-autumn-landscape.jpeg?auto=compress&cs=tinysrgb&w=600"
]

let count=0;
setInterval(()=>{
    if (count<images.length) {
        sampleImage.src=images[count]
        count++;  
    } else {
        count=0;
    }
},2000)

function trigger() {
    
    
}
