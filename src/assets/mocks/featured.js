import moment from 'moment'

export default [
    {   
        id:'1',
        title : "Sample Title",
        date : moment().format('MMMM DD, YYYY'),
        categories : ['Tech Culture', 'Tech News'],
        link : "#",
        image : 'img1.jpg',
        author : 'Ramachandra',
        description : 'This is a sample dummy description for the sake of demonstration. This may extent to upto 4-5 lines to check any increased text description can deform the grid layout'
    },
    {
        id:'2',
        title : "Sample Title 2",
        date : moment().format('MMMM DD, YYYY'),
        categories : ['cloud'],
        link : "jacoco",
        image : 'img2.jpg'
    },
    {
        id :'3',
        title : "Sample Title",
        date : moment().format('MMMM DD, YYYY'),
        categories : ['Tech Culture', 'Tech News'],
        link : "#",
        image : 'img3.jpg'
    },
    {
        id:'4',
        title : "Sample Title",
        date : moment().format('MMMM DD, YYYY'),
        categories : ['Tech Culture', 'Tech News'],
        link : "#",
        image : 'img4.jpg'
    }
]