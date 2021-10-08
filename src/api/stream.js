import { NavLink } from "react-router-dom";
import axios from "../axios";

// export const getStreams = async () => {
//   return {
//     code: 200,
//     message: "",
//     data: sampleStreams,
//   };
// };

export const getStreams = async () => {
  const response = await axios({
    method: "get",
    url: "/apps/discover"
  })
  return response;
}

// export const getStream = async (id) => {
//   var stream = sampleStreams.find((stream) => stream.id == id);
//   stream = {
//     ...stream,
//     streamer: sampleStreamer,
//     games: sampleGames,
//   };

//   return {
//     code: 200,
//     message: "",
//     error: null,
//     data: stream,
//   };
// };

// const sampleStreams = [
//   {
//     id: "1",
//     streamerId: "1",
//     title: "Thetan Arena",
//     hardware: "MSI Aegis RS 11th Gen",
//     hourlyRate: Math.round(Math.random() * 20),
//     duration: Math.round(Math.random() * 24),
//     startTime: 1632536814826 + Math.round(Math.random() * 100),
//     rating: Math.round(Math.random() * 5),
//     image: "./assets/img/demo.png",
//   },
//   {
//     id: "2",
//     streamerId: "1",
//     title: "Thetan Arena",
//     hardware: "MSI Aegis RS 11th Gen",
//     hourlyRate: Math.round(Math.random() * 20),
//     duration: Math.round(Math.random() * 24),
//     startTime: 1632536814826 + Math.round(Math.random() * 100),
//     rating: Math.round(Math.random() * 5),
//     image: "./assets/img/demo.png",
//   },
//   {
//     id: "3",
//     streamerId: "1",
//     title: "Thetan Arena",
//     hardware: "MSI Aegis RS 11th Gen",
//     hourlyRate: Math.round(Math.random() * 20),
//     duration: Math.round(Math.random() * 24),
//     startTime: 1632536814826 + Math.round(Math.random() * 100),
//     rating: Math.round(Math.random() * 5),
//     image: "./assets/img/demo.png",
//   },
//   {
//     id: "4",
//     streamerId: "1",
//     title: "Thetan Arena",
//     hardware: "MSI Aegis RS 11th Gen",
//     hourlyRate: Math.round(Math.random() * 20),
//     duration: Math.round(Math.random() * 24),
//     startTime: 1632536814826 + Math.round(Math.random() * 100),
//     rating: Math.round(Math.random() * 5),
//     image: "./assets/img/demo.png",
//   },
//   {
//     id: "1",
//     streamerId: "1",
//     title: "Thetan Arena",
//     hardware: "MSI Aegis RS 11th Gen",
//     hourlyRate: Math.round(Math.random() * 20),
//     duration: Math.round(Math.random() * 24),
//     startTime: 1632536814826 + Math.round(Math.random() * 100),
//     rating: Math.round(Math.random() * 5),
//     image: "./assets/img/demo.png",
//   },
//   {
//     id: "2",
//     streamerId: "1",
//     title: "Thetan Arena",
//     hardware: "MSI Aegis RS 11th Gen",
//     hourlyRate: Math.round(Math.random() * 20),
//     duration: Math.round(Math.random() * 24),
//     startTime: 1632536814826 + Math.round(Math.random() * 100),
//     rating: Math.round(Math.random() * 5),
//     image: "./assets/img/demo.png",
//   },
//   {
//     id: "3",
//     streamerId: "1",
//     title: "Thetan Arena",
//     hardware: "MSI Aegis RS 11th Gen",
//     hourlyRate: Math.round(Math.random() * 20),
//     duration: Math.round(Math.random() * 24),
//     startTime: 1632536814826 + Math.round(Math.random() * 100),
//     rating: Math.round(Math.random() * 5),
//     image: "./assets/img/demo.png",
//   },
//   {
//     id: "4",
//     streamerId: "1",
//     title: "Thetan Arena",
//     hardware: "MSI Aegis RS 11th Gen",
//     rating: Math.round(Math.random() * 5),
//     hourlyRate: Math.round(Math.random() * 20),
//     duration: Math.round(Math.random() * 24),
//     startTime: 1632536814826 + Math.round(Math.random() * 100),
//     image: "./assets/img/demo.png",
//   },
// ];

// const sampleGames = [
//   {
//     title: "Thetan Arena",
//     image: "img",
//   },
//   {
//     title: "Free Fire",
//     image: "img",
//   },
//   {
//     title: "Squid Game",
//     image: "img",
//   },
// ];

// const sampleStreamer = {
//   name: "Anh Huynh",
//   location: "Singapore",
//   sessions: 134,
// };
