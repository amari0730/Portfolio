import './Development.css'
import img from '../IMG_0279_2.jpg'
import spotify from '../Spotify-089b80c169d44fcfa110aebc6801289f.jpg'
import youtube from '../youtube-logo.webp'
import amazon from '../amazon-pictures-aype7dlgxx58jb8f.jpg'
import chart from '../Screenshot 2024-05-09 at 7.03.58 PM.png'
import app from '../Screenshot 2024-05-09 at 7.16.03 PM.png'
import appshp from '../Screenshot 2024-05-09 at 7.49.55 PM.png'
import app2shp from '../Screenshot 2024-05-09 at 7.50.10 PM.png'

export const Development = () => {
    return (
        <div className='container'>
            <div className='header'>
                <h1>Development</h1>
            </div>
            <div className='context-problem'>
                <h2>context/problem</h2>
                <p> 
                    There are multiple things that the assignment focuses on. Firstly, one of the reasons
                    behind this assignment was to learn how to perform a competitive analysis. When it comes
                    to design, being able to compare multiple designs is very important. Considering that the 
                    design process typically involves looking at other people's designs, it's important to
                    have the skill to critically analyze the features of a particular design and how those
                    features of the design impact the overall application. Another, reason that this assignment was
                    very important was to learn how to create a front-end application using react. Considering 
                    the fact that React is a very popular framework, it's important to be able to use it to create
                    nicely designed websites. 
                </p>
            </div>
            <div className='research'>
            <h2>research</h2>
                <p> 
                    When it comes to research, one of the things that I did to properly prepare myself for this assignment
                    was looking at a bunch of websites and seeing how their 'list' features were incorporated into their application.
                    It became clear that these companies had used their list features to enhance the user experience. And as someone
                    who wants to make my website accessible to multiple groups of people, I was inspired by the idea of being able to 
                    manipulate lists to accomodate the overall experience of the user. Putting myself in a user's shoes showcased that 
                    if I were a user to an application, one thing that I would want is a way to filter through my lists, this would
                    significantly decrease the time a user spends time to find a product, overall enhacing their experience on the 
                    application. Another feature I found imporant was the idea of sorting. When it comes to being abls to sort a list based upon
                    a particular feature, this also enhances the user's experience.  
                </p>
            </div>
            <div className='analysis'>
                <ul className='names'>
                    <li>
                        <div className='company'>
                            <span>Spotify</span>
                        </div>
                    </li>
                    <li>
                        <div className='company'>
                            <span>Amazon</span>
                        </div>
                    </li>
                    <li>
                        <div className='company'>
                            <span>Youtube</span>
                        </div>
                    </li>
                </ul>
                <ul className='logos'>
                    <li>
                        <div className='company'>
                            <img src={spotify}/>
                        </div>
                    </li>
                    <li>
                        <div className='company'>
                        <img src={amazon}/>
                        </div>
                    </li>
                    <li>
                        <div className='company'>
                        <img src={youtube}/>
                        </div>
                    </li>
                </ul>
                <div className='company-descriptions'>
                    <p>
                        The reason I chose these three companies for my development assignment was because of how frequently
                        I use these websites. Ultimately I thought it would be interesting to critically analyze these websites
                        by comparing their features that I find to be important for the user. For this particular section of the assignment
                        I choose to compare each company using one of these five features (Easy to Use, Customizable, Sharing options, Integration with other features,
                        and Notifications)
                    </p>
                </div>
                <div className='features'>
                    <h2>Features</h2>
                    <ul>
                        <li>
                            <div className='feature'>
                                <span>Easy to use</span>
                                <p>
                                    Ultiamtely this feature asks how simple is the company's list features? Do you find it to be 
                                    relatively difficult or do you find it to be relatively simple to use?
                                </p>
                            </div>
                        </li>
                        <li>
                        <div className='feature'>
                                <span>Customizable</span>
                                <p>
                                    Are you able to customize your user experience? Examples i.e Changing your list name, 
                                    change the list thumbnail photo.
                                </p>
                            </div>
                        </li>
                        <li>
                        <div className='feature'>
                                <span>Sharing Options</span>
                                <p>
                                    Are you able to easily share your list/s with others?
                                </p>
                            </div>
                        </li>
                        <li>
                        <div className='feature'>
                                <span>Integration with Other Features</span>
                                <p>
                                    Does the company take the time to ensure that this list is accessible throughout the website? Does
                                    the company reduce the need to switch between different 'areas' of the application in order to 
                                    update your list? 
                                </p>
                            </div>
                        </li>
                        <li>
                        <div className='feature'>
                                <span>Notifications</span>
                                <p>
                                    Do you ever receive notifications regarding your lists?
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className='chart'>
                        <h3>Comparison Chart</h3>
                        <img src={chart} />
                            <p>
                                Regarding Spotify, their list feature is relatively easy to use. Is very customizable, allowing the
                                user to both name and select a picture for their list. Spotify does allow a sharing feature, which allows
                                the user to easily share their list of songs. And when it comes to integration with other features, spotify allows
                                you to add songs to your playlist from wherever on the site, allowing a more integrated approach with its features. However spotify does
                                not have notifications, which makes sense considering that one can just pull up their playlist when they want to listen to it. However,
                                I would say that when it comes to special playlists curated by spotify, you can in fact recieve a notification, hence the dash rather than an X.
                                Regarding Youtube, their playlist feature is easy to use, it was as simple as a few clicks. The playlist are also customizable, allowing the 
                                user to rename their playlist and even select an image for them as well. However, their sharing feature was a little 
                                to abstract, although it is possible to share your playlists, from what I gathered, one would need to share each 
                                video within their playlist seperately, hence the dashed line because it possible but inefficient. And when it comes to integration
                                with other features, I would say that youtube does a good job, you can add videos to your playlist throughout the application. And finally, when it came to 
                                Youtube's Notifications, they too like spotify dont necessary send a notification, however they do send notifications about playlists or videos
                                you may like based on your playlists and other features, hence why I used a dash line instead of a complete X in that category. Finally, regarding
                                Amazon, I would say that their list feature was a little less intuitive to use, requiring the user to click on multiple things 
                                before they can add something to their shopping list, hence the X in that category. However, the list was fully customizable, allowing the user to change the name of the list
                                And even the image. Also, their integration with other features was a little difficult, similar to the easy to use, there were too many buttons
                                that one had to press to even get to the list managment section, however it was in some may integrated with other features of the application, hence the dash rather than the 
                                complete X. And lastly, Amazon does a good job ensuring that you are notified about your 
                                wishlists or shopping cart lists. Ultiamtely in terms of differences Spotify is a more user friendly application compared to the 
                                other companies when it comes to creating lists, this is supported by their idea behind creating playlists in an easy and 
                                quick way, allowing the user to have more more curated experience that can be shared with them and their community
                                . Youtube, although similar to spotify, seems to be more driven by having the user search for things, essentially making the
                                playlist creation time a little longer. And amazon, seems to have the objective of selling you something, and they want the user to buy instantly,
                                rather than saving their items for later purchase. And even when the user does so, they make sure to frequently notify them about their list,
                                adding to the idea that their mission is for the user to by right now or soon.
                            </p>
                    </div>

                </div>
                
            </div>
            <div className='app'>
                    <h2>My application</h2>
                    <img src={app}/>
                    <div className='description'>
                        <p>
                            When it comes to the theme of my website, I chose to do a herbal store. 
                            The intention of my website is to help shoppers of herbal products find and 
                            work with their favorites more easily. In terms of filter I plan on filtering products
                             based on usages and ingredients. In terms of sorting, I plan to sort based on the prices. 
                             And for aggregation I plan to use a shopping cart.
                        </p>
                    </div>
                    <h3>Features List</h3>
                    <div className='feature-description'>
                        <ul>
                            <li>
                                <div className='remove'>
                                    <h4>Remove Item from shopping list</h4>
                                    <img src={app2shp} />
                                    <p>I chose this feature because unlike the other applications that I had surveyed earlier, 
                                        they did not have an explicit remove button, and when it comes to accessibility, its important
                                        that these features are prominent to the user, to ensure that essentially a user can have full control on how 
                                        they arrange their shopping list. This differs from the other sites because they expect you to use their products, they 
                                        make things such as removal of lists a little more difficult entrapping the user.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className='input'>
                                    <h4>Input amount of an item you want to purchase</h4>
                                    <img src={appshp} />
                                    <p>
                                        I chose this feature because I thought that it would be important to have the ability to choose how much 
                                        of a particular item you may want. Having the ability to choose the amount of something you want, allows the 
                                        user to essentially have more control over their experience, which is a very important aspect of application
                                        development.
                                    </p>
                                </div> 
                            </li>
                        </ul>
                    </div>
                    <div className='link'>
                        <h2>Link to Website</h2>
                        <a href='https://herbal-store-lsep.vercel.app/'>Herbal Store</a>
                    </div>

            </div>
            <div className='solution'>
            <h2>solution</h2>
                <p>
                    When it comes to the solution of my application, I would say that creating filter, sort, and aggregate
                    features enhances the users experience when trying to search for a particular product. For instance when 
                    I use a companies website, one thing that I use regularly is the sort price feature (something that I 
                    incorporated into my application), because it narrow my inquiries, ultiamtely making my shopping experience
                    significantly easier than having to look through all of the items. Another solution my site provided was the 
                    ability to add more or subtract less of a particular item to you shopping cart. I figured doing this would be significantly
                    better than making the user go back and forth between the shopping cart and the overall items list. And when
                    it comes to being able to remove items from your shopping cart, I decided that that feature would be beneficial because
                    it allows the user to remove items whether they accidently added something to their cart or if they decided that they no longer want
                    the item.
                </p>
            </div>
            <div className='learnings'>
            <h2>learnings</h2>
                <p>
                    One thing that I learned after this assignment was how to properly design a react application. Using react
                    allowed me to learn how to make my website more responsive, which is very important when you want to garner
                    an inclusive environment for your users. Another thing that I learned was how to anaylze different features from
                    multiple companies and compare those features to see what works and what doesn't work. This being a crucial skill because 
                    a lot of design involves using other people's designs as inspirtaion, and being able to critically analyze these features
                    is very important for your own designs.
                </p>
            </div>
            <div className='role'>
            <h2>role</h2>
                <p>
                    For this assignment the role that I played was the developer and researcher. Before implementing my website
                    I did a competitive analysis of multiple companies websites to see what exactly a user might want. And when it comes
                    to the development, I was responsible for coming up with the application and the implementation of its features, such
                    as filtering, sorting, aggregation, and the features associated with the shopping cart.
                </p>
            </div>
        </div>
    )
}