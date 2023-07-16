export default function Card({ url, headerContent, subContent, classes }) {

    const CLASSES = `flex flex-col ${classes}`

    return (
        <div className={CLASSES}>
            <a className='w-full h-72 bg-neutral-200 hover:scale-95 hover:cursor-pointer duration-300 ease-in-out' href={url}></a>
            <h2 className='text-xl mt-6'>{headerContent}</h2>
            <p className='text-xl text-neutral-500'>{subContent}</p>
        </div>
    )
}