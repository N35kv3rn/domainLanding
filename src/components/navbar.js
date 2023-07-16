import Link from "next/link";

export default function Navbar({ caller }) {

    const classNames = 'w-full col-span-full ml-auto mr-auto mt-12 py-6 sticky top-0 flex justify-end text-xl bg-neutral-100'

    if (caller == 'index') {
        return (
            <div className={classNames}>
                <Link className='mx-4 underline' href='/'>home</Link>
                <Link className='ml-4' href='about'>about me</Link>
            </div>
        )
    } else if (caller == 'about') {
        return (
            <div className={classNames}>
                <Link className='mx-4' href='/'>home</Link>
                <Link className='ml-4 underline' href='about'>about me</Link>
            </div>
        )
    }
    
}