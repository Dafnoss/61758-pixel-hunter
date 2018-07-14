const allFooter = (data) => {
    const footer =
    `<footer class="footer">
        <a href="https://htmlacademy.ru" class="social-link social-link--academy">${data.devs.name}</a>
        <span class="footer__made-in">${data.devs.description}</span>
        <div class="footer__social-links">
            <a href="${data.devs.twitter.link}" class="social-link  social-link--tw">${data.devs.twitter.name}</a>
            <a href="${data.devs.insta.link}" class="social-link  social-link--ins">${data.devs.insta.name}</a>
            <a href="${data.devs.facebook.link}" class="social-link  social-link--fb">${data.devs.facebook.name}</a>
            <a href="${data.devs.vk.link}" class="social-link  social-link--vk">${data.devs.vk.name}</a>
        </div>
    </footer>`;

    return footer
};

export default allFooter;