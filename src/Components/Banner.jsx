import Container from '../Shared/Container';
import bannerHeroImg from '../assets/image/herobanner.webp';
import ButtonOutline from './UI/ButtonOutline';

const Banner = () => {
  return (
    <section className='bg-gradient-to-tr from-[#fd6d87] to-[#fbb71d] mb-5'>
      <Container>
        {/* banner wrapper  */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 pb-10 lg:pb-0'>
          <div>
            <img
              src={bannerHeroImg}
              alt='banner side image'
              className='w-[32rem]'
            />
          </div>
          <div className='space-y-5'>
            <h1 className='text-6xl font-black text-white stroke-black'>
              Time is Money
            </h1>
            <h1 className='text-4xl font-black text-slate-200 stroke-black'>
              We are
            </h1>
            <h1 className='text-3xl font-black text-slate-300 stroke-black mb-8'>
              help to proper utilize your time.
            </h1>
            <ButtonOutline displayName="Let's Explore" path='dashboard' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
