import { NavLink } from "react-router-dom";

export const getListings = async () => {
  return {
    code: 200,
    message: "",
    data: sampleListings,
  };
};

export const getListing = async (id) => {
  return {
    code: 200,
    message: "",
    error: null,
    data: sampleListings.find((listing) => listing.id == id),
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
    hourlyRate: Math.round(Math.random() * 20),
    duration: Math.round(Math.random() * 24),
    startTime: 1632536814826 + Math.round(Math.random() * 100),
    rating: Math.round(Math.random() * 5),
    image: "./assets/img/demo.png",
  },
];
