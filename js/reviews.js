// console.log('Please check my sanity sir')

class TabLink {
    constructor(tab) {

        // assign DOM reference for current tab
        this.tabElement = tab;
        
        // get current tab 'data-tab' value
        this.tabData = this.tabElement.dataset.tab;

        // get reviews with the matching 'data-tab' value
        this.reviews = document.querySelectorAll(`.review[data-tab="${this.tabData}"]`);

        // convert nodelist of matching reviews to an array
        // Use .map to make a new instance of the TabReview class for each
        // save resulting array of matching TabReview class objects
        this.reviews = Array.from(this.reviews).map(review => new TabReview(review));

        // add event listener to current tab that invokes the TabLink method 
        this.tabElement.addEventListener('click', () => {
            this.selectTab();
        });
    }
    selectTab() {

        // select both tabs, remove 'active-tab' class from each
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active-tab'));

        // select all reviews, set their display style to "none".
        const reviews = document.querySelectorAll('.review');
        reviews.forEach(review => review.style.display = "none");

        // add the 'active-tab' class to the current tab
        this.tabElement.classList.add('active-tab');

        // takes this.reviews array from the constructor
        // and for each review (which is an instantiation of a class)
        // runs the selectReview method to make it display
        this.reviews.forEach(review => review.selectReview());
    }
}

class TabReview {
    constructor(review) {

        // assign DOM reference for current review
        this.reviewElement = review;
    }
    selectReview() {

        // make current review display
        this.reviewElement.style.display = "block";
    }
}



// selecting all tabs (there are only two - Guides and Explorers)
let tabs = document.querySelectorAll('.tab');

// forEach tab, make a new instantiation of the TabLink class
tabs.forEach(tab => new TabLink(tab));