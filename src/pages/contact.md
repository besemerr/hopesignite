---
layout: base.njk
title: "Contact ~ Hopes Ignite"
---
<!-- Your page content goes here -->
<main>
    <section>
        <h1>CONTACT<br></h1>
            <h4>Booking • Press • Fan Mail</h4>
            <form
                action="mailto:rbesemer@gmail.com"
                method="post"
                enctype="text/plain"
                style="
                margin-top: 2rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                max-width: 400px;
                margin-inline: auto;
                "
            >
                <form
                style="
                    margin-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 400px;
                    margin-inline: auto;
                "
                >
                <input
                    type="text"
                    placeholder="Name"
                    required
                    style="padding: 0.75rem"
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    style="padding: 0.75rem"
                />
                <textarea
                    rows="5"
                    placeholder="Message"
                    style="padding: 0.75rem"
                ></textarea>
                <button class="btn" type="submit">Send Message</button>
                </form>
            </form>
    </section>
</main>
