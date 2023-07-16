import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Textblock from '@/components/textblock'
import Card from '@/components/card'

const content = {
  mainContent: 'hello and welcome to my website. please feel free to look around.',
  certificationContent: 'salesforce proficient - view my certifications',
  certificationSub: 'career',
  variviContent: 'varivi - saving lives by the kilogram',
  variviSub: 'startup, career',
  loremContent: 'lorem ipsum - sit dolor amet consectetur'
}

export default function Home() {
  return (
    <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-8'>
      <Navbar caller='index' />
      
      {/* --- INTRO --- */}
      <Textblock content={content.mainContent} classes='w-full mx-auto mt-36 col-span-full'/>

      {/* --- HERO --- */}
      <Card imageUrl='sf500.png' headerContent={content.certificationContent} subContent={content.certificationSub} classes='w-full mx-auto mt-20 md:col-span-full flex flex-col text-left' />

      {/* --- CARDS --- */}
      <Card imageUrl='sf500.png' headerContent={content.loremContent
      } subContent={content.certificationSub} classes='w-full mx-auto mt-20 flex flex-col text-left' />
      <Card imageUrl='sf500.png' headerContent={content.loremContent
      } subContent={content.certificationSub} classes='w-full mx-auto mt-20 flex flex-col text-left' />
      <Card imageUrl='sf500.png' headerContent={content.loremContent
      } subContent={content.certificationSub} classes='w-full mx-auto mt-20 flex flex-col text-left' />
      <Card imageUrl='sf500.png' headerContent={content.loremContent
      } subContent={content.certificationSub} classes='w-full mx-auto mt-20 flex flex-col text-left' />

      <Footer />
    </div>
  )
}
