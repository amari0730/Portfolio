import './Iterative.css'
import img from '../Screenshot 2024-05-10 at 12.02.17 AM.png'
import brief1 from '../Screenshot 2024-04-23 at 1.58.48 PM.png'
import brief2 from '../Screenshot 2024-04-23 at 1.58.59 PM.png'
import brief3 from '../Screenshot 2024-04-23 at 1.59.10 PM.png'
import brief4 from '../Screenshot 2024-04-23 at 1.59.20 PM.png'
import brief5 from '../Screenshot 2024-04-23 at 1.59.39 PM.png'
import flow1A from '../Screenshot 2024-04-23 at 1.35.33 PM.png'
import flow2A from '../Screenshot 2024-04-23 at 1.35.07 PM.png'
import flow3A from '../Screenshot 2024-04-23 at 1.34.47 PM.png'
import flow4A from '../Screenshot 2024-04-23 at 1.34.36 PM.png'
import flow1B from '../Screenshot 2024-04-23 at 1.34.16 PM.png'
import flow2B from '../Screenshot 2024-04-23 at 1.33.58 PM.png'
import flow3B from '../Screenshot 2024-04-23 at 1.32.46 PM.png'
import flow4B from '../Screenshot 2024-04-23 at 1.33.04 PM.png'
import flow1AA from '../Screenshot 2024-04-24 at 2.55.18 PM.png'
import flow2AA from '../Screenshot 2024-04-24 at 2.55.38 PM.png'
import flow1BB from '../Screenshot 2024-04-24 at 2.55.53 PM.png'
import flow2BB from '../Screenshot 2024-04-24 at 2.56.10 PM.png'

import { FaArrowRight } from "react-icons/fa";
import lofi from '../Screenshot 2024-04-23 at 2.35.08 PM.png'
import lofi2 from '../Screenshot 2024-04-23 at 2.35.25 PM.png'
import lofi22 from '../Screenshot 2024-04-24 at 9.17.02 PM.png'
import lofi23 from '../Screenshot 2024-04-24 at 9.19.41 PM.png'
import pro from '../Screenshot 2024-04-24 at 2.50.50 PM.png'
import pro2 from '../Screenshot 2024-04-24 at 2.50.34 PM.png'
import hifi from '../Screenshot 2024-04-24 at 8.59.43 PM.png'
import hifi0 from '../Screenshot 2024-04-24 at 2.41.07 PM.png'


export const Iterative = () => {
    return (
        <div className='container'>
            <h1>Iterative Design</h1>
            <div className='context-problem'>
                <h2>Context/Problem</h2>
                <p>
                    The context of this project was to work with founders of an application and come up with a design that
                    solves the problem that they pose. Particularlly with our project, we had to design an application that
                    allowed the user to synchronize their code with the other code base. Another issues, was we needed to notify
                    the user of the application when the code base was out of synch, and provide an efficient way that lets them
                    update the code and those changes be accessible to the other parties of the code base. This was important because
                    when you are working on a team with individuals who wear multiple hats, essentially not just developers, its important
                    the changes to the code are translated properly in a way that is understood by the individuals working on the project,
                    no matter what their position is.
                </p>
            </div>
            <div className='research'>
                <h2>Research</h2>
                <img src={img}/>
                <p>
                    When it comes to the research behind this project, most of that involved the brief that we were provided. Firstly,
                    I read through the brief and noted the companies that inspired our founder (swimm.io, github, google docs, figma). Essentially,
                    we looked at the unique componentsof each appllication and noted how we can use those features to solve the problem that was stated above.
                    One thing that stood out to both my partner and I was the asychronous code feature that was offered by swimm.io. As you can see, you 
                    are able to see the out of date code beside the updated code portion, and the user has the ability to accept or decline the 
                    changes provided in the 'updated code' snippet. However we wanted to take this idea a step further because as we were told in the brief
                    not all members of the team are in development, meaning that there would probably be some project managers or individuals who are not 
                    necessarily accustomed to how to code. And this was something that we noted as important, because we wanted to make sure that the team had\
                    the ability to properly translate what exactly needs to be done across multiple groups of people working on the team. 
                </p>
            </div>
            <div className='process'>
                <div className='brief'>
                    <h2>Process</h2>
                    <div className='briefs'>
                        <img src={brief1}/>
                        <img src={brief2}/>
                        <img src={brief3}/>
                        <img src={brief4}/>
                        <img src={brief5}/>
                    </div>
                    <p>
                    The first part of this assignment was the processing of the brief. Essentially, me and my partner had recieved input from the founder Ryan Bolick,
                    stating information about the company, design problems that the company was facing, who there is their customer base, what are their customer
                    motivations and points,  what is their success metric, their competitors (we considered this to be their 'inspiration'), and any miscillaneous information.
                    After reading this brief my partner and I had some questions regarding what exactly we needed to do regarding the problem that was presented
                    to us. Most of our questions to the founder centered around us clarifying the task,the layout of the application, and the brief, considering that we did not have access to the 
                    application yet.
                    </p>
                </div>
                <div className='flow1A'>
                    <div className='flow'>
                        <img src={flow1A} />
                        <img src={flow2A} />
                        <img src={flow3A} />
                        <img src={flow4A} />
                    </div>
                    <p>
                        The purpose of this flow is to illustrate what happens 
                        when a user chooses to update the outdated code. Specifically 
                        this flow follows what happend when a student selects 'reselect' 
                        in the code update box. Ultimately thr user will then be taken to a screen 
                        where the rest of the page is greyed out and the code would be highlited. Users 
                        can then update this code, which goes back to the main screen, this time updating 
                        the code update box to verifying. finally, when updated, the update code block says 
                        up to date and the notification on the top of the file turns green indicating 
                        everything is consistent.
                    </p>
                </div>
                <div className='flow2A'>
                    <div className='flow'>
                        <img src={flow1B} />
                        <img src={flow2B} />
                        <img src={flow3B} />
                        <img src={flow4B} />
                    </div>
                    <p>
                    The purpose of this flow is to illustrate what happens when a user clicks on the update button. 
                    again just like the previous flow the entirety of the page is greyed out except for the updates 
                    section. The update section lists the changes and outdated code. The user then has the ability to 
                    select on the outdated code, which will then take them to the code update block with that particular
                    code as its snippet.
                    </p>
                    
                </div>
                <div className='flow1B'>
                    <div className='flow'>
                        <img src={flow1AA} />
                        <img src={flow2AA} />
                    </div>
                    <p>
                        The purpose of my partner's flow is to show how the user can move from the personal notes to the 
                        tech docs. This also illustrates how to navigatge from the suggestion updates in tech docs 
                        at context level.
                    </p>
                </div>
                <div className='flow2B'>
                    <div className='flow'>
                        <img src={flow1BB} />
                        <img src={flow2BB} />
                    </div>
                    <p>
                    Purpose of my partner's flow is to globally see all changes. And it also shows how to interact to create new version updates
                    </p>
                </div>
                <div className='lofi'>
                    <div className='fi-cont'>
                        <img src={lofi} />
                        <img src={lofi2} />
                    </div>
                    <div className='a-ref'>
                        <a href="https://www.figma.com/file/kLyrc4n6pVS0mjnVRz09rj/DriverAI?type=design&node-id=185-37&mode=design&t=cDS7A2Jtkl3M0w7L-0">Link to loFi</a>
                        <a href="https://www.loom.com/share/7575fe9b3fc04eb88762ee8e41c9ed77?sid=fef3bf8a-31d8-4342-b689-58e44d8db7d0">Link to loFi Loom</a>
                    </div>
                    <p>
                        The main implementation of the LoFi Design for the Dynamic Docs is the inclusion of the code block that 
                        contains both the suggested code and the out of date code. At the top of the page the user has an alert 
                        message that tells them the status of their code, to see if it needs to be updated. In addition to these 
                        areas we also marked areas in the repo file tree that indicates which files have been altered and need to 
                        be updated. We ensured that the personal notes page includes markings that indicate areas where the code may 
                        be inconsistent in the code base. It also includes a learge alert at the top of the page indicating the there 
                        is some inconsistency in the code, however this alert is less informative.
                    </p>
                </div>
                <div className='lofi'>
                    <div className='fi-cont'>
                        <img src={lofi22} />
                        <img src={lofi23} />
                    </div>
                    <div className='a-ref'>
                        <a href="https://www.figma.com/file/kLyrc4n6pVS0mjnVRz09rj/DriverAI?type=design&node-id=185-37&mode=design&t=cDS7A2Jtkl3M0w7L-0">Link to loFi 2</a>
                    </div>
                    <p>
                        The main thing that the founder wanted us to focus more on how we display updates, when the source code changes. 
                        Specifically, how can we alert the user that there was a change to the technical docs. The founder also wanted to 
                        use some sort of version control, focusing on the history of changes that have been made. We implemented this feature 
                        by ensuring that out of date code is crossed out and updated code is highlighted.
                    </p>
                </div>
                <div className='protoype'>
                    <div className='fi-cont'>
                        <img src={pro} />
                        <img src={pro2} />
                    </div>
                    <p>
                    This was our initial implementation of the Hi Fi website. Making sure that we included all of the things that were in the loFi, 
                    in addition to some additional changes like the removal of the two code snippets.
                    </p>
                </div>
                <div className='hifi'>
                    <div className='fi-cont'>
                        <img src={hifi0} />
                        <img src={hifi} />
                    </div>
                    <div className='a-ref'>
                        <a href="https://www.figma.com/file/kLyrc4n6pVS0mjnVRz09rj/DriverAI?type=design&node-id=0-1&mode=design&t=XjLk99O3vhjj9XZC-0">Link to hiFi</a>
                        <a href="https://www.loom.com/share/8ea987a94469431e982a9a21a3c9bb20?sid=077d5aee-2a54-43db-80f2-29ba4ba76b4e">Link to hiFi Loom</a>
                    </div>

                    <p>
                        For the final Hifi Design we decided to add more error markers in the code file tree (on the left-hand side of the Dynamic docs), 
                        this allows the person to have a visual indication of where exactly the out of sync code can be found. We also made sure that when an area of 
                        the code has been updated, the personal notes is also updated, whether that be amending new text that is highlighted a different color, or crossing 
                        out old text and making that another color as well. Overall, this new design showcases both our own and the developers feedback of how we should design 
                        the overall website. Also based on the founder feedback we updated the personal notes to look more like a google doc, considering that that was one of our founder's 
                        inspiration for the site. In terms of the overall coloring, the black color is from the commit, purple is suggested change by AI, and green represents the change made 
                        by another person who hasn't committed yet.
                    </p>
                </div>
            </div>
            <div className='solution'>
                <h2>Solution</h2>
                <p>
                    Ultiamtely for the solution of this code, we decided to ensure that the developer is updated by the different colors found in the personal notes.
                    As stated above the varying colors (black-commit, purple-suggested by AI, green-change made by another person) allows the team to have a better depiction
                    of what exactly was changed by other members versus what was changed by AI. Also, in terms of functionality, we allow the user to assign a person to inspect a code 
                    snippet. This allows for product managers or those who aren't responsible for the code to directly assign some developer to perform that task. We also added the 
                    original idea of having the old snippet sit right next to the suggested code snippet. At first, we thought it was cluttering the code, however, after consideration and 
                    hearing back from our founder we decided it would be best to incorporate that feature. 
                </p>
            </div>
            <div className='learning'>
                <h2>Learnings</h2>
                <p>
                    One thing that I learned from this experience was how to work with a team who has drastically different design ideas than myself. In my opinion,
                    this allowed me to explore different types of design that I would have never considered before and I am grateful to have had this experience. I also 
                    learned how to work with a founder of a company, which is really helpful especially considering I myself want to start y own company. I was able to get insight
                    into how a company manuevers. Laslty, what I learned was the expansive nature of figma, after first my idea was limited however after working with my partner
                    I have seen that there is a lot of functionality on that website and that it is a good tool to use when prototyping an application. 
                </p>
            </div>
            <div className='role'>
                <h2>Role</h2>
                <p>
                    For this project my partner, Nico Perez, and I worked together to ensure that met the terms of the founder. We both did our research to help add design elements
                    throughout the iterative designs. Nico was responsible for creating the functionality of the lofi and hifi frame, however we both worked on ensuring that the 
                    static features, such as colors and text was alsigned with what exactly our founder would appreciate. 
                </p>
            </div>
        </div>
    )
}