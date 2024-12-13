import logo from './logo2.png';
import credit_star from './credit_star.png';
import profile_icon from './profile_icon.png';
import star_icon from './star_icon.png';
import star_group from './star_group.png';
import sample_img_1 from './sample_img_1.png';
import sample_img_2 from './sample_img_2.png';
import step_icon_1 from './step_icon_1.png';
import step_icon_2 from './step_icon_2.png';
import step_icon_3 from './step_icon_3.png';
import profile_img_1 from './profile_img_1.png';
import profile_img_2 from './profile_img_2.png';
import profile_img_3 from './profile_img_3.png';
import rating_star from './rating_star.png';
import facebook_icon from './facebook_icon.png';
import instagram_icon from './instagram_icon.png';
import twitter_icon from './twitter_icon.png';
import lock_icon from './lock_icon.png';
import logo_icon from './logo1.png';
import user_icon from './user_icon.png';
import email_icon from './email_icon.png';
import cross_icon from './cross_icon.png';


export const assets = {
    logo,
    credit_star,
    profile_icon,
    star_icon,
    star_group,
    sample_img_1,
    sample_img_2,
    rating_star,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    lock_icon,
    logo_icon,
    user_icon,
    email_icon,
    cross_icon,
}


export const stepsData = [
    {
        title: 'Describe Your Vision',
        description: 'Type a phrase, sentence or paragraph that describes the image you want to create.',
        icon:step_icon_1,
    },
    {
        title: 'Watch the Magic',
        description: 'Our AI-powered engine will transform your vision into a high-quality, unique image in seconds.',
        icon:step_icon_2,
    },
    {
        title: 'Download & Share',
        description: 'Instantly download your image or share it with the world directly from our platform.',
        icon:step_icon_3,
    }
]


export const testimonialsData = [
    {
        image: profile_img_1,
        name: 'Donald Jackman',
        role: 'Graphic Designer',
        stars: 5,
        text: "I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier." 
    },
    {
        image: profile_img_2,
        name: 'Yiran',
        role: 'Content Creator',
        stars: 4,
        text: "I've been using bg.removal for over a year now and I'm so happy with the results. It's so easy to use and the images I create are always amazing." 
    },
    {
        image: profile_img_1,
        name: 'Zhixiong',
        role: 'Marketing Manager',
        stars: 5,
        text: "I've been using bg.removal for a few months now and I'm really satisfied with the results. The images I create are always unique and creative." 
    }
]

export const plans = [
    {
        id:'Basic',
        price: 10,
        credits: 100,
        desc: 'Best for personal use.'
    },
    {
        id:'Advanced',
        price: 50,
        credits: 500,
        desc: 'Best for business use.'
    },
    {
        id:'Business',
        price: 250,
        credits: 5000,
        desc: 'Best for enterprise use.'
    }
]

