const Footer = () => {
    const today = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {today} CodeCraft Labs. All rights reserved.</p>
        </footer>
    );
};

export default Footer;