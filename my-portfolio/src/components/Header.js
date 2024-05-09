import img from '../1570748510155.jpeg'
import './Header.css'
import psimg from '../Screenshot 2024-05-08 at 8.38.37 PM.png'
import himg from '../Screenshot 2024-05-08 at 8.48.26 PM.png'
import iimg from '../Screenshot 2024-05-08 at 10.15.26 PM.png'

export const Home = () => {
    return(
        <>
            <div className='header'>
                <div className="welcome">
                    <h1>Welcome to My Portfolio</h1>
                    <img src={img}/>
                </div>
                <div className='intro'>
                <div className='section'>
                <div className='body'>
                    <div className="wrapper">
                        <p>Coding Is</p>
                        <div className="words">
                            <span>Fun</span>
                            <span>Interesting</span>
                            <span>Amazing</span>
                            <span>Awesome</span>
                            <span>Creative</span>
                        </div>
                    </div>
                </div>
                </div>
                    <h2>A little bit about <span className='me'>me</span>...</h2>
                    <p>
                        Hello! My name is Amari Brooks! 
                        I am currently a senior attending Brown University, where my main focus/concentration is 
                        in <span className='ai'>Artificial Intelligence</span> and <span className='cv'>Computer Vision</span>. When it comes
                        to <span className='ui'>UI/UX</span> I really enjoy using simple design principles that make my website minimalistically beautiful, and accessible 
                        to a variety of users. Overall, with my skills, I hope to create a more inclusive environment that garners a more fun experience for my users.
                    </p>
                </div>
            </div>
            <div className='cases'>
                <div className='case1'>
                    <img src={psimg}/>
                    <div className='info'>
                    <h3 className='right'>Personas and Storyboarding</h3>
                    <p>
                        The purpose behind this assignment was to build a comprehensive understanding of user needs and
                        experiences through the development of personas from real-life observations, which quickly and effectively identifiyed a user's 
                        struggle areas and priotize the product roadmap accordingly (In a way that fully captures the user's experience, both the good and the 
                        bad). This included formulating unbiased
                        questions based on empirical observation and user interviews, allowing me to gain insight into how to design for the 
                        user rather than desiging and interface for myself. By Integrating observations and personas into an illustrative narrative
                        with storyboards, were we ale to quickly visualize who and what we were designing for.
                    </p>
                    </div>
                </div>
                <div className='case2'>
                    <div className='info'>
                        <h3 className='left'>Development</h3>
                        <p>
                            The objective of assignment was to practice conducting competitive analysis between competitor companies, that what
                            I am able to learn how to identify strengths and weakness in design elements used by industry designers. And to create a 
                            functional aggregator and filter interface using react, which allows us to practice using react as a frontend framework. Specifically
                            for this project I chose to do a herbal store interface, as I myself am very interested in botanicals. I also chose to use
                            a herbal store as my interface because I wanted to illustrate how using a filter and sorter for price and ingredients would
                            provide an overall better user experience. 
                        </p>
                    </div>
                    <img src={himg}/>
                </div>
                <div className='case3'>
                <img src={iimg}/>
                    <div className='info'>
                        <h3 className='left'>Iterative Design</h3>
                        <p>
                            The purpose of this assignment was to get accustomed to the entire iterative design process 
                            by solving a design problem, this allowed me and my partner to take a problem statement all the
                            way to a clickable prototype. This assignment was also supposed to help us build collaborative designs 
                            with a team, this mirrors the cross-functional teams in the industry that co-design and co-build
                            as a team. By doing such project, we are creating an interactive interface that will serve as an effective Portfolio
                            piece, so that we are able to solve an existing problem with feedback from existing startups and finish the semester with a complete
                            portfolio piece. And lastly, this project was to help us interact with a startup founder as a client, so that we can learn
                            how to ask clarifying questions, receive and incorporate feedback, and meet our client's expectations. 

                        </p>
                    </div>
                    
                </div>

            </div>
            
        </>

    )
}