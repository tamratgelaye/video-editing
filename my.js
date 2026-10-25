console.log("JS is running");
const skillSection = document.querySelector(".skills");
const skillBars = document.querySelectorAll(".fill");

const observer = new IntersectionObserver((entries) => {

    if(entries[0].isIntersecting){

        skillBars.forEach((bar,index)=>{

            setTimeout(()=>{

                bar.style.width = bar.dataset.width;

            },index*250);

        });

        observer.disconnect();

    }

},{
    threshold:0.4
});

observer.observe(skillSection);

const modal = document.getElementById("videoModal");

const video = document.getElementById("portfolioVideo");

const buttons = document.querySelectorAll(".play-btn");

const closeBtn = document.querySelector(".close");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

video.src=button.dataset.video;

modal.style.display="flex";

video.play();

});

});

closeBtn.onclick=()=>{

video.pause();

video.currentTime=0;

modal.style.display="none";

}

const reveal = document.querySelectorAll(".reveal");

function revealSections() {
    reveal.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);



const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 70;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                if (target === 10) {

                    counter.innerText = "10M+";

                } else {

                    counter.innerText = target + "+";

                }

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});



const hero = document.querySelector(".hero");

const spotlight = document.querySelector(".spotlight");

hero.addEventListener("mousemove",(e)=>{

    const rect = hero.getBoundingClientRect();

    spotlight.style.left = `${e.clientX - rect.left}px`;

    spotlight.style.top = `${e.clientY - rect.top}px`;

});

const track = document.querySelector(".testimonial-track");

const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i){

    track.style.transform =
    `translateX(-${i*100}%)`;

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[i].classList.add("active");

}

setInterval(()=>{

    index++;

    if(index>=dots.length){

        index=0;

    }

    showSlide(index);

},5000);

dots.forEach((dot,i)=>{

    dot.addEventListener("click",()=>{

        index=i;

        showSlide(index);

    });

});