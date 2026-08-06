// Met en évidence dans la navigation la section actuellement à l'écran.

const navLinksList = document.querySelectorAll(".custom-nav-links a[href^='#']");

// Associe chaque lien à sa section cible (on ignore les ancres orphelines).
const navTargets = Array.from(navLinksList)
    .map((link) => ({ link, section: document.querySelector(link.hash) }))
    .filter((entry) => entry.section);

if (navTargets.length) {
    const setActive = (activeSection) => {
        navTargets.forEach(({ link, section }) => {
            link.classList.toggle("is-active", section === activeSection);
        });
    };

    const navObserver = new IntersectionObserver(
        () => {
            // On retient la dernière section dont le haut est déjà passé
            // sous la navbar : plus stable qu'un simple seuil de visibilité.
            const offset = window.innerHeight * 0.35;
            let current = null;

            navTargets.forEach(({ section }) => {
                if (section.getBoundingClientRect().top <= offset) {
                    current = section;
                }
            });

            setActive(current);
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0,
        }
    );

    navTargets.forEach(({ section }) => navObserver.observe(section));
}
