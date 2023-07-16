import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Textblock from '@/components/textblock'
import Card from '@/components/card'

export default function About() {
    return (
        <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-8'>
            <Navbar caller='about' />
            <Textblock content='hello, my name is marcus' classes='w-full mx-auto mt-36 col-span-full text-center'/>
            
            <Footer />
        </div>
    )
}