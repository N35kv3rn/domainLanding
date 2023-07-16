export default function Footer({ classes }) {

    const headerStyles = 'text-sm mt-4';
    const contentStyles = 'text-base mt-1 text-neutral-600';
    const classNames = 'w-full mx-auto mt-64 mb-16 col-span-full flex flex-col md:flex-row md:justify-between md:text-center'

    return(
        <div className={classNames}>
            <div className='flex flex-col'>
                <p className={headerStyles}>marcus neskvern</p>
                <p className={contentStyles}>salesforce developer</p>
            </div>
            <div className='flex flex-col'>
                <p className={headerStyles}>contact</p>
                <p className={contentStyles}>marcus@neskvern.com</p>
            </div>
            <div className='flex flex-col'>
                <p className={headerStyles}>social</p>
                <p className={contentStyles}><a href='https://www.linkedin.com/in/marcus-neskvern-4b7a11178/' target='blank'>linkedin</a> & <a href='https://www.instagram.com/marcusneskvern/' target='blank'>instagram</a></p>
            </div>
        </div>
    )
}