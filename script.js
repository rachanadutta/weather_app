const apikey="d562c235f8369bca2407fb11f07b1ec6";
const card=document.querySelector(".card");
const search=document.querySelector(".search");
const input=document.getElementById("input");
const button=document.getElementById("button");
const weatherImages={
    clear: "https://images.unsplash.com/photo-1705077988137-1ba1c119bb0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdlYXRoZXIlMjBpY29uc3xlbnwwfHwwfHx8MA%3D%3D",
    clouds: "https://images.unsplash.com/photo-1707396173411-ce001d65c3cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlciUyMGljb25zfGVufDB8fDB8fHww",
    rain: "https://plus.unsplash.com/premium_photo-1675968514495-7f3be70dddd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMHdlYXRoZXIlMjBpY29ufGVufDB8fDB8fHww",
    snow: "https://images.unsplash.com/photo-1707396172157-bb40ab042682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlciUyMGljb25zfGVufDB8fDB8fHww",
    thunderstorm: "https://plus.unsplash.com/premium_photo-1677744408402-6c198d22d528?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlciUyMGljb25zfGVufDB8fDB8fHww",
    drizzle: "https://images.unsplash.com/photo-1705077031869-51b60754302a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYXRoZXIlMjBpY29uc3xlbnwwfHwwfHx8MA%3D%3D"

}
const colors={
    clear:"rgba(242, 188, 12, 0.71)",
    clouds: "rgba(144, 194, 216, 0.5)",
    rain: "rgba(132, 135, 163, 0.5)",
    snow: "rgba(224, 224, 230, 0.5)",
    thunderstorm: "rgba(48, 48, 56, 0.5)",
    drizzle:"rgba(35, 115, 235, 0.5)"
}
const animations={
    clear:"https://videos.pexels.com/video-files/1860175/1860175-sd_640_360_30fps.mp4",
    clouds: "https://videos.pexels.com/video-files/3786014/3786014-sd_640_360_30fps.mp4",
  rain: "https://videos.pexels.com/video-files/4771356/4771356-sd_640_360_25fps.mp4",
  snow: "https://videos.pexels.com/video-files/1856985/1856985-sd_640_360_25fps.mp4",
  thunderstorm: "https://videos.pexels.com/video-files/5908584/5908584-sd_640_360_25fps.mp4",
  drizzle: "https://videos.pexels.com/video-files/5197762/5197762-sd_640_360_25fps.mp4"
    
}

button.addEventListener("click", () =>{
    const city = input.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            
            console.log(data);
            console.log(data.main.temp);
            document.querySelector(".welcome").classList.add("hidden");
            document.querySelector(".weather").classList.remove("hidden");
            document.querySelector(".temp").classList.remove("hidden");
            document.querySelector(".details").classList.remove("hidden");
            const condition= data.weather[0].main.toLowerCase();
            const imgurl= weatherImages[condition] || weatherImages.clear;
            const bgcolor= colors[condition];
            const video=animations[condition] || animations.clear;
            document.body.style.background = "none";
            document.querySelector(".card").style.backgroundColor=bgcolor;
            document.getElementById("weather-img").src=imgurl;
            document.getElementById("background-video").querySelector("source").src=video;
            document.getElementById("background-video").load();


            

            document.getElementById("temperature").innerHTML =`${data.main.temp}<sup>°C</sup>`;
            document.getElementById("humidity-value").textContent =`${data.main.humidity}`;
            document.getElementById("wind-value").textContent =`${data.wind.speed}`;
            document.getElementById("description").textContent =`${data.weather[0].description}`;

            


        })
})


