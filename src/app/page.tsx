import Carousel from "@/components/custom/Carousel";
import Navbar from "@/components/custom/Navbar";
import HeroSection from "@/components/custom/HeroSection";
import Cards from "@/components/custom/Cards";
import Footer from "@/components/custom/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Carousel />
      <Footer />
    </div>
  );
}
// import Image from "next/image";
// import { CalendarDays, ChevronRight, Play, Search } from "lucide-react";

// // Helper function to format date
// const formatDate = (dateString: string) => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
// };

// export default function BloombergStyleNews() {
//   const techCrunchNews = {
//     source: {
//       id: "techcrunch",
//       name: "TechCrunch",
//     },
//     author: "Ivan Mehta",
//     title:
//       "Amazon will host its Prime Big Deals Day sales event on October 8 and 9 | TechCrunch",
//     description:
//       'Amazon said today that it will host its Prime Day-like sales event, "Prime Big Deals Day," on October 8-9. For the last two years, the ecommerce company',
//     url: "https://techcrunch.com/2024/09/16/amazon-will-host-its-prime-big-deals-day-sales-event-on-october-8-and-9/",
//     urlToImage:
//       "https://techcrunch.com/wp-content/uploads/2024/07/wicked-monday-jxhM5Ni46zw-unsplash.jpg?resize=1200,800",
//     publishedAt: "2024-09-17T05:43:20Z",
//     content:
//       'Amazon said today that it will host its Prime Day-like sales event, "Prime Big Deals Day," on October 8-9. For the last two years, the ecommerce company has scheduled its fall event in October and ha… [+1552 chars]',
//   };

//   const fedNews = [
//     "US Federal Reserve is set to cut rates today; key question is, by how much?",
//   ];

//   return (
//     <div className="bg-white text-gray-900 min-h-screen">
//       {/* Header */}
//       <header className="bg-black text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Bloomberg</h1>
//           <div className="flex items-center space-x-4">
//             <button className="bg-yellow-500 text-black px-4 py-2 rounded">
//               Subscribe
//             </button>
//             <button className="text-white">Sign In</button>
//             <Search className="w-5 h-5" />
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <nav className="bg-gray-100 p-2">
//         <div className="container mx-auto flex space-x-4 text-sm">
//           <a href="#" className="text-red-600">
//             Live TV
//           </a>
//           <a href="#">Markets</a>
//           <a href="#">Economics</a>
//           <a href="#">Industries</a>
//           <a href="#">Tech</a>
//           <a href="#">Politics</a>
//           <a href="#">Businessweek</a>
//           <a href="#">Opinion</a>
//           <a href="#">More</a>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="container mx-auto mt-8 grid grid-cols-12 gap-8">
//         {/* Left Column */}
//         <div className="col-span-8">
//           {/* Featured Article */}
//           <div className="mb-8">
//             <img
//               src={techCrunchNews.urlToImage}
//               alt={techCrunchNews.title}
//               width={800}
//               height={400}
//               className="w-full h-64 object-cover mb-4"
//             />
//             <h2 className="text-3xl font-bold mb-2">{techCrunchNews.title}</h2>
//             <p className="text-gray-600 mb-4">{techCrunchNews.description}</p>
//             <div className="flex items-center text-sm text-gray-500">
//               <CalendarDays className="w-4 h-4 mr-2" />
//               {formatDate(techCrunchNews.publishedAt)}
//             </div>
//           </div>

//           {/* Other Articles */}
//           <div className="grid grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-2">{fedNews[0]}</h3>
//               <p className="text-gray-600 mb-2">
//                 The Federal Reserve's decision on interest rates is eagerly
//                 anticipated by markets worldwide.
//               </p>
//               <a href="#" className="text-blue-600 flex items-center">
//                 Read more <ChevronRight className="w-4 h-4 ml-1" />
//               </a>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2">
//                 Market Reactions to Fed's Decision
//               </h3>
//               <p className="text-gray-600 mb-2">
//                 Analysts predict volatility in stock markets as investors await
//                 the Fed's announcement.
//               </p>
//               <a href="#" className="text-blue-600 flex items-center">
//                 Read more <ChevronRight className="w-4 h-4 ml-1" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="col-span-4">
//           <div className="bg-gray-100 p-4 mb-8">
//             <h3 className="text-xl font-bold mb-4">Latest News</h3>
//             <ul className="space-y-4">
//               <li>
//                 <a href="#" className="text-sm hover:text-blue-600">
//                   Tech stocks rally ahead of earnings reports
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:text-blue-600">
//                   Oil prices stabilize after recent fluctuations
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:text-blue-600">
//                   Global supply chain issues show signs of easing
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Bloomberg News Now</h3>
//             <div className="relative">
//               <img
//                 src="/placeholder.svg?height=200&width=400"
//                 alt="Bloomberg News Now"
//                 width={400}
//                 height={200}
//                 className="w-full mb-2"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Play className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <p className="text-sm text-gray-600">
//               Listen to the latest market updates and analysis
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-100 mt-12 py-8">
//         <div className="container mx-auto text-center text-sm text-gray-600">
//           <p>&copy; 2024 Bloomberg L.P. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
