import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg09 from "../images/tour-img09.jpg";

const tours = [
  {
    id: "01",
    title: "Hari ",
    city: "Odissa",
    address: "Somewhere in Odissa",

    desc: "Eat, Play, Cook with foodie private chef",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: false,
  },
  {
    id: "02",
    title: "Lia",
    city: "Jaipur",
    address: "Somewhere in Jaipur",

    desc: "Discover the Enchanting Coastal Town",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: false,
  },
  {
    title: "Kiran",
    city: "Mangalore",
    address: "Somewhere in Mangalore",

    desc: "Explore the mesmerizing Cappadocia! Trekking, amazing stone landscapes, turkish food and more!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "04",
    title: "Nick",
    city: "Kochi",
    address: "Somewhere in Kochi",

    desc: "Exploring the wilderness",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: false,
  },
  {
    id: "05",
    title: "Devi",
    city: "Bangalore",
    address: "Somewhere in Bangalore",

    desc: "7 days Lifetime Safari Trip ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Chris",
    city: "Gujarat",
    address: "Somewhere in Gujarat",

    desc: "Discover Jordan's Six Stunning ancient Roman cities with a local",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Diana",
    city: "Chennai",
    address: "Somewhere in Chennai",

    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Jai",
    city: "Delhi",
    address: "Somewhere in Delhi",

    desc: "A week of Summer Lovin' in Goa: Exploring the Best of India's Beach Paradise",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
];

export default tours;
