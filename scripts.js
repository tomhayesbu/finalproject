const faders = document.querySelectorAll('.bubblesSmall');

const appearOptions1 = {
    threshold: 1

};

const appearOnScroll1 = new IntersectionObserver
(function(
    entries,
    appearOnScroll1
    ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add("appear");
            appearOnScroll1.unobserve(entry.target);
        }
    });
}, 

appearOptions1);

faders.forEach(fader => {
    appearOnScroll1.observe(fader);
}); 




const fadeins = document.querySelectorAll('.bubblesMedium');

const appearOptions2 = {
    threshold: 1

};

const appearOnScroll2 = new IntersectionObserver
(function(
    entries,
    appearOnScroll2
    ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add("appear");
            appearOnScroll2.unobserve(entry.target);
        }
    });
}, 

appearOptions2);

fadeins.forEach(fadein => {
    appearOnScroll2.observe(fadein);
}); 







const fadeons = document.querySelectorAll('.bubblesLarge');

const appearOptions3 = {
    threshold: 1

};

const appearOnScroll3 = new IntersectionObserver
(function(
    entries,
    appearOnScroll3
    ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add("appear");
            appearOnScroll3.unobserve(entry.target);
        }
    });
}, 

appearOptions3);

fadeons.forEach(fadeon => {
    appearOnScroll3.observe(fadeon);
}); 