import './BlogPage.scss';
import { BlankSpace, BlogGrid, PageHero, Pagination } from '../../../components/customer';

const posts = [
    {
        _id: '003',
        title: 'Benefits of Sushi: Is Raw Fish Safe to Eat?',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat…',
        thumbnail:
            'https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/blog-22-1024x683.jpg',
        category: 'Countryside',
        createdAt: '2022-02-07T15:28:26.301Z',
    },
    {
        _id: '004',
        title: 'Benefits of Sushi: Is Raw Fish Safe to Eat?',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat…',
        thumbnail:
            'https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/blog-22-1024x683.jpg',
        category: 'Countryside',
        createdAt: '2022-02-07T15:28:26.301Z',
    },
    {
        _id: '005',
        title: 'Benefits of Sushi: Is Raw Fish Safe to Eat?',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat…',
        thumbnail:
            'https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/blog-22-1024x683.jpg',
        category: 'Countryside',
        createdAt: '2022-02-07T15:28:26.301Z',
    },
    {
        _id: '006',
        title: 'Benefits of Sushi: Is Raw Fish Safe to Eat?',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat…',
        thumbnail:
            'https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/blog-22-1024x683.jpg',
        category: 'Countryside',
        createdAt: '2022-02-07T15:28:26.301Z',
    },
    {
        _id: '007',
        title: 'Benefits of Sushi: Is Raw Fish Safe to Eat?',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat…',
        thumbnail:
            'https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/blog-22-1024x683.jpg',
        category: 'Countryside',
        createdAt: '2022-02-07T15:28:26.301Z',
    },
    {
        _id: '008',
        title: 'Benefits of Sushi: Is Raw Fish Safe to Eat?',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat…',
        thumbnail:
            'https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/blog-22-1024x683.jpg',
        category: 'Countryside',
        createdAt: '2022-02-07T15:28:26.301Z',
    },
    {
        _id: '009',
        title: 'Benefits of Sushi: Is Raw Fish Safe to Eat?',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat…',
        thumbnail:
            'https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/blog-22-1024x683.jpg',
        category: 'Countryside',
        createdAt: '2022-02-07T15:28:26.301Z',
    },
];

const BlogPage = () => {
    console.log('blog page..!');
    return (
        <div className='blogPage-wrapper'>
            <PageHero title='Blog' />
            <BlankSpace />
            <div className='blogPage'>
                <BlogGrid posts={posts} />
                <Pagination />
            </div>
            <BlankSpace />
        </div>
    );
};

export default BlogPage;