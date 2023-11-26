import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ContextProvider } from "@/context/ContextProvider";
import { Next13NProgress } from "nextjs13-progress";
import { Toaster } from "react-hot-toast";


export default function HomeLayout({ children }) {
  

  return (
    <>
    <ContextProvider>
      <Navbar />
      {children}
      <Footer />
      <Next13NProgress color="#DF6951" height={5} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
      />
    </ContextProvider>
      
    </>
  )
}


