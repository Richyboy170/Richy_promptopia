import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br/>
        {/* <br className="max-md:hidden" /> */}
        <span className="orange_gradient text-center">
          AI_Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI o bur;lunvuuabvubz;ribvlidbr;bnz;vr;zdnv;bz;jbvzb;b
      </p>

      <Feed/>
    </section>
  )
}

export default Home