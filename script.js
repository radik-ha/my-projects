const division = document.getElementById("img");
document.body.style.backgroundColor = "green"
const projects= [
    {
    	imglink: "https://img.freepik.com/premium-photo/delicious-fruits_1028566-58.jpg",
    	name: "FRUITS PAGE",
    	link: "https://radik-ha.github.io/fruits-page/"
    },

    {
    	imglink: "https://www.abc.net.au/reslib/201311/r1204239_15618807.jpg",
    	name:  "VIRUS PAGE",
    	link: "https://radik-ha.github.io/virus-bootstrap/"
    },

    {
    	imglink: "https://www.kuvingsusa.com/cdn/shop/articles/077931d29bfc10af2a246d30f51907d7.jpg?v=1656108581",
        name: "VEGETABLES PAGE",
        link: "https://radik-ha.github.io/vegetable-web/"
    },

    {
    	imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1sYuQFsQnxBAVr4KOUJWlxUfaRnxi1WX6KKThWCPVc2HBPowIvjNG1NE1X9my9NCtug&usqp=CAU",
    	name: "PLAY WITH IMAGE",
    	link:"https://radik-ha.github.io/play-with-image/"
    },
	
    {
    	imglink: "https://img.fruugo.com/product/3/09/923192093_0340_0340.jpg",
    	name: "WEB PIANO",
    	link: "https://radik-ha.github.io/web-piano/"
    },
	
    {
    	imglink: "https://storage.googleapis.com/pai-images/5452684911044eee857ded6e31e2447c.jpeg",
    	name: "SOUNDS OF ANIMALS",
    	link: "https://radik-ha.github.io/animals-sounds/"
    },
	
    {
    	imglink: "https://static.vecteezy.com/system/resources/thumbnails/004/985/607/small_2x/glassmorphism-concept-login-page-with-frosted-glass-mobile-app-login-and-registration-user-interface-concept-blurred-registration-form-design-vector.jpg",
    	name: "LOGIN FORM",
    	link: "https://radik-ha.github.io/login-form/"

    },
	
    {
    	imglink: "https://images.ctfassets.net/prxuf37q3ta2/6e2OK9Jr60JglYltKdyIDf/6582105ebe01bd5c32d3c7fb3055deb6/SB-36476_Flowers_dlp1858x1858-1.jpg?w=1024",
    	name: "FLOWERS PAGE",
    	link: "https://radik-ha.github.io/flowers-page/"
    },
    {
	imglink: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjc5LTEwMy14LmpwZw.jpg",
	name: "DUALITIES",
	link: "https://radik-ha.github.io/dualities/"
    },

    {
	imglink: "https://brandlogos.net/wp-content/uploads/2013/03/mickey-mouse-disney-vector.png",
	name: "CARTOON PAGE",
	link: "https://radik-ha.github.io/cartoon-grid/"
    },

    {
        imglink: "https://seed2plant.in/cdn/shop/files/dark_pink_dahlia_flower_petals_in_green_leaves_background_4k_hd_flowers.jpg?v=1696501139",
        name: "My First React App",
        link: "https://my-first-react-app-vkl4.onrender.com/"
    }
]

function makeHtml(obj){
	const d = document.createElement("div");
	d.setAttribute("class","project");
	d.style.borderRadius = "2rem";
	d.style.margin = "1rem";
	d.style.height = "25vh";
	d.style.display = "flex";
	d.style.alignItems = "center";
	const img = document.createElement("img");
	img.setAttribute("src",obj.imglink);
	img.style.width = "10%";
	img.style.borderRadius = "50%";
	img.style.border = "4px solid green";
	img.style.margin = "0.5rem";
	const h = document.createElement("h1");
	h.innerText = obj.name;
	h.style.color = "green";
	h.style.fontSize = "2rem";
	h.style.boxShadow = "20px 20px 30px rgba(0,0,0,0.6)";
	h.style.filter = "drop-shadow(40px 40px 30px lightgreen)";
	h.style.borderRadius = "1rem";
	d.addEventListener("click",()=> {
		window.location.href = obj.link;
			})
			d.appendChild(img);
			d.appendChild(h);
			division.appendChild(d);
		}

projects.forEach(makeHtml);
