import axios from "../axios";

export const getAllowApps = async () => {
  return {
    data: [
      {
        app_name: "Golden",
        vote_count: 100,
        publisher: "Harry Styles",
        voted: true,
      },
      {
        app_name: "Adore You",
        vote_count: 432,
        publisher: "Harry Styles",
        voted: true,
      },
      {
        app_name: "Lights Up",
        vote_count: 232,
        publisher: "Harry Styles",
        voted: false,
      },
      {
        app_name: "Sign of the Times",
        vote_count: 32,
        publisher: "Harry Styles",
        voted: false,
      },
      {
        app_name: "Golden",
        vote_count: 100,
        publisher: "Harry Styles",
        voted: false,
      },
      {
        app_name: "Adore You",
        vote_count: 432,
        publisher: "Harry Styles",
        voted: false,
      },
      {
        app_name: "Lights Up",
        vote_count: 232,
        publisher: "Harry Styles",
        voted: false,
      },
      {
        app_name: "Sign of the Times",
        vote_count: 32,
        publisher: "Harry Styles",
        voted: false,
      },
      {
        app_name: "Golden",
        vote_count: 100,
        publisher: "Harry Styles",
        voted: false,
      },
      {
        app_name: "Adore You",
        vote_count: 432,
        publisher: "Harry Styles",
        voted: false,
      },
      {
        app_name: "Lights Up",
        vote_count: 232,
        publisher: "Harry Styles",
        voted: false,
      },
      {
        app_name: "Sign of the Times",
        vote_count: 32,
        publisher: "Harry Styles",
        voted: false,
      },
    ],
  };

  const response = await axios({
    method: "get",
    url: "/apps/getAllowApps",
    withCredentials: true,
  });
  return response;
};

export const voteApp = async (app_name) => {
  const response = await axios({
    method: "post",
    url: "/apps/voteApp",
    data: {
      app_name: app_name,
    },
    withCredentials: true,
  });
  return response;
};

export const getListings = async () => {
  return {
    code: 200,
    message: "",
    data: sampleListings,
  };
};

export const getListing = async (id) => {
  var listing = sampleListings.find((listing) => listing.id === id);
  listing = {
    ...listing,
    streamer: sampleStreamer,
    games: sampleGames,
  };

  return {
    code: 200,
    message: "",
    error: null,
    data: listing,
  };
};

const sampleListings = [
  {
    id: "1",
    streamerId: "1",
    title: "Thetan Arena",
    hardware: "MSI Aegis RS 11th Gen",
    hourlyRate: Math.round(Math.random() * 20),
    duration: Math.round(Math.random() * 24),
    startTime: 1632536814826 + Math.round(Math.random() * 100),
    rating: Math.round(Math.random() * 5),
    image: "./assets/img/demo.png",
  },
  {
    id: "2",
    streamerId: "1",
    title: "Thetan Arena",
    hardware: "MSI Aegis RS 11th Gen",
    hourlyRate: Math.round(Math.random() * 20),
    duration: Math.round(Math.random() * 24),
    startTime: 1632536814826 + Math.round(Math.random() * 100),
    rating: Math.round(Math.random() * 5),
    image: "./assets/img/demo.png",
  },
  {
    id: "3",
    streamerId: "1",
    title: "Thetan Arena",
    hardware: "MSI Aegis RS 11th Gen",
    hourlyRate: Math.round(Math.random() * 20),
    duration: Math.round(Math.random() * 24),
    startTime: 1632536814826 + Math.round(Math.random() * 100),
    rating: Math.round(Math.random() * 5),
    image: "./assets/img/demo.png",
  },
  {
    id: "4",
    streamerId: "1",
    title: "Thetan Arena",
    hardware: "MSI Aegis RS 11th Gen",
    hourlyRate: Math.round(Math.random() * 20),
    duration: Math.round(Math.random() * 24),
    startTime: 1632536814826 + Math.round(Math.random() * 100),
    rating: Math.round(Math.random() * 5),
    image: "./assets/img/demo.png",
  },
  {
    id: "1",
    streamerId: "1",
    title: "Thetan Arena",
    hardware: "MSI Aegis RS 11th Gen",
    hourlyRate: Math.round(Math.random() * 20),
    duration: Math.round(Math.random() * 24),
    startTime: 1632536814826 + Math.round(Math.random() * 100),
    rating: Math.round(Math.random() * 5),
    image: "./assets/img/demo.png",
  },
  {
    id: "2",
    streamerId: "1",
    title: "Thetan Arena",
    hardware: "MSI Aegis RS 11th Gen",
    hourlyRate: Math.round(Math.random() * 20),
    duration: Math.round(Math.random() * 24),
    startTime: 1632536814826 + Math.round(Math.random() * 100),
    rating: Math.round(Math.random() * 5),
    image: "./assets/img/demo.png",
  },
  {
    id: "3",
    streamerId: "1",
    title: "Thetan Arena",
    hardware: "MSI Aegis RS 11th Gen",
    hourlyRate: Math.round(Math.random() * 20),
    duration: Math.round(Math.random() * 24),
    startTime: 1632536814826 + Math.round(Math.random() * 100),
    rating: Math.round(Math.random() * 5),
    image: "./assets/img/demo.png",
  },
  {
    id: "4",
    streamerId: "1",
    title: "Thetan Arena",
    hardware: "MSI Aegis RS 11th Gen",
    rating: Math.round(Math.random() * 5),
    hourlyRate: Math.round(Math.random() * 20),
    duration: Math.round(Math.random() * 24),
    startTime: 1632536814826 + Math.round(Math.random() * 100),
    image: "./assets/img/demo.png",
  },
];

const sampleGames = [
  {
    title: "Thetan Arena",
    image: "img",
  },
  {
    title: "Free Fire",
    image: "img",
  },
  {
    title: "Squid Game",
    image: "img",
  },
];

const sampleStreamer = {
  name: "Anh Huynh",
  location: "Singapore",
  sessions: 134,
};
