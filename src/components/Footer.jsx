import React from 'react';
import styles from './Footer.module.css';

// Simple SVG Icons
const DiscordIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
);

const TwitterIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
    </svg>
);

const RedditIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 11.5c0-1.65-1.35-3-3-3-.96 0-1.8.46-2.32 1.14-1.67-1.12-3.83-1.8-6.18-1.91l1.69-5.4 4.53 1.25a2.5 2.5 0 0 0 2.45 2.05c1.38 0 2.5-1.12 2.5-2.5S20.55 1.5 19.17 1.5c-1.11 0-2.03.74-2.35 1.76L11.83 2l-1.93 6.13c-2.4.08-4.63.77-6.33 1.92C3.04 9.38 2.2 8.5 1.2 8.5c-1.66 0-3 1.35-3 3 0 1.15.65 2.15 1.61 2.66C-1 14.85-1 15.54-1 16.3c0 4.14 5.2 7.5 11.63 7.5s11.62-3.36 11.62-7.5c0-.73-.02-1.42-.08-2.09.91-.53 1.53-1.5 1.53-2.61l.3-.1zm-15.15 3.3c0-1.05.85-1.9 1.9-1.9s1.9.85 1.9 1.9-.85 1.9-1.9 1.9-1.9-.85-1.9-1.9zm8.56 3.69c-1.57 1.57-4.23 1.63-4.78 1.63s-3.21-.06-4.78-1.63c-.16-.16-.16-.43 0-.58.16-.16.43-.16.58 0 1.25 1.24 3.35 1.34 4.2 1.34s2.95-.1 4.2-1.34c.16-.16.43-.16.58 0 .15.16.15.42 0 .58zm-.66-1.78c-1.05 0-1.9-.85-1.9-1.9s.85-1.9 1.9-1.9 1.9.85 1.9 1.9-.85 1.9-1.9 1.9z" />
    </svg>
);

const Footer = () => {
    const scrollToTop = () => {
        // Scroll the parent container with overflow
        const mainContent = document.querySelector('[class*="App_content"]');
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.leftSection}>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}>💋</div>
                    </div>
                    <p className={styles.description}>
                        ExciteMe.AI — A creator-driven platform for<br />
                        AI chats, image generation, and character<br />
                        monetization, combining chat, content, and<br />
                        community in one place.
                    </p>
                    <p className={styles.copyright}>
                        © 2025 Exciteme.ai. All rights reserved.
                    </p>
                </div>

                <div className={styles.linksSection}>
                    <div className={styles.linkGroup}>
                        <h4>Legal</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>

                    <div className={styles.linkGroup}>
                        <h4>Support</h4>
                        <a href="#">Help center</a>
                        <a href="#">Contact Us</a>
                        <a href="#">FAQ</a>
                    </div>

                    <div className={styles.linkGroup}>
                        <h4>Social</h4>
                        <a href="#" className={styles.socialLink}>
                            <span className={styles.icon}><DiscordIcon /> Discord</span>
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <span className={styles.icon}><TwitterIcon /> Twitter</span>
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <span className={styles.icon}><RedditIcon /> Reddit</span>
                        </a>
                    </div>
                </div>
            </div>

            <button className={styles.scrollToTop} onClick={scrollToTop}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;
