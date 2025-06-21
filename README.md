## Unit Assignment: Kudos Board

Submitted by: **Katherine Hall**

Deployed Application (**required**): [Kudos Board Deployed Site](https://codepath-project3-1.onrender.com/)

### Application Features

#### CORE FEATURES

##### Home Page

- [ ] **Home Page Display**
  - [ ] Home page includes the following features:
    - [x] Header
    - [x] Banner
    - [x] Search bar
    - [x] List of boards
    - [x] Footer
- [ ] **Display Boards**
  - [x] Users can view a list of all boards in a grid view on the home page.
  - [x] For each board displayed, users can see:
    - [x] An image/gif
    - [x] A board title
- [ ] **Filter Boards**
  - [ ] Home page includes navigation bar, drop down, or some other mechanism which allows users to filter boards by the following categories:
    - [x] All/Home (displays all boards)
    - [x] Recent (displays the 6 most recently created boards)
    - [x] Celebration
    - [x] Thank you
    - [x] Inspiration
  - [x] When a category is clicked, boards matching the specified category are displayed.
- [ ] **Search Functionality**
  - [x] Users can use a search bar to search for boards by title on the home page.
  - [ ] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search Button
    - [x] Clear Mechanism
  - [ ] Boards with a title containing the search query in the text input field are displayed in a grid view when the user:
    - [x] Presses the Enter key
    - [x] Clicks the Submit/Search button 
  - [x] User can delete all text from the text input field. 
  - [x] When all text is cleared from the text input field, all boards are displayed in a grid view
- [ ] **View Board** 
  - [x] Users can click on a board in the grid view to navigate to a new page containing that board's details.
- [ ] **Add New Board**
  - [x] Users can create a new board on the home page.
  - [ ] When creating a new board, users can specify the:
    -  [x] Title (required)
    - [x] Category (required)
    - [x] Author (optional)
  - [ ] Items listed as required above must have a value to succesffuly create a new board.
  - [x] When the board is successfully created, it appears in the grid of boards. 
- [ ] **Delete Board**
  - [x] User can delete boards on the home page. 
  - [x] When the board is deleted, the board disappears from the grid of boards. 

##### Board Page

- [ ] **Display Cards**
  - [x] For a given board, the board's page displays a list of all cards for that board in a grid view.
  - [ ] For each card should displayed, users can see the card's:
    - [x] Message
    - [x] Gif 
    - [x] Number of upvotes
    - [x] Delete button
- [ ] **Add New Card**
  - [x] Users can make a new card associated with the current board. 
  - [ ] To successfully create a new card, users must specify the following:
    - [ ] Text message (required).
    - [ ] A gif users can search for and select within the form using the [GIPHY API](https://developers.giphy.com/docs/api/) (required).
  - [ ] Users are given the option to specify the author of the card.
  - [ ] When the new card is successfully created, it appears in the grid of cards. 
- [x] **Upvote Card**
  - [ ] Users can upvote a card.
  - [ ] Update the vote count on the card tile when a user clicks the upvote icon.
  - [ ] When the upvote icon is clicked the upvote count increases by 1. 
  - [ ] A user can upvote a card multiple times. 
- [x] **Delete Card**
  - [ ] Users can delete cards.
  - [ ] When the user clicks the delete button for a card, the card disappears from the grid of cards. 
- [ ] **Deployment**
  - [ ] Website is deployed via Render.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 

####  Stretch Features

- [ ] **Comments**
  - [ ] Users can add comments to cards.
  - [ ] To successfully add a comment, users must specify a text message body.
  - [ ] Users are given the option to specify the author of the comment.
  - [ ] Users can view comments on card in a pop-up modal that displays the card's:
    - [ ] Text message 
    - [ ] Gif
    - [ ] Author (if specified)
    - [ ] A list of the card's comments and each comment's:
      - [ ] Message body
      - [ ] Author (if specified)
  - [ ] Users can add multiple comments to a single card.
- [ ] **Dark Mode** 
  - [ ] Users can toggle between light mode and dark mode using a button displayed on the:
    - [ ] Home Page
    - [ ] Board Pages
  - [ ] When the button is clicked, the color theme switches to the opposite of the current mode. 
  - [ ] When dark mode is enabled:
    - [ ] Text and icons use a light color
    - [ ] The background uses a dark color
    - [ ] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [ ] When light mode is enabled:
    - [ ] Text and icons use a dark color
    - [ ] The background uses a light color
    - [ ] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [ ] The chosen mode (light or dark) persists when navigating from home page to board pages and vice versa.
  - [ ] When the user first visits the site the theme defaults to light mode.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast in both light and dark mode. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 
- [ ] **Pinned Cards**
  - [ ] Users can pin a card to the top of the board.
  - [ ] A Pin button is displayed on each card.
  - [ ] When the user clicks the Pin button of an unpinned card:
    - [ ] The card moves to the top of the grid view for that board.
    - [ ] There is some visual feedback to indicate a card's pin status (e.g., a pin icon, a border highlight).
    - [ ] The pin action is saved so that the card remains pinned after page refreshes.
  - [ ] When the user clicks the Pin button of a pinned card:
    - [ ] The card returns to its original position in the grid based on its creation time or to the end of the grid.
    - [ ] The card's pin status (e.g., a pin icon or highlight)  is removed.
    - [ ] The unpin action is saved so that the card remains unpinned after page refresh.
  - [ ] Pinned cards always appear at the top of the board, above unpinned cards.
  - [ ] If multiple cards are pinned, they maintain their pinned order based on the time they were pinned.
    - [ ] More recent pins should appear first.
- [ ] The pinned state of a card persists when:
  - [ ] navigating away from and back to the board.
  - [ ] refreshing the page. 
 


### Walkthrough Video

<div>
    <a href="https://www.loom.com/share/a29cfcf0938a4ad587bc2721f744eb5c">
      <p>Vite + React - 20 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/a29cfcf0938a4ad587bc2721f744eb5c">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/a29cfcf0938a4ad587bc2721f744eb5c-9604595619398354-full-play.gif">
    </a>
</div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Overall, I felt the Week 2 Labs and Project helped with using React to build the frontend and all the basic features like displaying cards and the search functionality. Week 3 Labs helped with understanding databases and the backend. It was pretty straightforward to implement the database of boards and cards. It was a little difficult to understand the methods to connect the frontend and backend as there was not as much guidance on that portion. This entails using react-router or fetch calls. But, overall, this project was a good way to connect all the pieces together from frontend to backend. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would work on implementing the stretch features. Additionally, some extra touches on the styling would make it more appealing to the eye. I would also try to fix my footer because it does not actually stay pinned to the bottom. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Overall, everything went pretty smoothly. However, initially, deleting a board caused an unexpected error, and it wasn’t clear why at first. After looking deeper, the issue turned out to be a foreign key constraint. Boards with associated cards couldn’t be deleted because the related cards were still in the database. Initially, I tried adding onDelete: Cascade to the cards field in the Board model to allow cascading deletes. However, this was still causing an error because Prisma requires the onDelete rule to be defined on the child side of the relationship. I moved the onDelete: Cascade attribute to the board field in the Card model, which resolved the issue and allowed boards to be deleted along with their associated cards. This was a pretty interesting learning moment!
