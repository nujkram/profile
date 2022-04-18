const data = [
    {
        message: `I knew Mark Jun was the perfect guy for the IT stuff. He is
        a true professional. I've worked with him on almost all our
        major projects in our civic organization and IT needs in our
        company. He is deeply multi-tasker, he make sure to finish
        his task on or before deadlines. Trusted and creative even
        on the new world of IT.`,
        src: `assets/img/testimonials/testimonials-1.jpg`,
        name: `Evy Grace Yap`,
        position: `Dealer Sales Coordinator`,
        company: `Petron Gasul LPG Industry`
    },
    {
        message: `I first got to know Mark in a professional basis (we worked
        together at Spring Valley). Mark is THE IT GUY with endless
        creativity - He is one of the most productive person I have
        ever met. Always curious. Always takes initiatives. In a
        personal manner, Mark is also enthusiastic and very caring
        which makes him someone you would be friends with for life.`,
        src: `assets/img/testimonials/testimonials-2.jpg`,
        name: `Rovi Anne Obamos`,
        position: `Administrative Assistant`,
        company: `Roxas Government`
    },
    {
        message: `Mark has proven time and again to be quick on his feet in
        adapting new technologies and implementing tried and tested
        solutions to a variety of end-user needs. He has a keen
        observational mind and can analyze requirements and
        synthesize the right approach to a myriad of projects.`,
        src: `assets/img/testimonials/testimonials-3.jpg`,
        name: `Jorge Cosgayon`,
        position: `Full Stack Developer/Solutions Architect`,
        company: ``
    },
    {
        message: `You're a coding Rocks star Mark! Keep it up!`,
        src: `assets/img/testimonials/testimonials-4.jpg`,
        name: `Jayson Repil`,
        position: `Quality Assurance`,
        company: `Roxas Government`
    },
    {
        message: `Mark Jun has been a qualified professor teaching different
        programming languages and other IT professional subjects in
        the University. With his acquired skills in the field of IT,
        he has grown professionally and is now a solid IT
        specialist. A passionate, self disciplined and open minded
        person, full of dreams to create a better future in the IT
        world.`,
        src: `assets/img/testimonials/testimonials-5.jpg`,
        name: `Jonah Gafate`,
        position: `Dean, College of Computer Studies`,
        company: `Filamer Christian University`
    },
    {
        message: `Mark was an excellent mentor, not only to me but also to all
        of my colleagues who were under his guiding hand during his
        time as our mentor. When it comes to the field of
        technology, particularly "programming", Mark's talent is
        unrivaled; But he is always willing to help and share his
        knowledge with others, and he is not selfish in this regard.
        I know this because I worked with him for a company once,
        and that's where I saw Mark's goodness in effect. I can say
        that Mark is a big part of my current success, and I owe him
        a huge respect and gratitude for that.`,
        src: `assets/img/testimonials/testimonials-6.jpg`,
        name: `Kim Ralf Mentino`,
        position: `Co-Founder`,
        company: `Coders-Tribe IT Solutions`
    },
    {
        message: `It has been a real pleasure working with Sir Mark. He has
        been very professional and very clear in all communications,
        which I appreciate.`,
        src: `assets/img/testimonials/testimonials-7.jpg`,
        name: `Neo Jay Andong`,
        position: `Software Engineer`,
        company: `Telcom Live Content Inc.`
    },
    {
        message: `Mark Jun was my college adviser and he is really good in
        programming, he can learn a programming language in no time.
        I could say that I'm one of his successor in IT industry.
        He's really a good friend of mine. mua mua tsup tsup!`,
        src: `assets/img/testimonials/testimonials-8.jpg`,
        name: `Martin Rupert Bulquerin`,
        position: `Front-end Web Developer`,
        company: `XtendOps Inc.`
    },
    {
        message: `Mark is one of my favorite, he is the team leader of our
        project and allocate appropriate tasks to his teammates.
        Mark is very excellent in all aspect of project development,
        he has a wide skill set and has a high level of professional
        knowledge of his job and the one I loved the most about Mark
        aside from his strong work ethic, he has a humurous
        character and soothing personality that creates a positive
        atmosphere.`,
        src: `assets/img/testimonials/testimonials-9.jpg`,
        name: `Joyce E. Digma`,
        position: `Project Manager`,
        company: `Telcom Live Content Inc.`
    },
    {
        message: `Mark as I know him works smart which is typical of a 
        computer programmer. He finds solution to problems and works on it 
        with passion.`,
        src: `assets/img/testimonials/testimonials-10.jpg`,
        name: `Rey Cordenillo`,
        position: `Manager`,
        company: `Capiz Electric Cooperative`
    },
]

function loadTestimonials() {
    const testimonials = data.map((value) => {
        return `
            <div class="swiper-slide">
                <div class="testimonial-item" data-aos="fade-up">   
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        ${value.message}
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                        src="${value.src}"
                        class="testimonial-img"
                        alt="${value.name}"
                    />
                    <h3>${value.name}</h3>
                    <h4>
                        ${value.position}<br />
                        ${value.company}
                    </h4>
                </div>
            </div>
        `
    })

    const testimonial_wrapper = document.querySelector('.swiper-wrapper');
    testimonial_wrapper.innerHTML = testimonials;

}

 loadTestimonials();
