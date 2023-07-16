export default function Textblock({ content, classes }) {

    const classNames = `text-2xl ${classes}`

    return (
        <p className={classNames}>{content}</p>
    )
}