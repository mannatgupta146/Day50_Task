const reels = [
  {
    username: "mannat_gupta",
    profilePic: "https://picsum.photos/200?random=1",
    isFollowed: false,
    description: "Sunset hitting different today. Calm mind, warm skies 🌅✨",
    isLiked: false,
    likeCount: 124,
    commentCount: 12,
    shareCount: 4,
    video: "./assets/1.mp4",
    isMuted: true,
  },
  {
    username: "arjun_malik",
    profilePic: "https://picsum.photos/200?random=2",
    isFollowed: true,
    description: "Back in grind mode. Strength comes with consistency 💪🔥",
    isLiked: true,
    likeCount: 542,
    commentCount: 33,
    shareCount: 9,
    video: "./assets/2.mp4",
    isMuted: true,
  },
  {
    username: "tanya_creates",
    profilePic: "https://picsum.photos/200?random=3",
    isFollowed: false,
    description: "Café corners and creative thoughts ☕✨ Little moments matter.",
    isLiked: false,
    likeCount: 310,
    commentCount: 18,
    shareCount: 7,
    video: "./assets/3.mp4",
    isMuted: true,
  },
  {
    username: "food_with_riya",
    profilePic: "https://picsum.photos/200?random=4",
    isFollowed: true,
    description: "Trying this new pasta spot today and omg it’s perfection 🤤🍝",
    isLiked: false,
    likeCount: 980,
    commentCount: 51,
    shareCount: 16,
    video: "./assets/4.mp4",
    isMuted: true,
  },
  {
    username: "travel_diaries",
    profilePic: "https://picsum.photos/200?random=5",
    isFollowed: false,
    description: "Another mountain day. Peace hits different up here 🏔️❤️",
    isLiked: true,
    likeCount: 1500,
    commentCount: 89,
    shareCount: 22,
    video: "./assets/5.mp4",
    isMuted: true,
  },
  {
    username: "tech_with_kabir",
    profilePic: "https://picsum.photos/200?random=6",
    isFollowed: false,
    description: "Set up finally complete. RGB glow makes everything better 💡😎",
    isLiked: false,
    likeCount: 221,
    commentCount: 14,
    shareCount: 5,
    video: "./assets/6.mp4",
    isMuted: true,
  },
  {
    username: "dance_by_meera",
    profilePic: "https://picsum.photos/200?random=7",
    isFollowed: true,
    description: "Just letting the music take over today 💃🔥 Feeling the rhythm.",
    isLiked: true,
    likeCount: 760,
    commentCount: 40,
    shareCount: 13,
    video: "./assets/7.mp4",
    isMuted: true,
  },
  {
    username: "gaming_adarsh",
    profilePic: "https://picsum.photos/200?random=8",
    isFollowed: false,
    description: "Late-night gaming session. Headphones on, world off 🎮⚡",
    isLiked: false,
    likeCount: 450,
    commentCount: 22,
    shareCount: 8,
    video: "./assets/8.mp4",
    isMuted: true,
  },
  {
    username: "chess_master_01",
    profilePic: "https://picsum.photos/200?random=19",
    isFollowed: true,
    description: "Trying a new opening today. Let’s see how far it goes ♟️🔥",
    isLiked: false,
    likeCount: 670,
    commentCount: 27,
    shareCount: 11,
    video: "./assets/9.mp4",
    isMuted: true,
  },
  {
    username: "rider_kartik",
    profilePic: "https://picsum.photos/200?random=10",
    isFollowed: false,
    description: "Clear roads, cold breeze, and my bike. Perfect evening ride 🏍️✨",
    isLiked: false,
    likeCount: 890,
    commentCount: 40,
    shareCount: 15,
    video: "./assets/10.mp4",
    isMuted: true,
  }
];


// ------------------ UI GENERATION ------------------
let sum = "";

reels.forEach(function (user) {
  sum += `<div class="reels">
    <video autoplay loop src="${user.video}"></video>

    <!-- VOLUME BUTTON -->
    <div class="volume">
      ${
        user.isMuted
          ? '<i class="ri-volume-mute-fill"></i>'
          : '<i class="ri-volume-up-fill"></i>'
      }
    </div>

    <div class="profile">
      <div class="info">
        <div class="info-main">
          <img src="${user.profilePic}" alt="profile">
          <h3>${user.username}</h3>
        </div>
        <button>${user.isFollowed ? "Following" : "Follow"}</button>
      </div>
      <p>${user.description}</p>
    </div>

    <div class="actions">
      <div class="heart">
        ${user.isLiked
          ? '<i class="ri-heart-3-fill" style="color:red"></i>'
          : '<i class="ri-heart-3-line"></i>'}
        <h1>${user.likeCount}</h1>
      </div>

      <div class="comment">
        <i class="ri-chat-1-line"></i>
        <h1>${user.commentCount}</h1>
      </div>

      <div class="share">
        <i class="ri-share-forward-line"></i>
        <h1>${user.shareCount}</h1>
      </div>
    </div>

</div>`;
});

let section = document.querySelector("section");
section.innerHTML = sum;


// ------------------ EVENT BUBBLING ------------------
section.addEventListener("click", function (e) {
  
  let reel = e.target.closest(".reels");
  if (!reel) return;

  let index = Array.from(document.querySelectorAll(".reels")).indexOf(reel);


  // -------- FOLLOW BUTTON --------
  if (e.target.tagName === "BUTTON") {
    reels[index].isFollowed = !reels[index].isFollowed;
    e.target.innerText = reels[index].isFollowed ? "Following" : "Follow";
  }


  // -------- LIKE BUTTON --------
  if (
    e.target.classList.contains("ri-heart-3-line") ||
    e.target.classList.contains("ri-heart-3-fill")
  ) {
    let heart = e.target;

    if (heart.classList.contains("ri-heart-3-line")) {
      heart.classList.remove("ri-heart-3-line");
      heart.classList.add("ri-heart-3-fill");
      heart.style.color = "red";
      reels[index].likeCount++;
    } else {
      heart.classList.remove("ri-heart-3-fill");
      heart.classList.add("ri-heart-3-line");
      heart.style.color = "white";
      reels[index].likeCount--;
    }

    heart.nextElementSibling.innerText = reels[index].likeCount;
  }


  // -------- VOLUME BUTTON --------
  if (
    e.target.classList.contains("ri-volume-up-fill") ||
    e.target.classList.contains("ri-volume-mute-fill")
  ) {

    let icon = e.target;
    let video = reel.querySelector("video");

    // Toggle mute for clicked reel
    reels[index].isMuted = !reels[index].isMuted;
    video.muted = reels[index].isMuted;

     if (reels[index].isMuted) {
    video.muted = true;
  } else {
    video.muted = false;

    // 🔥 IMPORTANT FIX FOR FIRST VIDEO
    video.pause();
    video.currentTime = 0;
    video.play();
  }

    // Change icon
    if (video.muted) {
      icon.classList.remove("ri-volume-up-fill");
      icon.classList.add("ri-volume-mute-fill");
    } else {
      icon.classList.remove("ri-volume-mute-fill");
      icon.classList.add("ri-volume-up-fill");
    }

    // ⭐ MUTE ALL OTHER VIDEOS ⭐
    let allReels = document.querySelectorAll(".reels");

    allReels.forEach((r, i) => {
      if (i !== index) {
        let v = r.querySelector("video");
        let ic = r.querySelector(".volume i");

        v.muted = true;
        reels[i].isMuted = true;

        ic.classList.remove("ri-volume-up-fill");
        ic.classList.add("ri-volume-mute-fill");
      }
    });
  }

});

// ------------------ AUTO MUTE OTHER VIDEOS ON SCROLL ------------------
let allReels = document.querySelectorAll(".reels");

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let video = entry.target.querySelector("video");
    let icon = entry.target.querySelector(".volume i");
    let index = Array.from(allReels).indexOf(entry.target);

    if (entry.isIntersecting) {
      // The reel currently on screen → keep video.muted as per user choice
      video.play();

    } else {
      // Reel is OFF screen → force mute
      video.muted = true;
      reels[index].isMuted = true;

      // Change icon
      icon.classList.remove("ri-volume-up-fill");
      icon.classList.add("ri-volume-mute-fill");

      // Pause video too (optional)
      video.pause();
    }
  });
}, { threshold: 0.7 });  // 70% visible

// Observe all reels
allReels.forEach((reel) => observer.observe(reel));
