import './Personas.css'
import img from '../Screenshot 2024-05-09 at 8.33.09 PM.png'
import obs from '../Screenshot 2024-05-09 at 9.02.13 PM.png'
import que from '../Screenshot 2024-05-09 at 9.28.36 PM.png'
import per from '../Screenshot 2024-05-09 at 9.30.02 PM.png'
import per1 from '../Screenshot 2024-05-09 at 9.49.15 PM.png'
import per2 from '../Screenshot 2024-05-09 at 9.49.36 PM.png'
import str from '../Screenshot 2024-05-09 at 9.53.55 PM.png'
import kio from '../Screenshot 2024-05-10 at 6.04.29 PM.png'
import kio2 from '../Screenshot 2024-05-10 at 6.10.09 PM.png'
export const Personas = () => {
    return (
        <div className="container">
            <h1>Personas</h1>
            <div className='context-problem'>
                <h2>Context/Problem</h2>
                <p>
                    This assignment provided me with the context and skills required for future assignments throughought the course.
                    When it comes to design, it's important that your design tells a story to the user. And that your user
                    is capable of interpreting that story effectively. Thus, when it comes to this assignment, I incorporated a user-centric approach
                    that allows the user to be the center of the operation and for me to be an observer of them in their world/element.
                    The importance of this comes from a lesson that I learned in class and will continuously see throughout my career;
                    It is the users' experiences that make a product, not solely the developers. When I develop products, they are for the user
                    not just for me, so it is important that I take the time to learn how to properly assess a user's experience and do whatever 
                    I can to help enhance that experience. 
                </p>
            </div>
            <div className='research'>
                <h2>Research</h2>
                <p>
                    When it comes to the research I had conducted for this project, I first had to step into the role of a user. I had to ask
                    myself what questions are most pertinent as a user who is either using an interface for the first time or as an accustomed user. 
                    Considering that users fall within a spectrum between these two categories, I figured focusing on both these experiences
                    would be crucial for encapsulating the entire 'user' experience. And so I devised questions that would decipher the familiarity and mental 
                    states a user has with a particular interface. What I found from my independent research was that users typically have a broad range of thoughts regarding
                    how to use an interface. Some users, being more accustomed to the devices, find that they aren't thinking about the complexities of the 
                    interface, but rather are more focused on just completeing their particular task. However, those who are less familiar the interface find themselves
                    thinking about the complexity of the interface in addition to their task at hand. 
                </p>
            </div>
            <div className='process'>
                <h2>Process</h2>
                <div className='interface'>
                    <img src={kio}/>
                    <img src={kio2}/>
                </div>
                <p>On the <span>left</span> is the interface Bruknow, and on the <span>right</span> is how the kiosk was set up</p>
                <ul>
                    <li>
                        <div className='preparation'>
                            <img src={img}/>
                            <p>
                                This part of the process required devising questions that capture the overall
                                experience of a user. It was important to come up with these questions before deciding on 
                                an interface becuase it allows for you to create a more ubiquitous story that can be applied across
                                multiple user experiences, reinforcing the idea that design should be user-centric. And after coming up with
                                my questions, I was able to pick an interface that I thought would provide adequate data regarding user experiences.
                                When it came to selecting this interface, I ensured that I followed a criteria that the interface was both not to easy to use
                                or one that is too complex to use. Again, I want to  capture a broad range of user experiences and using something that 
                                is too easy or difficult would not provide usuable data.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='observations'>
                        <img src={obs}/>
                            <p>
                                THe second part of this process involved collecting data. When collecting data, I chose to use an unbiased approached. 
                                In other words, as I watched the users use the interface, I sat out of their view and recorded their general interactions
                                with the interface. I made sure to capture general trends that I had observered before asking the subjects questions about their 
                                experience. As discussed in class, the observer effect does impact the results of an epxeriement. And although I typically
                                am against collecting data without a user's permission, I do think that recording observations of a user using a public interface
                                is ethically allowed because it does not entail giving away any of their confidential information such as their names. And for this
                                part of the the assignment, I chose to interview 3 individuals, each with a different 'persona', ensuring that various groups of people
                                were selected and provided feedback, diversifying the results and providing a more universal understanding of a user's experience.
                            </p>
                        </div>
                    </li>
                    <li>
                    <div className='questioning'>
                        <img src={que}/>
                            <p>
                                The third part of this process involved more data collection, but this time from the questions that I had curated before the experiment. 
                                When I asked my questions, I noticed that my data had captured 3 people with varying degrees of familiarity with the 
                                interface. The first user, appeared to be the most accustomed to the interface, claiming that they used it regularly for 
                                their research. The second user, being an alumni, was the least familiar with the interface, stating that this was their first time using 
                                the interface. And the third user, being a current student, wasn't fully familiar with the interface, but was able to use its basic features
                                to their goal. 
                            </p>
                        </div>
                        
                    </li>
                    <li>
                    <div className='personas'>
                    <div className='graph'>
                        <div className='personas-img'>
                            <img src={per}/>
                        </div>
                        <div className='researcher'>
                            <h2><span>Researcher</span></h2>
                            <img src={per1}/>
                        </div>
                        <div className='alumni'>
                            <h2><span>Alumni</span></h2>
                            <img src={per2}/>
                        </div>
                    </div>
                            <p>
                                The fourth part of this process involved creating the personas. As depicted, I crafted the personas using the data from a middle aged, white, male researcher 
                                and a middle aged black male Alumni. When I analyzed their answers to my questions, I noticed that they had starkly different experiences when using the interface.
                                The researcher, lets call them subject A, stated that they had no problems using the interface and would recommend this interface to others. Subject A also said that they
                                would not recommend any changes. The alumni, subject B, stated that they had multiple problems when trying to use the interface. They were unaware of some of 
                                its features, including its filter. Subject A represents those familiar with the interface and who commonly use it. Subject B represents a person who is more distant from the
                                software, which is important for this project because there are user's who are not familiar with the interface and their experience should be captured. 
                            </p>
                        </div>
                        
                    </li>
                    <li>
                        <div className='storyboard'>
                            <img src={str} />
                            <p>The final step of this process was to illustrate a story about the user using the interface.
                                For this story, I captured an individual who would need assistance using the interface. The reason
                                I chose this depiction is because I believe at any time someone will need help, and its more important
                                to cover the cases where the individuali sless familiar with the interface because those are the individuals
                                who I am trying to target with my design. Like I said in my intro, I want to create an inclusive environment for all individuals.
                            </p>
                        </div>
                        
                    </li>
                </ul>
            </div>
            <div className='solution'>
                <h2>Solution</h2>
                <p>
                    My design solution is pretty simple. If I were able to go back and design this interface,
                    I would set up the filters feature so that it was more accessible. Rather than having it off to the side during
                    the search, I would move the filter feature to the center of the page near the search bar, allowing the user to select
                    it while they are making an inquiry. I would also make sure to put the items that are available near the top of the page.
                    I would ensure that they appear before the other options, because typically people are looking to 'check out' or retrieve a 
                    digital copy of the book rather than be told that it is not in stock or online and they must request it from another library. 
                </p>
            </div>
            <div className='learnings'>
                <h2>Learnings</h2>
                <p>What I learned from this experience is that it is important to capture a user's experience And when it comes to design,
                    it's best practice to treat the user as if they are unaware of how to use the interface, because this allows for the interface
                    to be more inclusive. I also learned that just because individuals use an interface, it doesn't mean that they fully understand all 
                    of the features that are available for that interface, hence the importance of highlighting an interface's features for all peoples,
                    to ensure that they are able to maxmize their usage of the interface. 
                </p>
            </div>
            <div className='role'>
                <h2>Role</h2>
                <p>
                    Overall the role I played in this assignment was a UI/UX researcher. I conducted my own research regarding what a user
                    might experience when using an interface in general. I collected the data myself by observing and questions users who were
                    using the interface. I lasltly
                </p>
            </div>
        </div>
    )
}