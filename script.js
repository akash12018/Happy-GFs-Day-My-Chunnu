const guitar = document.getElementById("guitarHotspot");
const laptop = document.getElementById("laptopHotspot");
const camera = document.getElementById("cameraHotspot");
const sketchbook = document.getElementById("sketchbookHotspot");
const mug = document.getElementById("mugHotspot");
const panda = document.getElementById("pandaHotspot");

const popupOverlay = document.getElementById("popupOverlay");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");

let gallery = [];
let currentIndex = 0;

function showPopup(html) {
    popupContent.innerHTML = html;
    popupOverlay.style.display = "flex";
}

function closeThePopup() {
    popupOverlay.style.display = "none";
    popupContent.innerHTML = "";
}

closePopup.addEventListener("click", closeThePopup);

popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
        closeThePopup();
    }
});

function openGallery(images, start = 0) {

    gallery = images;
    currentIndex = start;

    renderGallery();

}

function renderGallery() {

    popupContent.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;gap:20px;">

            <button id="prevBtn" style="font-size:35px;padding:10px 18px;cursor:pointer;">◀</button>

            <div style="text-align:center;">

                <img id="galleryImage"
                     src="${gallery[currentIndex]}"
                     style="max-width:700px;max-height:500px;border-radius:12px;">

                <p style="color:white;margin-top:15px;font-size:18px;">
                    ${currentIndex + 1} / ${gallery.length}
                </p>

            </div>

            <button id="nextBtn" style="font-size:35px;padding:10px 18px;cursor:pointer;">▶</button>

        </div>
    `;

    document.getElementById("prevBtn").onclick = () => {

        currentIndex--;

        if(currentIndex < 0){

            currentIndex = gallery.length - 1;

        }

        renderGallery();

    };

    document.getElementById("nextBtn").onclick = () => {

        currentIndex++;

        if(currentIndex >= gallery.length){

            currentIndex = 0;

        }

        renderGallery();

    };

    popupOverlay.style.display = "flex";

}


/* ---------------- GUITAR ---------------- */

guitar.addEventListener("click", () => {

popupContent.innerHTML = `

<div style="
width:380px;
background:#ffffff;
border-radius:22px;
padding:25px;
font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
box-shadow:0 20px 50px rgba(0,0,0,.35);
text-align:center;
">

<div style="
width:130px;
height:130px;
margin:auto;
border-radius:18px;
background:linear-gradient(135deg,#ff375f,#ff9f0a);
display:flex;
align-items:center;
justify-content:center;
font-size:60px;
color:white;
">

♫

</div>

<h2 style="
margin-top:18px;
font-size:24px;
font-weight:700;
color:#111;
line-height:1.3;
">

This is for you<br>my Chunnu...

</h2>

<p style="
margin-top:8px;
color:#666;
font-size:16px;
">

Akash • Kissie

</p>

<audio
controls
autoplay
style="
width:100%;
margin-top:22px;
">

<source src="audio/MKOW.mp3" type="audio/mpeg">

</audio>

</div>

`;

popupOverlay.style.display = "flex";

});
/* ---------------- LAPTOP ---------------- */

/* ---------------- LAPTOP ---------------- */

const laptopPhotos = [

"photos/1.png",
"photos/2.png",
"photos/3.png",
"photos/4.png",
"photos/5.png",
"photos/6.png",
"photos/7.png"

];

let laptopIndex = 0;

function drawLaptop(){

popupContent.innerHTML = `

<div style="width:900px;height:580px;background:#f6f6f7;border-radius:16px;overflow:hidden;font-family:'Helvetica Neue',Arial,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.35);">

<div style="height:48px;background:#ececec;border-bottom:1px solid #d6d6d6;display:flex;align-items:center;padding:0 18px;position:relative;">

<div style="display:flex;gap:8px;">

<div style="width:12px;height:12px;border-radius:50%;background:#ff5f57;"></div>

<div style="width:12px;height:12px;border-radius:50%;background:#febc2e;"></div>

<div style="width:12px;height:12px;border-radius:50%;background:#28c840;"></div>

</div>

<div style="position:absolute;left:50%;transform:translateX(-50%);font-size:14px;font-weight:600;color:#555;">

Photos

</div>

</div>

<div style="
height:calc(100% - 48px);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
">

<img

src="${laptopPhotos[laptopIndex]}"

style="max-width:82%;max-height:82%;border-radius:8px;">
<p style="
margin-top:18px;
font-size:18px;
font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
font-weight:500;
color:#555;
">

Our laptop selfies from urs and my laptops :)

</p>

<button id="macPrev"

style="position:absolute;left:20px;width:45px;height:45px;border:none;border-radius:50%;font-size:22px;background:white;cursor:pointer;">

‹

</button>

<button id="macNext"

style="position:absolute;right:20px;width:45px;height:45px;border:none;border-radius:50%;font-size:22px;background:white;cursor:pointer;">

›

</button>



</div>

</div>

`;

popupOverlay.style.display="flex";

document.getElementById("macPrev").onclick=()=>{

laptopIndex--;

if(laptopIndex<0){

laptopIndex=laptopPhotos.length-1;

}

drawLaptop();

};

document.getElementById("macNext").onclick=()=>{

laptopIndex++;

if(laptopIndex>=laptopPhotos.length){

laptopIndex=0;

}

drawLaptop();

};

}

laptop.addEventListener("click",()=>{

laptopIndex=0;

drawLaptop();

});

/* ---------------- CAMERA DSLR ---------------- */

const cameraPhotos = [

"camera/1.png",
"camera/2.png",
"camera/3.png",
"camera/4.png",
"camera/5.png",
"camera/6.png",
"camera/7.png",
"camera/8.png",
"camera/9.png",
"camera/10.png",
"camera/11.png",
"camera/12.png",
"camera/13.png"

];

let cameraIndex = 0;

function drawCamera(){

popupContent.innerHTML = `

<div style="
width:950px;
height:580px;
background:#111;
border-radius:18px;
overflow:hidden;
font-family:Helvetica,Arial,sans-serif;
box-shadow:0 25px 60px rgba(0,0,0,.45);
position:relative;
">

<div style="
height:48px;
background:#1b1b1b;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 18px;
color:white;
font-size:13px;
">

<div>📷 Fujifilm BUBU</div>

<div>ISO 222&nbsp;&nbsp;F2.8&nbsp;&nbsp;1/250</div>

</div>

<div style="
height:calc(100% - 48px);
display:flex;
justify-content:center;
align-items:center;
position:relative;
background:black;
">

<img
src="${cameraPhotos[cameraIndex]}"
style="
max-width:88%;
max-height:86%;
object-fit:contain;
border-radius:4px;
">

<button id="camPrev"
style="
position:absolute;
left:18px;
width:48px;
height:48px;
border:none;
border-radius:50%;
cursor:pointer;
font-size:22px;
">
❮
</button>

<button id="camNext"
style="
position:absolute;
right:18px;
width:48px;
height:48px;
border:none;
border-radius:50%;
cursor:pointer;
font-size:22px;
">
❯
</button>



<div style="
position:absolute;
bottom:18px;
left:50%;
transform:translateX(-50%);
background:rgba(0,0,0,.75);
color:white;
padding:10px 22px;
border-radius:25px;
font-size:16px;
font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
font-weight:500;
">

Some cute moments of us captured on your Fujifilm hehe ❤️

</div>

<div style="
position:absolute;
top:16px;
right:18px;
color:#28ff6d;
font-size:13px;
">

● REC

</div>

</div>

</div>

`;

popupOverlay.style.display="flex";

document.getElementById("camPrev").onclick=()=>{

cameraIndex--;

if(cameraIndex<0){

cameraIndex=cameraPhotos.length-1;

}

drawCamera();

};

document.getElementById("camNext").onclick=()=>{

cameraIndex++;

if(cameraIndex>=cameraPhotos.length){

cameraIndex=0;

}

drawCamera();

};

}

camera.addEventListener("click",()=>{

cameraIndex=0;

drawCamera();

});


/* ---------------- SKETCHBOOK ---------------- */

sketchbook.addEventListener("click", () => {

    popupContent.innerHTML = `

    <div style="
    width:850px;
    background:#ffffff;
    border-radius:22px;
    padding:25px;
    font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
    box-shadow:0 20px 50px rgba(0,0,0,.35);
    text-align:center;
    ">

        <div style="display:flex;align-items:center;justify-content:center;gap:20px;">

            <button id="artPrev"
            style="
            width:45px;
            height:45px;
            border:none;
            border-radius:50%;
            font-size:22px;
            cursor:pointer;
            ">
            ❮
            </button>

            <img
            id="artImage"
            src="artworks/1.png"
            style="
            max-width:600px;
            max-height:420px;
            border-radius:12px;
            ">

            <button id="artNext"
            style="
            width:45px;
            height:45px;
            border:none;
            border-radius:50%;
            font-size:22px;
            cursor:pointer;
            ">
            ❯
            </button>

        </div>

        <p style="
        margin-top:22px;
        font-size:18px;
        line-height:1.6;
        color:#444;
        font-weight:500;
        ">

        Artworks i made for u in this sketchbook. God i really need to make u more of these ❤️

        </p>

    </div>

    `;

    popupOverlay.style.display = "flex";

    const artworks = [
        "artworks/1.png",
        "artworks/2.png"
    ];

    let index = 0;

    document.getElementById("artPrev").onclick = () => {

        index--;

        if(index < 0) index = artworks.length - 1;

        document.getElementById("artImage").src = artworks[index];

    };

    document.getElementById("artNext").onclick = () => {

        index++;

        if(index >= artworks.length) index = 0;

        document.getElementById("artImage").src = artworks[index];

    };

});

/* ---------------- MUG ---------------- */

mug.addEventListener("click", () => {

popupContent.innerHTML = `

<div style="
width:500px;
background:#ffffff;
border-radius:22px;
padding:25px;
font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
box-shadow:0 20px 50px rgba(0,0,0,.35);
text-align:center;
">

<img
src="objects/mug.png"
style="
width:100%;
border-radius:18px;
">

<p style="
margin-top:20px;
font-size:18px;
line-height:1.6;
color:#444;
font-weight:500;
">

From the time i asked u out my love, and the day you became "My Girlfriend" ❤️

</p>

</div>

`;

popupOverlay.style.display = "flex";

});


/* ---------------- PANDA ---------------- */

panda.addEventListener("click", () => {

popupContent.innerHTML = `

<div style="
width:500px;
background:#ffffff;
border-radius:22px;
padding:25px;
font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
box-shadow:0 20px 50px rgba(0,0,0,.35);
text-align:center;
">

<img
src="objects/panda.png"
style="
width:100%;
border-radius:18px;
">

<p style="
margin-top:20px;
font-size:18px;
line-height:1.6;
color:#444;
font-weight:500;
">

Ikea Panda bear for u my cutu 🐼❤️

</p>

</div>

`;

popupOverlay.style.display = "flex";

});