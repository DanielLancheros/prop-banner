
const gitHubLink ="https://github.com/daniellancheros";
const fullYear = new Date().getFullYear();

export default function Footer() {

    return(
    <footer>
        <p>&copy; {fullYear} </p>
        <p><a href={gitHubLink} target="_blank" rel="noreferrer">GitHub</a></p>
    </footer>
    );
}
